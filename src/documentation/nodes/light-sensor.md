---
title: Light Sensor
node: light-sensor
id: light-sensor-docs
---

Node that gets the analog data from a physical Light Sensor connected to the Arms, Legs, or Head of the Quirkbot. It gives the Light Sensor power from the front pad and reads the back pad to determine the amount of light hitting the sensor. It also works with other sensors based on resistance.

## Connections

<div class="node-input-list" markdown="block">

### Inputs

- *place*
	- Values: `H`, `LA`, `LL`, `RA`, `RL`
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
	- Amount of light that is a number between the <span class='node-input'>min</span> and <span class='node-input'>max</span> value.

</div>

## Example CODE

<div class="node-example-programs" markdown="block">

- [lightGauge](http://code.quirkbot.com/program/5669c1cf5a754e0100b75d6c "Go to Quirkbot CODE")
	- This is the code for showing the measured light by moving the arm of a Servo Motor

</div>


## Hardware
Light Sensor
Resistive Sensors

## Comment
The sensor usually has a very wide sensitivity to different light conditions, from pitch black to direct sunlight. This means that in any given light condition you will not get the full output range of the node. You can solve this by amplifying the signal with the {% assign arg1='converter-docs' %}{% include f_print_page_link %} node or using the {% assign arg1='squeeze-sensor-docs' %}{% include f_print_page_link %} that is self calibrating.

## Learn more
There are different types of Light Sensors. The type included in the Quirkbot kits is something called a Phototransistor. A transistor works similar to a power switch in your home and can control the flow of electricity. In a Phototransistor the light from its surroundings works as the switch. The more light, the more electricity is flowing trough the Phototransistor.
