// voir : https://developer.mozilla.org/fr/docs/Glossaire/IIFE
// permet de séparer les portées (sinon toute variable a une portée globale)
(() => {
    // voir : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode
    'use strict';

    // La flèche est une syntaxe pour une fonction fléchée
    // voir : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es
    // c'est une fonction qui prend en paramètre un objet (ici web3) et effectue un traitement dessus
    initialiseWeb3().then((web3) => {
        // C'est ici qu'on pourrait mettre notre code.

        // voir : https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector
        // voir : https://developer.mozilla.org/fr/docs/Web/API/Element/innertHTML
        document.querySelector('#userId').innerHTML = web3.eth.defaultAccount;
    });
})();