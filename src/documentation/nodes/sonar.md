---
title: Sonar
node: sonar
object_id: sonar-docs
---

Sonar node is for using the Kit backpack to connect to a [Grove Ultrasonic Ranger](http://www.seeedstudio.com/wiki/Grove_-_Ultrasonic_Ranger) from Seeed Studio. The Sonar measures the distance to an object by bouncing ultrasound its surface.

## Connections

<div class="node-input-list" markdown="block">

### Inputs

- *place*
    - Values: `BP1` - `BP6`
    - Choose where the Grove Ultrasonic Ranger is connected

- *meters*
    - Range: `0` - `4`
    - Maximum distance the sensor responds to in meters

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
    - The distance form an object as a number between the <span class='node-input'>min</span> and <span class='node-input'>max</span> values.

</div>

## Hardware
DYI Kit Backpack
[Grove Ultrasonic Ranger](http://www.seeedstudio.com/wiki/Grove_-_Ultrasonic_Ranger)

## Comment
This is the first test in a line of Nodes to utilize the Grove line of sensors and actuators. The Kit Backpack have e place for the Grove connector that can be soldered on.

## Learn more
Ultrasound is commonly used in robotics and as a smart feature in cars to avoid collisions. It is also very similar to echolocation used by bats to navigate in total darkness.