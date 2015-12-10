---
title: Squeeze Sensor
node: squeeze-sensor
id: squeeze-sensor-docs
---

![Squeeze Sensor Node]

{% assign arg1='light-sensor-docs' %}{% include f_get_page %}

Node that is a self calibrating [{{r_get_page.title}}]({{r_get_page.url}}). It gets analog data from a Light Sensor connected to the Arms, Legs, or Head of the Quirkbot. It gives the lightsesor power from the front pad and reads the back pad to deterimine the amount of hitting light the sensor. The data Is then continously calibrated to the enviroment to get maximum amount of output range. The Node gets it name from an input device you can build by putting a lightsource in the other end of a Drinking Straw and squeezing the drinkingstraw to regulate the amount of light reaching the Light Sensor. It also works with other sensors based on resistance.

Usage

### Connections

Inputs     | Range/Value             | Function
:----------|:------------------------|:--------
place      | `H`,`LA`,`LL`,`RA`,`RL` | Choose where the Lightsensor is placed.
min        | `0` - `1`               | Minimum value of the output range
max        | `0` - `1`               | Maximum value of the output range

**Output:** Amount of light (calibrated to the enviroment) that is a number between the `min` and `max` value.

### Example CODE

Program | Link to Quirkbot CODE
:-------|:---------------------
Description | [Name](http://code.quirkbot.com/program/ "Go to Quirkbot CODE")

### Hardware
Light Sensor
Resistive Sensors
Electric Strawbee

### Comment
Comment

### Learn more
Some link or activity

[Squeeze Sensor Node]: {{r_base_url}}/content-assets/documentation/nodes/SqueezeSensor.png
