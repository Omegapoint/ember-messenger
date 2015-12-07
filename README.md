# Ember-messenger

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


## Oklara notes
### Installera...
* `node -v` (min version 4.0.x ???)
* `npm -v`(min version 4.0.x ????)
* `npm install -g ember-cli`
* `npm install -g bower`
* `brew install watchman` (auto-complie)
* `npm install -g phantomjs` (tests)

### Generera appen
* `ember new ember-messenger`
* `ember server`[localhost:4200](http://localhost:4200)
* `ember test` [localhost:4200/tests](http://localhost:4200/tests)

### Ändra ember-version
* `npm install`
* ``ember-messenger/bower.json:
...
"ember": "2.0",
"ember-data": "2.0",
...``
* `bower install` (välj minst 2.0 om bower undrar)

### Testa att ändra i appen
* ändra rubrik i application.hbs (ta upp handlebars)
* installera ember inspector (addon, finns till chrome och firefox)

### Generera routes (app/routes/xyz.js <--> app/templates/xyz.hbs)
* `ember generate route messages/index`
* `ember generate route messages/ember`
* `ember generate route messages/test`

### Generera component (... <--> ...)
* `ember generate component chat-message`

* fixa integarion test i `tests/compintents/chat-message`

* `ember g component chat-history` (g short för generate)

* `ember generate model ...`

* `ember install ember-cli-mirage`


## TODO:
* (mocka data om vi vill)
* Skapa nytt chatmeddelande
* Rumsfilter
* CSS-fix

## IDÈER:
* Test (fixa failande tester)
* Nya funktioner

-------------
appnamamn; todo-mvc --> ember-messenger
routes: todos --> messenger
