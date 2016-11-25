Example FlyToPosition
-------------------
This is one example of usage of function `flyToPosition(...)`. The source files are placed on the `src` directory. What you can discover on this code:

Javascript utility for the opening of balloon:
```js
    var NavionicsMap = new JNC.Views.BoatingNavionicsMap({
        tagId: '#map',
        center: [10.25581, 43.87145],
        navKey: '******'
    });

    function goTo(position, zoom) {
        var transformed = ol.proj.transform(position, 'EPSG:4326', 'EPSG:3857');
        NavionicsMap.flyToPosition(transformed,zoom);
    }
```

Html code for the invocations
```HTML
  <button onclick="goTo([-73.935242,40.730610],5);">New York City</button>

```
