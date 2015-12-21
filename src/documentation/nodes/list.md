---
title: List
node: list
id: list-docs
---

Node for creating a list of any numbers or values. The items on the list can also be used as routable inputs for any stream of numbers. You can add up to 100 items by kicking the the <span class='node-input'>+</span> sign and removing items by clicking the <span class='node-input'>-</span> sign next to them.

The <span class='node-input'>in</span> input is used to choose which of the items goes to <span class='node-output'>out</span>. The valid range of the <span class='node-input'>in</span> is always `0` - `1` which means that what items is chosen at what value depends on how many items the list have. For example a list of only 2 items the first item will be chosen with an input of `0` - `0.49` and the second at the ranges `0.5` - `1`. See more examples below:

 3<br>items | chosen<br>at:    | 4<br>items | chosen<br>at:    | 5<br>items | chosen<br>at:   | 6<br>items | chosen<br>at:
-----------:|:-----------------|-----------:|:-----------------|-----------:|:----------------|-----------:|:-------------
          1 | `0`<br>`0.32`    |          1 | `0`<br>`0.24`    |          1 | `0`<br>`0.19`   |          1 | `0`<br>`0.16`
          2 | `0.33`<br>`0.66` |          2 | `0.25`<br>`0.49` |          2 | `0.2`<br>`0.39` |          2 | `0.17`<br>`0.32`
          3 | `0.67`<br>`1`    |          3 | `0.5`<br>`0.74`  |          3 | `0.4`<br>`0.59` |          3 | `0.33`<br>`0.49`
            |                  |          4 | `0.75`<br>`1`    |          4 | `0.6`<br>`0.79` |          4 | `0.5`<br>`0.66`
            |                  |            |                  |          5 | `0.8`<br>`1`    |          5 | `0.67`<br>`0.82`
            |                  |            |                  |            |                 |          6 | `0.83`<br>`1`


The list output, like most nodes has a non repeat behavior meaning that the value has to change from what was previously sent for anything to be sent out.

## Connections

<div class="node-input-list" markdown="block">

### Inputs

- *in*
    - Range: `0` - `1`
    - Choose which item is sent, or routed to <span class='node-output'>out</span>

- *items* <span class='node-input'>0</span> - <span class='node-input'>99</span>
    - Value: *any values*
    - Holds any mix of values or inputs from other Nodes to be sent to <span class='node-output'>out</span>.

</div>

<div class="node-output-list" markdown="block">

### Outputs

- *out*
    - Value: *any values*
    - The Value from any of the <span class='node-input'>items</span> as chosen by <span class='node-input'>in</span>.

</div>

## Example CODE

<div class="node-example-programs" markdown="block">

- [Example Code](http://code.quirkbot.com/program/XXXXXXXXXXXXXXXX "Go to Quirkbot CODE")
    - Description of example code.

</div>

## Comment
The List can be controlled from a variety of nodes, and can be used quite creatively to solve many different situations.

## Learn more
Some link or activity
