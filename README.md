# Natural Grid
> Bringing Renaissance-Era Sensibility to Web Layout

Throughout human history, artists and philosophers have been inspired by the Golden Ratio.
This ratio is widely understood as producing visually pleasing patterns when employed in layout objects out in space. One can find manifestations of this ratio in so much of nature, from the spirals of galaxies to the proportions of the human face.
Nevertheless, the grid systems that we use ignore this principle, in favor of a multi-column, symmetrical approach to layout. This produces results that are passable, but none that are quite as inspiring as golden-proportional regions.
This grid system represents the first attempt at using the Golden Ratio as the predominant layout rule in a grid system.

## Getting Started
Install it via bower:

`bower install natural-grid`

Add dependencies to the `<head>` section of your main html:

`<link rel="stylesheet" href="bower_components/ng/css/natural-grid.min.css">`

If you don't use bower, you can manually download and unpack.

##Usage
### Basic Usage
The following is a very basic example:
```html
<div class="ng-xs-2 ng-wrap-2">
  <div class="col">
    <div class="cell">

      <!-- First region content-->

    </div>
  </div>
  <div class="col">
    <div class="cell">

      <!-- Second region content-->

    </div>
  </div>
</div>
```
Start by defining a row. You will need to know:
  1. how many regions you want to divide the row into at the *maximum* width; and
  2. how many regions you want to divide the page into at any other screen width.

The first of these data is appended to the class `ng-wrap-` (in the above example, it's `ng-wrap-2`). The second of these data is appended to the class `ng-` with a minimum screen width for that rule. So, in the above example, extra-small screens and larger should show the row with two columns (e.g., `ng-xs-2`. The available breakpoints are `xs`, `sm`, `md`, and `lg`.

Inside of each column, you need to wrap the entire region in a div with the class `cell`.

### Multipe Breakpoints
You can combine multiple rules on the same row (e.g., `ng-sm-2 ng-md-4 ng-lg-6`. Any screen width below the smallest one for which you define a rule will render the layout as a single-column with stacked regions. This aspect of the grid system is similar to other popular grid systems such as [Bootstrap](http://getbootstrap.com/css/#grid) and [Foundation](http://foundation.zurb.com/grid.html). In other words, the class `ng-xs-1` is presumed unless you specify something to the contrary.

The following shows how to set up a layout with four columns on large-width viewports, three columns on medium-width viewports, two columns on small-width view ports, and one column on extra-small-width viewports:
```html
<div class="ng-sm-2 col-md-3 col-lg-4 ng-wrap-4">
  <div class="col">
    <div class="cell">

      <!-- First region content-->

    </div>
  </div>
  <div class="col">
    <div class="cell">

      <!-- Second region content-->

    </div>
  </div>
  <div class="col">
    <div class="cell">

      <!-- Third region content-->

    </div>
  </div>
  <div class="col">
    <div class="cell">

      <!-- Fourth region content-->

    </div>
  </div>
</div>
```

###Nested Layouts
You can nest layouts inside of each other to create special combinations of sizes. Instead of defining a `cell` within a column, define another layout inside of the column using the rules, above.
The following example would define a nested layout of three columns inside the first cell in a layout with two columns:

```html
<div class="ng-xs-2 ng-wrap-2">
  <div class="col">

    <div class="ng-xs-3 ng-wrap-3">
      <div class="col">
        <div class="cell">

          <!-- First sub-region content-->

        </div>
      </div>
      <div class="col">
        <div class="cell">

          <!-- Second sub-region content-->

        </div>
      </div>
      <div class="col">
        <div class="cell">

          <!-- Third sub-region content-->

        </div>
      </div>
    </div>

  </div>
  <div class="col">
    <div class="cell">

      <!-- Second main region content-->

    </div>
  </div>
</div>
```

###Adjust Spacing Between Regions
The grid comes with no opinion about the spacing you would like between regions. It is recommended you choose something based on the Golden Ratio (of course). Nevertheless, you will have to style this yourself. Doing so is fairly trivial. Just add a CSS rule that sets margins on the `cell` class. For example

```html
[class^="ng-"]  > .col > .cell {
  margin: 16px; /* Space between cells */
  padding: 24px; /* Padding within a cell */
}

```