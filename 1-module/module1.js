const myModule = require("./app");

myModule();

/* Avant que le code d'un module ne soit exécuté, Node.js va ajouter une fonction englobante, appelée wrapper.

Ce wrapper est le suivant :*/
(function (exports, require, module, __filename, __dirname) {
  // Le code du module contenu dans le fichier.
})();
