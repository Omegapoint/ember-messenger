class: center, middle
count: false
name: start
# Frontendtestning med Ember.js - mobbprogrammering
![omegapoint logo](images/OPblack.jpg)
![duechess sweden](http://photos1.meetupstatic.com/photos/event/8/0/e/0/global_106772992.jpeg)
---

name: agenda
# Agenda

1. About us!
2. Why _Frontendtestning med Ember.js_?
3. Test
4. Ember
5. Test + Ember
6. Mob

.op-logo[![omegapoint logo](images/OPblack-sm.jpg)]
---

name: types-of-test
# Types of tests .red[__-Tora__]

.op-logo[![omegapoint logo](images/OPblack-sm.jpg)]
---

name: frondend-test
# Frondend-test .red[__-Tora__]

.op-logo[![omegapoint logo](images/OPblack-sm.jpg)]
---
name: ember-concept
# Ember - concept and approach .red[__-Pia__]

.op-logo[![omegapoint logo](images/OPblack-sm.jpg)]
---

name: ember-req
# Setup basic Ember project
## Ember requires:
- [Node.js](http://nodejs.org/) >= version 0.12 and npm <= version 2.7
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Ember CLI](http://ember-cli.com/): `npm install -g ember-cli`
- [Mirage](http://www.ember-cli-mirage.com/):  `ember install ember-cli-mirage` (mock out JSON API)

## Optional:
- [Bower](http://bower.io/): `npm install -g bower`
- [PhantomJS](http://phantomjs.org/):  `npm install -g phantomjs` (run tests from cli)
- [Watchman](https://facebook.github.io/watchman/) `brew install watchman`  (version 3.x, auto-complie)
- Development browser inspector extensions; [Chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

.op-logo[![omegapoint logo](images/OPblack-sm.jpg)]
---

name: ember-setup
# Setup basic Ember project - _Create new app_
- `ember new ember-sample-app && cd ember-sample-app`
- Update to [latest](http://emberjs.com/builds/) ember: `ember-messenger/bower.json`
```json
"ember": "2.2.0",
"ember-data": "2.0",
"jquery": "1.11.3",
```
- `bower install`
- `ember server`, `ember serve` or `ember s`
- Visit the app at [localhost:4200](http://localhost:4200)
- Generate blueprints: `ember generate...`
```terminal
ember g route _route-name_
ember g model _model-name_
ember g component _component-name_
```
???
Har tänkt att göra en sampel app, lägga till en route och en componen.
Hade varit kul att hinna med model och mirage med.

.op-logo[![omegapoint logo](images/OPblack-sm.jpg)]
---

name: ember-test
# Test in Ember .red[__-Bestämdes aldrig..__]
- Acceptance test: `ember g acceptance-test login`
- Integration test
- Unit test

.op-logo[![omegapoint logo](images/OPblack-sm.jpg)]
---

name: mob
# MOB, what is it at how do you do? .red[__-Pia__]

.op-logo[![omegapoint logo](images/OPblack-sm.jpg)]
