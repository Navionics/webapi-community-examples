# Magnifier Example
This example show How to create a Magnifier for WebAPIv2 Catalog.


## Getting started

Main Steps:

* Download the repository ( use bower, npm or just simple file download )
* Include the `dist/css/magnifier.css` and `dist/js/magnifier.js` on your html
* Create Magnifier object and link it with WebAPIv2 Catalog ( or in general Navionics WebAPIv2 Map)

Example:
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    [...]

    <script type="text/javascript" src="http://webapiv2.navionics.com/dist/webapi/webapi.min.no-dep.js"></script>
    <link rel="stylesheet" href="http://webapiv2.navionics.com/dist/webapi/webapi.min.css">

    <style type="text/css">
      .map_style {
        width: 440px;
        height: 440px;
      }
    </style>

    [...]

    <link rel="stylesheet" href="css/magnifier.css">
    <script type="text/javascript" src="js/magnifier.js"></script>

    [...]

  </head>
  <body data-root="http://webapiv2.navionics.com/dist/webapi/images">

      [...]

      <div id="map" class="map_style">
          <span id="fullscreen-action" class=" bottom-right fullscreenicons glyphicon glyphicon-fullscreen"></span>
      </div>

      [...]

      <script>
        jQuery(document).ready(function() {

            var productViewer = new JNC.Views.ProductViewer([...]);

            [...]

            var magnifier = new Magnifier({
                toggle: "#fullscreen-action",
                view: "#map"
            }, productViewer);

        });
      </script>

     [...]

  </body>
  </html>
  ```


## Run Demo
It's possible to test offline via `demo.html` file or install `NodeJS` in your system and run  `npm start` command.
*(Note: to see the Navionics chart should be set the Navionics Key in `demo.html`)*


## Repo Content
```
.
|-- dist
|   |-- css
|   |   |-- magnifier.css       CSS Style
|   |   |-- magnifier.css.map   Map file of style
|   |   `-- magnifier.less      Style (less format)
|   |-- demo.html               Demo Example
|   |-- doc                     JS Documentation
|   |   |...
|   `-- js                      
|       `-- magnifier.js        Javascript Magnifier
`-- package.json
```
