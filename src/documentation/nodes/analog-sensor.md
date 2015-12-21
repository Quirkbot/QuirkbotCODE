---
title: Analog Sensor
node: analog-sensor
id: analog-sensor-docs
---

Node that reads Analog input from any place on the Quirkbot that have Analog read capability.

## Connections

<div class="node-input-list" markdown="block">

### Inputs

- *place*
	- Values: `HB`, `LAB`, `LLB`, `RAB`, `RLB`, `BP1`, `BP2`, `LLF`, `LAF`
	- Choose where to read the Analog input.

- *min*
	- Range: `0` - `1`
	- Minimum value of the output range

- *max*
	- Range: `0` - `1`
	- Maximum value of the output range

</div>


<div class="node-output-list" markdown="block">

### Outputs

- *out*
	- Range: <span class='node-input'>min</span> - <span class='node-input'>max</span>
	- The Analog value as a non repeating number between the <span class='node-input'>min</span> and <span class='node-input'>max</span> values.

</div>

## Example CODE

<div class="node-example-programs" markdown="block">

- [Coin Touch](http://code.quirkbot.com/program/5655b359d66de10100d12694 "Go to Quirkbot CODE")
	- Making an analog restive sensor with your body, by connecting coins to the Quirkbot with alligator clips.

</div>

## Hardware
Resistive Sensors

## Comment
This Node is meant for use with your own restive sensors and input devices, or to use your own bodies resistance as a sensor. It can also create a more or less random input voltage. *guide coming soon*. Good to know for advanced users is that the inputs `HB`, `LAB`, `LLB`, `RAB` and `RLB` are permanently pulled to Ground with a 10k resistor.

## Learn more
One very common resistive input devices is the Potentiometer.
