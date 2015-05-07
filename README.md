<img align="right" src="screenshot.png">

### Dev Ribbon
When on a development site at:
  * `localhost`
  * `.dev`
  * `.local`

...you'll get a green "Development" banner

When on a stage site at:
  * `dev.`
  * `stage.`
  * `preview.`
  * `test.`

...you'll get a green "Stage" banner

---
### Installation
```
bower install dev-ribbon
```

Then add this script to your HTML:
```
<script type="text/javascript" src="bower_components/dev-ribbon/dist/dev-ribbon.min.js"></script>
<link rel="stylesheet" href="bower_components/dev-ribbon/dist/dev-ribbon.min.css" />
```

### Development
```
npm install
gulp watch
```
Changes in the ``src`` folder are automatically compiled into the ```dist`` folder.


Then add this script to your HTML:
```
<script type="text/javascript" src="bower_components/dev-ribbon/dist/dev-ribbon.min.js"></script>
<link rel="stylesheet" href="bower_components/dev-ribbon/dist/dev-ribbon.min.css" />
```
