# Exercices

## Créer un UserService dans app/users

Injecter HttpClient dans ce service

Dans ce service créer une méthode `getAll` qui retourne la requete :
`this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users')`

Tel que le composant users-list puisse dépendre de UserService et que le code
suivant fonctionne

```
ngOnInit() {
this.userService.getAll()
  .subscribe((users) => {
    this.loading = false;
    this.loaderService.isLoading = false;
    this.users = users;
  });
}
```

## Créer une page /blog

Générer un BlogModule *avec routeur* avec angular cli (pensez au -d pour commencer)

Générer un composant posts dans ce module

Créer une route pour ce composant posts `/blog`

Comme pour users-list passer par un service PostService pour récupérer les articles et les afficher (avec le HTML de votre choix)

L'URL à requêter : `https://jsonplaceholder.typicode.com/posts` 
