# Modernizr touchevents tests

Modernizr build that only tests for the presence of touchscreen events support. 

## Installation

```sh
$ meteor add jcheroske:modernizr-touch
```

## Usage

If the client is touch-event savvy, the `<html>` tag will have a `touchevents` class added:

```html
<html class="touchevents">
  ...
</html>
```

If the client is not a touchscreen device, a `no-touchevents` class will be added instead:

```html
<html class="no-touchevents">
  ...
</html>
```
