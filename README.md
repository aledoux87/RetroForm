# Retrø Førm

> 0.1.0

## Processus

Récupération du projet :

```
git checkout https://github.com/mrdoomy/retroform.git
```

Installation du projet :

```
npm install
```

Lancement du projet :

```
npm run start
```

Compilation du projet :

```
npm run build
```

Test du projet :

```
npm run test
```

## Note(s)

- [x] Ajouter un champ `email` au formulaire (composant `<Login />`)
  - <span style="text-decoration:underline">Source :</span> `git checkout main`
  - <span style="text-decoration:underline">Cible :</span> `git checkout feat/email-field`
- [x] Débuguer le fichier **Login.jsx**, afin de mettre à jour l'état (`state`) du composant
  - <span style="text-decoration:underline">Source :</span> `git checkout feat/email-field`
  - <span style="text-decoration:underline">Cible :</span> `git checkout fix/login-state`
- [x] Envoyer le formulaire, et déboguer la fonction `loginUser()` du service `UserService`
  - <span style="text-decoration:underline">Source :</span> `git checkout fix/login-state`
  - <span style="text-decoration:underline">Cible :</span> `git checkout fix/user-form`
- [x] Transformer les composants instanciés par classe (_stateful_), en composants fonctionnels (_stateless_) ; Attention au cycle de vie des composants...
  - <span style="text-decoration:underline">Source :</span> `git checkout fix/user-form`
  - <span style="text-decoration:underline">Cible :</span> `git checkout feat/hooks`
- [x] Créer un composant de récapitulatif de données
  - <span style="text-decoration:underline">Source :</span> `git checkout feat/hooks`
  - <span style="text-decoration:underline">Cible :</span> `git checkout feat/listing`
- [ ] Mettre en place la navigation par routes
  - <span style="text-decoration:underline">Source :</span> `git checkout feat/listing`
  - <span style="text-decoration:underline">Cible :</span> `git checkout feat/routing`
- [ ] Utiliser **Redux**, plutôt que le passage de `props` entre les composants
  - <span style="text-decoration:underline">Source :</span> `git checkout feat/routing`
  - <span style="text-decoration:underline">Cible :</span> `git checkout feat/redux`
- [ ] Center le formulaire verticalement et horizontalement, ajouter de la couleur, etc...
  - <span style="text-decoration:underline">Source :</span> `git checkout feat/redux`
  - <span style="text-decoration:underline">Cible :</span> `git checkout fix/style`
- [ ] En ce basant sur les tests unitaires du fichier `Register.test.jsx`, écrire et exécuter des TUs pour le composant `<Login />`
  - <span style="text-decoration:underline">Source :</span> `git checkout fix/style`
  - <span style="text-decoration:underline">Cible :</span> `git checkout feat/test`

## Licence

```
"THE BEER-WARE LICENSE" (Revision 42):
<phk@FreeBSD.ORG> wrote this file. As long as you retain this notice you
can do whatever you want with this stuff. If we meet some day, and you think
this stuff is worth it, you can buy me a beer in return. Damien Chazoule
```
