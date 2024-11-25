{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  # List packages you want available in this environment
  buildInputs = [
    pkgs.nodejs_22
    pkgs.nodePackages.typescript
    pkgs.nodePackages.nodejs
    pkgs.pkg-config
  ];

  # Set environment variables (optional)
  shellHook = ''
    export EDITOR="vim";
    export PS1="\e[0;36m[Node]\e[0m \W > "
    echo "[NodeJs] development shell!"
  '';
}

