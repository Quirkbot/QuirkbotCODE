---
title: Squeeze Sensor
node: squeeze-sensor
object_id: squeeze-sensor-docs
---

Node that is a self calibrating version of the {% assign arg1='light-sensor-docs' %}{% include f_print_page_link %}. It gets analog data from a physical Light Sensor connected to the Arms, Legs, or Head of the Quirkbot. It gives the Light Sensor power from the front pad, and reads the back pad to determine the amount of light hitting the sensor. The data is then continuously calibrated to the environment to get maximum amount of output range. The Node gets it name from an input device you can build by putting a light source in the other end of a drinking straw and squeezing the drinking straw to change the amount of light reaching the Light Sensor. It also works with other sensors based on resistance.


## Connections

<div class="node-input-list" markdown="block">

### Inputs

- *place*
    - Values: `H`, `LA`, `LL`, `RA`, `RL`
    - Choose where the Light Sensor is placed.

- *min*
    - Range: `0` - `1`
    - Minimum value of the output range.

- *max*
    - Range: `0` - `1`
    - Maximum value of the output range.

</div>

<div class="node-output-list" markdown="block">

### Outputs

- *out*
    - Range: <span class='node-input'>min</span> - <span class='node-input'>max</span>
    - Amount of light (calibrated to the environment) that is a number between the <span class='node-input'>min</span> and <span class='node-input'>max</span> values.

</div>


## Hardware

Light Sensor

Resistive Sensors

Electric Strawbee

## Comment
Comment

## Learn more
Some link or activity
