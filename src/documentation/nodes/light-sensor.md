---
title: Light Sensor
node: light-sensor
id: light-sensor-docs
---

![Light Sensor Node]

Node that gets the analog data from a Light Sensor connected to the Arms, Legs, or Head of the Quirkbot. It gives the lightsesor power from the front pad and reads the back pad to deterimine the amount of hitting light the sensor. It also works with other sensors based on resistance.


## Connections

<div class="node-input-table" markdown="block">

**Input:**

- <span class='node-input'>place</span>
	- Values: `H`, `LA`, `LL`, `RA`, `RL`
	- Choose where to read the Analog input.

- <span class='node-input'>min</span>
	- Range: `0` - `1`
	- Minimum value of the output range

- <span class='node-input'>max</span>
	- Range: `0` - `1`
	- Maximum value of the output range

</div>


<div class="node-output-table" markdown="block">

**Output:** 

- <span class='node-output'>out</span>
	- Range: <span class='node-input'>min</span> - <span class='node-input'>max</span>
	- Amount of light that is a number between the <span class='node-input'>min</span> and <span class='node-input'>max</span> value.

</div>


## Example CODE

<div class="node-example-programs" markdown="block">

- [lightGauge](http://code.quirkbot.com/program/5669c1cf5a754e0100b75d6c "Go to Quirkbot CODE")
	- This is the code for showing the meassured light by moving the arm of a Servo Motor

</div>

## Hardware
Light Sensor
Resistive Sensors

## Comment
The sensor usually has a very wide sesetivity to different light conditions, from pitch black to direct sunlight. This means that in any given lightcondition you will not get the full output range of the node. You can solve this by amplifying the signal with the **Converter** node or using the **Squeeze Sensor** that is self calibrating.

## Learn more
There are different types of Light Sensors. The type we ship with the Quirkbot Kits is something called a Phototransistor. A transistor works simlar to a powerswitch in your home and can control the flow of electricity. In a Phototransistor light from its surroundings works as the switch. The more light, the more electricity is flowing trough the Phototransistor.

[Light Sensor Node]: {{r_base_url}}/content-assets/documentation/nodes/LightSensor.png
