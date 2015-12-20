---
title: Servo Motor
node: servo-motor
id: servo-motor-docs
---

Node to control Servo Motors through the Servo Motor Backpack, or any Backpack with a Servo Motor Connector. Servo Motors have an arm that can move to specific position. Maximum movement is a little less than half a rotation, about 120 - 180 degrees, depending on the motor.


## Connections

<div class="node-input-list" markdown="block">

### Inputs

- *position*
    - Range: `0` - `1`
    - Set position of the Servo Motor:<br> `0`=Min<br> `1`=Max<br> `0.5`=Middle.

- *place*
    - Values: `SERVO_BP1`, `SERVO_BP2`, `BP1`, `BP2`, `BP3`, `BP4`, `BP5`, `BP6`
    - Choose where the Servo is connected.

</div>


## Example CODE

<div class="node-example-programs" markdown="block">

- [Example Code](http://code.quirkbot.com/program/XXXXXXXXXXXXXXXX "Go to Quirkbot CODE")
    - Description of example code.

</div>


## Hardware
Servo Motor
Servo Motor Backpack

## Comment
Servo motors have gears instide that are quite fragile, so avoid moving the arm by yourself. Let the Quirkbot move it. Never use force or try to move it past its end positions. You can easily break it.

## Learn more
Servo Motors know their position because they have a built in Sensor that detects what position the Motor is in.
