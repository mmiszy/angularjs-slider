## AngularJS slider directive with no external dependencies

Slider directive implementation for AngularJS, without any dependencies.

- Mobile friendly
- Fast
- Well documented
- Customizable
- Simple to use
- Works both as a tag and as an attribute

## Examples

### Single slider

```javascript
// In your controller
$scope.priceSlider = 150;
```

```html
<div>
    <rz-slider model="priceSlider"></rz-slider>
</div>
```

Above example would render a slider from 0 to 150. If you need floor and ceiling values use `floor` and `ceil` attributes.

```html
<div>
    <rz-slider
         model="priceSlider"
         ceil="450"></rz-slider>

    <!-- OR -->

    <rz-slider
         model="priceSlider"
         floor="0"
         ceil="450"></rz-slider>

</div>
```

### Range slider

```javascript
// In your controller
$scope.priceSlider = {
    min: 100,
    max: 180,
    ceil: 500,
    floor: 0
};
```

```html
<rz-slider
    floor="priceSlider.floor"
    ceil="priceSlider.ceil"
    model="priceSlider.min"
    high="priceSlider.max"></rz-slider>
```

## Directive attributes

**model**

> Model for low value slider. If only _model_ is provided single slider will be rendered.

**high**

> Model for high value slider. Providing both _high_ and _model_ will render range slider.

**floor**

> Minimum value for a slider.

**ceil**

> Maximum value for a slider.

**step**

> slider step.

**precision**

> The precision to display values with. The `toFixed()` is used internally for this.

**translate**

> Custom translate function. Use this if you want to translate values displayed on the slider. For example if you want to display dollar amounts instead of just numbers do this:

```javascript
// In your controller

$scope.priceSlider = {
    min: 100,
    max: 180,
    ceil: 500,
    floor: 0
};

$scope.translate = function(value)
{
    return '$' + value;
}
```

```html
<rz-slider
    floor="priceSlider.floor"
    ceil="priceSlider.ceil"
    model="priceSlider.min"
    high="priceSlider.max"
    translate="translate"></rz-slider>
```

## Plunker example

[http://run.plnkr.co/plunks/PfAdNc/](http://run.plnkr.co/plunks/PfAdNc/)

## Project integration

```html
    <script src="/path/to/angularjs/angular.min.js"></script>
    <script src="/path/to/angularjs-slider/angularjs-slider.min.js"></script>

    <script>
        var YourApp = angular.module('myapp', ['angularjsSlider']);
    </script>
```

## Changelog

**v0.0.1**

    Original rewrite to JavaScript

**v0.1.0**

    Bug fixes
    Performance improvements
    Reduce number of angular bindings
    Reduce number of function calls in event handlers
    Avoid recalculate style
    Hit 60fps
    LESS variables for easier slider color customization

## Disclaimer

This project is based on [https://github.com/prajwalkman/angular-slider](https://github.com/prajwalkman/angular-slider). It has been rewritten from scratch in JavaScript
 (the original source was written in CoffeeScript).

## License

Licensed under the MIT license
