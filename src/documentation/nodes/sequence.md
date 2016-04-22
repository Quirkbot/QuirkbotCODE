---
title: Sequence
node: sequence
object_id: sequence-docs
---

The Sequence Node can make a sequence of any numbers or values. You can specify how long it will take for the sequence to run trough all the values, and trigger a run. After a run, the sequence will stop, and is ready to be triggered again.

## Connections

<div class="node-input-list" markdown="block">

### Inputs

- *trigger*
    - Values: `0`, `1`
    - When the value changes from `0` to `1` that triggers the sequence and it runs trough all the items once.

- *duration*
    - Range: `0` - `1000`
    - Time in seconds it takes for the Sequence to run when triggered


- *items* <span class='node-input'>0</span> - <span class='node-input'>99</span>
    - Values: *any values*
    - Holds any mix of values or inputs from other Nodes to be sent to <span class='node-output'>out</span>.

</div>

<div class="node-output-list" markdown="block">

### Outputs

- *out*
    - Value: *any values*
    - Outputs the items one by one when the sequence is triggered.

</div>

## Comment
One fun way to use the sequence is to connect it to {% assign arg1='key-sequence-docs' %}{% include f_print_page_link %} and play melodies in a web synth like [this one](http://www.websynths.com/).

## Learn more
Some link or activity
