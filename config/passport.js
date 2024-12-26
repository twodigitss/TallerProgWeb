// config/passport.js
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../modules/base/users/models'); // Importa tu modelo de usuario

module.exports = function (passport) {
  // Definir la estrategia de autenticación con Passport
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
      // Buscar al usuario por su email
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false, { message: 'El correo no está registrado' });
      }

      // Verificar si la contraseña coincide (encriptada o no)
const isMatch = await bcrypt.compare(password, user.password);

if (!isMatch) {
  // Si la contraseña no coincide en modo encriptado, verifica si es texto plano
  if (password !== user.password) {
    return done(null, false, { message: 'Contraseña incorrecta' });
  }
}

// Si pasa alguna de las validaciones, continuar con la autenticación
return done(null, user);


      // Si todo va bien, retorna el usuario
      return done(null, user);
    } catch (error) {
        return done(error);
    }
    })
  );

  // Serializar el usuario para la sesión
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // Deserializar el usuario de la sesión
  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
  });
};
