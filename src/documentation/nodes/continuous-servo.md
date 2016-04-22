---
title: Continuous Servo
node: continuous-servo
object_id: continuous-servo-docs
---

Node for using continuously rotating servo motors. These types of motors, sometimes (incorrectly) referred to as "360 servos", have two things you can control: The **Speed** of the rotation and the **direction** of the rotation. Unlike the other servo motors where you can tell the motor to move its arm to a specific location, continuous servos only know it's own speed and rotational direction.

## Connections

<div class="node-input-list" markdown="block">

### Inputs

- *speed*
	- Range: `0` - `1`
	- Rotational Speed of the Servo:<br> `0`=Stopped<br> `1`=Maximum speed

- *direction*
	- Values: `0`, `1`
	- Rotational direction:<br> `0`=Clocwise<br> `1`=Counter Clockwise

- *place*
	- Values: `SERVO_BP1`, `SERVO_BP2`
	- Choose where the Servo is connected.

</div>

## Hardware
Continuous Servo Motors
Servo Motor Backpack

## Comment
Servo motors usually have gears inside that are quite fragile, so avoid moving the arm by yourself. Let the Quirkbot move it. Never use force or you can easily break it.

## Learn more
Continuous Servo Motors know their speed and direction because they have a built in Sensor that detects how the motor moves.
