---
title: Gate
node: gate
object_id: gate-docs
---

The Gate is a Node used to turn on and off a stream of numbers. It's inserted between two other Nodes to stop or allow data to go from one to the other.

## Connections

<div class="node-input-list" markdown="block">

### Inputs

- *in*
	- Range: *any type of data*
	- The input data to stop or allow.

- *trigger*
	- Values: `0`, `1`
	- `0`=The gate is **closed** and will stop data.<br> `1`= The gate is **open** and and will allow data to go to the <span class='node-output'>out</span>.

</div>


<div class="node-output-list" markdown="block">

### Outputs

- *out*
	- Range: *any type of data*
	- Any data from <span class='node-input'>in</span> when the gate is open.

</div>


## Comment
Comment

## Learn more
Learn about logic gates.


