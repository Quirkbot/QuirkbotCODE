---
title: Converter
node: converter
object_id: converter-docs
---

Node to convert a stream of numbers from one range to another range. This Node can be used to amplify, compress, shift or invert a signal from one Node to another. This can be useful in many situations, for instance to change the signal from a sensor so that it creates the behavior you want in a Servo Motor.

![Converter Examples]

## Connections

<div class="node-input-list" markdown="block">

### Inputs
- *in*
	- Range: `0` - `1000`
	- The stream of numbers that you want to convert.

- *in min*
	- Range: `0` - `1000`
	- The lowest **expected** number that will go in.

- *in max*
	- Range: `0` - `1000`
	- The highest **expected** number that will go in.

- *out min*
	- Range: `0` - `1000`
	- What the lowest incoming number will be converted to.<br> (Can be set higher than <span class='node-input'>out max</span>).

- *out max*
	- Range: `0` - `1000`
	- What the highest incoming number will be converted to.<br> (Can be set lower than <span class='node-input'>out min</span>).

</div>


<div class="node-output-list" markdown="block">

### Outputs

- *out*
	- Range: <span class='node-input'>out min</span> - <span class='node-input'>out max</span>
	- The converted stream of numbers.
</div>

## Comment
The math formula for the converter is *coming soon*

## Learn more
Conversions are used a lot in real life, learn more about the metric system and SI units. Celsius and Fahrenheit Scales...


[Converter Examples]: {{r_base_url}}/content-assets/documentation/nodes-examples/converter_examples.png

