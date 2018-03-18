##installation

1.  clone this repo and give it your own name

```
git clone https://github.com/Ricka7x/static-web-boilerplate.git name-of-your-repo
```

2.  open package.json and change the name,description, and version(optional)

3.  customize your README.md to fit your needs

##Running the app

```
$ yarn start or npm run start
```

##Adding pages

Just copy the example index.ejs

##Adding images

just add any image to .src/images

##Adding custom fonts

just add it to fonts folder... the file name structure should be `<family>[-<weight>][-<style>].<extension>`

example: Lato-400-italic.ttf or Lato-bold-italic

visit [gulp-font2css](https://github.com/goblindegook/gulp-font2css/blob/master/README.md) for more information

##Adding custom favicon

just add it to images folder... the file must be named favicon.png though

##Deployment

####with surge

1.  open config.js and change domain to anything you like("no spaces allowed") and run

```
$ yarn deploy
```

2.  if you don't have a surge account you will be prompted to create it, otherwise your done :smile:

####with ghpages

1.  open .gitignore and remove /docs line
2.  push to github
3.  go to your repo then go to settings
4.  go to github pages section and choose master branch /docs folder
