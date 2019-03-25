# Kit de démarrage de développement de Dapp Ethereum

## Introduction
Un kit de démarrage simple (sans framework javascript type _react_) pour le développement d'application décentralisées sur la blockchain.

## Pré-requis
### Environnement de développement
- Installation NodeJS (version courante): https://nodejs.org/en/
- Installation _Truffle_ : https://truffleframework.com/truffle
- Téléchargement Ganache : https://truffleframework.com/ganache (pas besoin de télécharger la CLI !)
- Installation de l'extention web _Metamask_ : https://metamask.io/

NodeJS est un moteur permettant d'executer du javascript coté serveur (on ne peut pas sinon). Il vient avec NPM, son gestionnaire de paquet.

Truffle est un outil permettant de faciliter le développement d'applications utilisant Ethereum. Il permet notamment de :
- Gérer le cycle de vie des _smart contracts_
- Gérer le test des contracts
Plus d'informations [ici](https://truffleframework.com/docs/truffle/overview)

Ganache permet de déployer facilement une blockchain Ethereum de développement et de la visualiser. Plus d'informations [ici](https://truffleframework.com/docs/ganache/quickstart)

Niveau éditeur de texte / IDE soit :
- un IDE, type [webstorm](https://www.jetbrains.com/webstorm/) (possibilité d'avoir des licences JetBrains en étant étudiant.e)
- Un éditeur de texte, type [visual studio code](https://code.visualstudio.com/). VSCode est un éditeur performant, bien outillé grâce à ces nombreuses extensions disponible sur leur _marketplace_.

### Installation et lancement du projet
#### Installation
Vous devez d'abord télécharger ce projet, pour cela deux options :
- Cliquer sur "Clone or download", puis "Download ZIP"
- Si vous utilisez git, `git clone https://github.com/Prygan/eth_dapp_starter_kit.git`
  
Vous devez ensuite installer les dépendances du projet. Ouvrez un terminal dans le projet, puis effectuez `npm install`

#### Lancement
Vous pouvez ensuite lancer le projet avec `npm run dev`. La commande lance un serveur web et expose le contenu du répertoire _src_ à l'adresse suivante : http://localhost:3000. __Attention__ : Il faut avoir installé metamask et avoir lancé Ganache avant. Dur d'utiliser une application qui se connecte à un réseau Ethereum si vous n'avez pas de réseau Ethereum ni de façon de vous y connecter !

A son lancement, l'application va vouloir se connecter à Ethereum. Cela ouvrira une fenêtre Metamask qui vous permettra de vous connecter. Vous n'avez cependant pas de mot de passe pour le compte de développement ! Vous devez cliquer sur l'option permettant de réinitialiser le mot de passe à partir d'une _passphrase_. Cette _passphrase_ est présente sur la page principale de Ganache. Vous pouvez alors changer le mot de passe.

Lors du premier lancement de Metamask, l'extention ne sera pas configurée pour se connecter à votre blockchain Ganache de développement. Pas de panique, il suffit d'ouvrir l'extention, de cliquer sur la liste des réseaux en haut et d'entrer un nouveau _rpc personnalisé_. Dans _new rpc url_, entrer l'URL de votre réseau Ganache (devrait être http://localhost:7545).

### Pré-requis en terme de connaissances
Ce projet nécessite quelques connaissances préliminaires. Il est conseillé de prendre connaissance des ressources ci-dessous pour comprendre les bases des outils que vous allez utiliser. Vous pourrez ensuite creuser tout au long du projet pour comprendre plus en profondeur votre environnement.

#### Javascript
Javascript est le langage executé sur votre navigateur web quand vous chargez une page web.

Pour un rappel généraliste sur le fonctionnement du web, voir : [How the web works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)

Il est nécessaire de maitriser les bases du Javascript pour pouvoir commencer le projet sans trop de difficultés. Je recommande de consulter les ressources disponibles sur le site de Mozilla. Voir : [Javascript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)

Plus tard, si besoin, de nombreuses informations se trouvent sur le guide de [référence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) de Javascript sur le site de MDN.

#### HTML
Un peu de bases en HTML ne fera pas de mal même si, dans un premier temps, il n'est pas demandé de passer trop de temps sur l'interface. Il faudra tout de même afficher des choses :-)

Les bases : [HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)

Guide de référence sur les différents éléments HTML : [HTML Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

#### Ethereum
Ethereum est une blockchain permettant l'utilisation de _smart contracts_ (code executé sur la blockchain).

Il est conseillé d'avoir une vision globale de ce qu'est Ethereum. On peut trouver de la documentation ici : 
- Documentation Ethereum : [documentation](http://www.ethdocs.org/en/latest/)
- Le Wiki Ethereum ; [wiki](https://github.com/ethereum/wiki/wiki)
- La documentation de Solidity : [solidity](https://solidity.readthedocs.io/en/v0.5.5/)

Se concentrer dans un premier temps sur les points suivant :
- Qu'est ce qu'Ethereum ? [Voir ici](http://www.ethdocs.org/en/latest/introduction/what-is-ethereum.html). Une jolie infographie pour celles et ceux qui disent qu'une image vaut mieux que milles mots : [infographie](https://blog.ethereum.org/wp-content/uploads/2015/06/Ethereum-image-infographic-beginners-guide.png). Une autre introduction peut être trouvée sur le [wiki](https://github.com/ethereum/wiki/wiki/Ethereum-introduction#development) (ne lire que la partie _About Ethereum_).
- Qu'est-ce qu'un _smart contract_ ? [Voir ici](http://www.ethdocs.org/en/latest/contracts-and-transactions/contracts.html#what-is-a-contract) (dans un premier temps, ne lire que les sections _What is a contract ?_, _Ethereum high level languages_, _Solidity_, _Interacting with a contract_). 
- Initation au langage _solidity_ : [Voir ici](https://solidity.readthedocs.io/en/v0.5.5/solidity-by-example.html)

#### Truffle & Web3JS
La documentation se trouve ici : [Truffle overview](https://truffleframework.com/docs/truffle/overview)

Tout n'est pas utile dans un premier temps. Il faut surtout regarder ce qui est relatif à la gestion du cycle de vie du contrat (compilation, déploiement, ...) :
- Compilation des _smart contracts_ : [Compiling smart contracts](https://truffleframework.com/docs/truffle/getting-started/compiling-contracts)
- Déploiement des _smart contracts_ : [Running migration](https://truffleframework.com/docs/truffle/getting-started/running-migrations)
- Interaction avec les _smart contracts_ : [Interacting with your contracts](https://truffleframework.com/docs/truffle/getting-started/interacting-with-your-contracts)

Alors que Truffle permet notamment la gestion des smart contracts, c'est bien web3js qui permet d'interargir avec les noeuds Ethereum. La librairie est directement injectée par _metamask_ et on peut retrouver sa documentation ici : [web3js doc](https://web3js.readthedocs.io/en/1.0/). 

Plusieurs fonctions de la librarie web3js demandent des _fonctions de callback_ en paramètre. Ce mécanisme permet à la fonction appelée d'executer la fonction passée en paramètre. Cela permet notamment de faire des choses en asynchrone du style : "tiens fait ça et quand tu a fini, rappelle moi grâce à cette fonction de _callback_". Plus d'informations ici : [fonctions de rappel](https://developer.mozilla.org/fr/docs/Glossaire/Fonction_de_rappel)

#### Ganache
_Easy peasy_, voir le [quickstart](https://truffleframework.com/docs/ganache/quickstart)

### Structure du projet
Dans ce projet, vous pourrez trouver les répertoires suivants :
- contracts : là où vous pourrez mettre les contrats écrits en _solidity_. Un fichier est déjà présent et sert à truffle pour le déploiement des contrats
- src : là où vous pourrez développer l'application web
- test : là où vous pourrez mettre les fichiers de tests pour les smart contracts (peut être laisser ça de coté dans un premier temps...)
- trufffle-config.js / truffle-box.json : deux fichiers de configuration propre à _truffle_. La compréhension de leur contenu et intérêt est laissé en exercice :)
- package.json : le fichier de configuration de NPM, décrit l'application ainsi que les différentes commandes possible (ex: `npm run dev` lancera "lite-server")
- package-lock.json : fichier généré par npm lors de l'installation des dépendance. Vient décrire les versions des dépendances installées de sorte que plusieurs développeurs travaillant sur le même projet soient sûr d'avoir les même versions des dépendances.
- bs-config.json : fichier de configuration de _lite_server_. Mentionne les répertoires qui seront exposés par le serveur.

### Explication du contenu déjà présent dans le projet
Ce projet est volontairement minimaliste mais permet de tester votre installation. L'idée est d'afficher l'identifiant Ethereum de l'utilisateur.

Le projet en lui-même se trouve dans le répertoire _src_.

Le fichier _index.html_ est le fichier exposé à l'adresse http://localhost:3000. Il importe les fichiers javascript (il faudra mentionner les prochains fichiers si vous en créez de nouveau).

Dans le fichier _index.html_, est importé notamment le fichier _js/lib/app.js_ où se passe toute la magie. 

L'idée est d'afficher de base "Hello, do I know you ?".

Le fichier javascript vient charger un objet _web3_, qui contient la connection au réseau Ethereum ainsi que les différentes méthodes appellant l'API Web3JS.

L'object _web3_ est initialisé dans la fonction _initialiseWeb3()_ située dans _js/lib/utils.js_.

Une fois initialisé, on vient remplacer le texte "do I know you ?" par l'adresse Ethereum de l'utilisateur connecté, via la fonction `web3.eth.defaultAccount`.

__Attention__ : j'utilise parfois certaines fonctionnalités de javascript qui peuvent sembler obscures. Regarder les liens présents dans les commentaires des fichiers pour en apprendre plus sur ces fonctionnalités.

### Quelques problèmes potentiels
#### Ouvrir la console Javascript
Tout navigateur qui se respecte vient avec une console javascript. Sur firefox, on y accède de la façon suivante : petit menu en forme de burger > Développement Web > Console du navigateur. Pour les autres navigateurs, je vous laisse trouver :-)

Il est possible d'afficher des informations dans le navigateur avec `console.log("test")` dans un fichier javascript (l'équivalent de `system.out.println("test")` en Java).

Javascript embarque aussi un débugger. Plus d'infos [ici](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/debugger).

#### Erreurs de synchronisation dans metamask
Quand vous commencerez à jouer avec des transactions Ethereum, metamask peut se désynchroniser entre deux sessions de développement. En effet, quand vous fermez puis réouvrez Ganache, la blockchain de dev est réinitialisée. Ce n'est pas le cas de Metamask, qui se retrouve alors désynchronisé. A ce stade, plus possible de faire de nouvelles transactions. Il faut alors aller dans Metamask, cliquer sur l'icone ronde du compte (en haut à droite), aller dans _paramètres_ et réinitialiser le compte.

### Le projet en lui-même.
Projet ~~copié~~ inspiré du projet ["Project #3: Ethereum de-centralized app"](http://cs251crypto.stanford.edu/18au-cs251/) proposé à Standford.

L'idée du projet est de faire un version d'une application type pumpkin/tricount/splitwise.

L'idée est de permettre à des personnes d'enregistrer leurs petites dépenses sur Ethereum. On peut partir de l'hypothèse que leur identifiant sera leur identifiant de compte sur Ethereum et qu'ils connaissent tous ceux de leurs amis.

L'application devra à minima permettre de :
- Enregistrer une transaction (avec des infos type : de qui ? vers qui ? Combien ? Quel motif ?)
- Obtenir les soldes de chacun. Par exemple, si Alice a dépensé 10 euros pour elle et Bob, alors Bob doit 10 euros à Alice.

Une fois ces premières fonctionnalités implémentées, il est possible d'en implémenter d'autres, par exemple :
- Afficher la liste des utilisateurs avec qui j'ai dépensé de l'argent
- Afficher le montant d'argent total de dépenses que j'ai enregistré
- Rembourser directement via Ethereum (on pourra alors considérer dans un premier temps que la monnaie enregistrer est de l'Ether, pour éviter de devoir se poser des questions relatives aux changes Euros <> Eth)

Des travaux supplémentaires pourraient aussi comprendre :
- Amélioration du front
- Stockage de factures / tickets de caisse en format image ou pdf sur un [IPFS](https://ipfs.io/)

Vous êtes libre au niveau de l'implémentation. Commencez simple et complexifiez au fur et à mesure ! Il serait peut être intéressant dans un premier temps, par exemple, de juste afficher la liste des transactions. Il est important de planifier ces développements en petites versions (avec une date de rendu) et non pas juste "conception puis développement puis soutenance" (sinon l'échec est à prévoir...).

N'oubliez pas que chaque appel de fonction sur Ethereum a un coût. Il faut donc minimiser le code executé coté Ethereum (_smart contracts_).

Ces specifications sont relativement succintes. Pour plus d'informations et pour toute question, se référer au client (moi :)).
