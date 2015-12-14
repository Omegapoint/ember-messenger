# Ember-messenger

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.
(*`required`)

* [Git](http://git-scm.com/)*
* [Node.js](http://nodejs.org/)* (at least version 4.0.x with NPM)
* [Bower](http://bower.io/)*
  * `npm install -g bower`
* [Ember CLI](http://www.ember-cli.com/)*
  * `npm install -g ember-cli`
* [PhantomJS](http://phantomjs.org/)* (integration tests)
  * `npm install -g phantomjs`
* [Watchman](https://facebook.github.io/watchman/) (version 3.x, auto-complie)
  * `brew install watchman`
* [Mirage](http://www.ember-cli-mirage.com/)* (mock out JSON API)
  * `ember install ember-cli-mirage`
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Installation

* `git clone https://github.com/Omegapoint/ember-messenger.git` this repository
* `cd ember-messenger`
* `npm install`
* Change in ember-messenger/bower.json:
```json
...
"ember": "2.0",
"ember-data": "2.0",
...```
* `bower install` (choose at least 2.0 if bower asks)

## Running / Development

* `ember server`
* Visit the app at [localhost:4200](http://localhost:4200).

### Code Generators

* Generate routes (app/routes/xyz.js <--> app/templates/xyz.hbs), e.g.:
  * `ember generate route messages/index`
  * `ember generate route messages/ember`
  * `ember generate route messages/test`
* Generate components (... <--> ...)
  * `ember g component chat-history` (g short for generate)
  * `ember g component chat-message`
* Generate model (... <--> ...)
  * `ember g model ...`
* Make use of the many generators for code, try `ember help generate` for more details.


### Running Tests

* `ember test`
* `ember test --server`
* Visit tests at [localhost:4200/tests](http://localhost:4200/tests).

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)

## To be removed...
### TODO:
  * (mocka data om vi vill)
  * Skapa nytt chatmeddelande
  * Rumsfilter
  * CSS-fix

### IDÈER:
  * Test (fixa failande tester)
  * Nya funktioner

### Notes
appnamamn; todo-mvc --> ember-messenger

routes: todos --> messenger
