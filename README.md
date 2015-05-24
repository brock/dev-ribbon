<img align="right" src="orange.png">

### Dev Ribbon
When on a localhost site at:
  * `localhost`
  * `.dev`
  * `.local`

...you'll get an orange "LOCALHOST" banner

<img align="right" src="screenshot.png">

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

### Local development in your web app project

1. Type
```
bower link
```
In your local dev-ribbon project



2. And in your webapp project type a new (local) depedency

```
bower link dev-ribbon
```

Now you can develop the dev-ribbon in your web app.
