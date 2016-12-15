
Web API v2 Quick Start
---------------------

Web API v2 allows you to easily add Navionics maps to any website. Below you'll find a complete working example. Create a new file, copy the content below, and open it in a browser:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="authenticity_token" name="csrf-param" />
    <title>Navionics Web API v2</title>

    <link rel="stylesheet" href="http://webapiv2.navionics.com/dist/webapi/webapi.min.css" >
    <script type="text/javascript" src="http://webapiv2.navionics.com/dist/webapi/webapi.min.no-dep.js"></script>

    <style type="text/css">
        html, body, .test_map_div {
            margin: 0;
            width: 100%;
            height: 100%;
        }
    </style>
</head>
<body data-root="http://webapiv2.navionics.com/dist/webapi/images" >
   <div class="test_map_div" ></div>
    <script>
        var webapi = new JNC.Views.BoatingNavionicsMap({
            tagId: '.test_map_div',
            center: [  12.0, 46.0 ],
            navKey: 'your navioncis key'
        });

        webapi.showSonarControl(false);
    </script>
</body>
</html>
```

# Explanation

To actually have Navionics Boating map on your page you have to do couple of things:

- Include Navionics Web API.
- Container element.
- Simple initialization javascript code.
- Receive navionics key.

## Include Navionics Web API

To include Navionics Web API on your page, add following 2 HTML tags into your website header.
```
<script type="text/javascript" src="http://webapiv2.navionics.com/dist/webapi/webapi/webapi.min.no-dep.js"></script>
<link rel="stylesheet" href="http://webapiv2.navionics.com/dist/webapi/webapi.min.css" >
```
When these 2 files included you will be able to use `JNC` JS-namespace on your page.

## Container element.

As a container you provide container's jQuery select in initialization options with `tagId` key.
Also keep in mind that you are able to style container element by yourself with css stylesheets

```
html, body, .test_map_div {
    margin: 0;
    width: 100%;
    height: 100%;
}
```

and specify where the image are located.

```
<body data-root="http://webapiv2.navionics.com/dist/webapi/images" >
```

## Simple initialization javascript code.

To actually use Navionics Web API you have to initialize one of JNC objects on the page.

```
var webapi = new JNC.Views.BoatingNavionicsMap({
    tagId: '.test_map_div',
    center: [  12.0, 46.0 ],
    navKey: 'your navioncis key'
});
```
For example, this initialization block will
- Find and use element with jQuery selector .test_map_div
- When map is loaded center view on provided coordinates: [  12.0, 46.0 ]
- Use the key, to get tiles data.


## Receive Navionics key

To actually use Navionics webapi and display map you have to request a special Navionics key from Navionics.
To do it you have to visit Navionics website: http://www.navionics.com/en/webapi-download and fill out simple form.
After our employees process your request, you will receive a special key, which you will have to use, to be able to receive map tiles.
