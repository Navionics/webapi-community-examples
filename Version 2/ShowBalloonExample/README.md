Example ShowBalloon
-------------------

This is one complex example of `showBalloon(...)`. The source files are placed on the `src` directory. What you can discover on this code:

### Open a balloon with title or title + content.
Javascript code:
```js
    function openBalloon(title, body, position) {
        var content = {
            title: title,
            content: body,
            coordinates: ol.proj.transform(position, 'EPSG:4326', 'EPSG:3857'),
        }
        NavionicsMap.showBalloon(content);
    }
```

Html code:
```HTML

    <!-- Title + Content -->
    <button onclick="openBalloon('Navionics Italy','Email: sales@navionics.it ',[10.2934848,43.87916]);">Navionics SPA </button>

    <!-- Only title -->
    <button onclick="openBalloon('Sheung Wan, Hong Kong',null,[114.149139,22.286394],5);">Sheung Wan, Hong Kong</button>

```

### Open a balloon with complex content.
As extension of previous case in javascript code:

```js
function openNewYourkBalloon() {
    var title = "New York";
    var descriptions =
        '<b>New York</b> is a <a href=\"//en.wikipedia.org/wiki/U.S._state\" title=\"U.S. state\">state</a> in the <a href=\"//en.wikipedia.org/wiki/Northeastern_United_States\" title=\"Northeastern United States\">northeastern United States</a>, and is the <a href=\"//en.wikipedia.org/wiki/List_of_U.S._states_and_territories_by_area\" title=\"List of U.S. states and territories by area\">27th-most extensive</a>, <a href=\"//en.wikipedia.org/wiki/List_of_U.S._states_and_territories_by_population\" title=\"List of U.S. states and territories by population\">fourth-most populous</a>, and <a href=\"//en.wikipedia.org/wiki/List_of_U.S._states_by_population_density\" title=\"List of U.S. states by population density\">seventh-most densely populated</a> U.S. state. New York is bordered by <a href=\"//en.wikipedia.org/wiki/New_Jersey\" title=\"New Jersey\">New Jersey</a> and <a href=\"//en.wikipedia.org/wiki/Pennsylvania\" title=\"Pennsylvania\">Pennsylvania</a> to the south and <a href=\"//en.wikipedia.org/wiki/Connecticut\" title=\"Connecticut\">Connecticut</a>, <a href=\"//en.wikipedia.org/wiki/Massachusetts\" title=\"Massachusetts\">Massachusetts</a>, and <a href=\"//en.wikipedia.org/wiki/Vermont\" title=\"Vermont\">Vermont</a> to the east. The state has a <a href=\"//en.wikipedia.org/wiki/Maritime_boundary\" title=\"Maritime boundary\">maritime border</a> in the <a href=\"//en.wikipedia.org/wiki/Atlantic_Ocean\" title=\"Atlantic Ocean\">Atlantic Ocean</a> with <a href=\"//en.wikipedia.org/wiki/Rhode_Island\" title=\"Rhode Island\">Rhode Island</a>, east of <a href=\"//en.wikipedia.org/wiki/Long_Island\" title=\"Long Island\">Long Island</a>, as well as an <a href=\"//en.wikipedia.org/wiki/Canada%E2%80%93United_States_border\" title=\"Canada–United States border\">international border</a> with the <a href=\"//en.wikipedia.org/wiki/Canadian_provinces\" class=\"mw-redirect\" title=\"Canadian provinces\">Canadian provinces</a> of <a href=\"//en.wikipedia.org/wiki/Quebec\" title=\"Quebec\">Quebec</a> to the north and <a href=\"//en.wikipedia.org/wiki/Ontario\" title=\"Ontario\">Ontario</a> to the west and north. The state of New York, with an estimated 19.8 million residents in 2015,<sup id=\"cite_ref-PopEstUS_4-1\" class=\"reference\"><a href=\"#cite_note-PopEstUS-4\">[4]</a></sup> is often referred to as <b>New York State</b> to distinguish it from <a href=\"//en.wikipedia.org/wiki/New_York_City\" title=\"New York City\">New York City</a>, the state\'s most populous city and its economic hub.</p>';
    var position = [-73.935242, 40.730610];
    openBalloon(title, descriptions, position);
}
```
Html code:
```HTML

  <button onclick="openNewYourkBalloon();">New York City</button>

```



### Custom style to balloon.

Style scripts

```css
.jnc-balloon-title {
    font-weight: bold;
    font-size: 21px;
    padding-bottom: 10px;
}

.jnc-balloon-content {
    width: 100%;
    max-height: 180px;
    overflow: scroll;
    font-size: 13px;
    text-align: justify;
}
```
