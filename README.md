<img align="right" src="screenshot.png">

### Dev Ribbon
When on a localhost site at:
  * `localhost`
  * `.dev`
  * `.local`

...you'll get a green "LOCALHOST" banner

When on a development site at:
  * `dev.`
  * `stage.`
  * `preview.`
  * `test.`

...you'll get a green "DEVELOPMENT" banner

---
### Installation

### Automatic
```
bower install dev-ribbon
```
That's it!

### Manual
If your bower dependencies are not automatically injected into your html, use this steps:

1. Install our bower component 
```
bower install dev-ribbon
```

2. Then add this script to your HTML:
```
<script type="text/javascript" src="bower_components/dev-ribbon/dist/dev-ribbon.min.js"></script>
<link rel="stylesheet" href="bower_components/dev-ribbon/dist/dev-ribbon.min.css" />
```

### Development Compilation
```
npm install
gulp
```
The compilation is available at the ``dist`` folder.


```
gulp watch
```
Changes in the ``src`` folder are automatically compiled into the ```dist`` folder.


Then add this script to your HTML:
```
<link rel="stylesheet" href="bower_components/dev-ribbon/dist/dev-ribbon.min.css" />
<script type="text/javascript" src="bower_components/dev-ribbon/dist/dev-ribbon.min.js"></script>
```
