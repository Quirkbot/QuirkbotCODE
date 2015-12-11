---
title: Analog Sensor
node: analog-sensor
id: analog-sensor-docs
---

Node that read Analog input from any place on the quirkbot with Analog read capability.

## Connections

<div class="node-input-list" markdown="block">

### Input:

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


<div class="node-output-table" markdown="block">

### Output: 

- *out*
	- Range: `min` - `max`
	- The Analog value as a number between the `min` and `max` values.

</div>

## Example CODE

<div class="node-example-programs" markdown="block">

- [Coin Touch](http://code.quirkbot.com/program/5655b359d66de10100d12694 "Go to Quirkbot CODE")
	- Making an analog resitive sensor with your body, by connecting coins to the Quirkbot with alligator clips.

</div>

## Hardware
Resistive Sensors

## Comment
This Node is meant for using your own resitive sensors and input devices, but you can also use your own bodies resistance as a sensor, or to create a more or less random input voltage. *guide coming soon*. Good to know for advaned users is that the inputs `HB`, `LAB`, `LLB`, `RAB` and `RLB` are premanntly pulled to Ground with a 10k resistor.

## Learn more
One very common resistive input devices is the Potentiometer.
