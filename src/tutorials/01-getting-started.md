---
title: Getting Started
id: getting-started
permalink: tutorials/getting-started/
related_tutorials:
---

# Getting Started

## What's in the box
Welcome! Let’s start by looking at what you have in the box:

![Whats in the box]   

    QUIRKBOT: Programmable toy that connects to electronics and Strawbees.
    SERVO BACKPACK: For connecting the Servo Motor to the Quirkbot.
    SERVO MOTOR: This motor can move 120 degrees.
    DUAL COLOR LEDs: Lights with 2 colors that you can attach to the Quirkbot.
    LIGHT SENSOR: Sensing light for fun interaction.
    STRAWBEES: For building structures with drinking straws and cardboard.
    DRINKING STRAWS: Building material.
    USB CABLE: For charging and programming.

All the different parts of the Quirkbot itself has names, check out: [the Anatomy of the Quirkbot](https://github.com/Quirkbot/QuirkbotDocumentation/blob/master/Hardware/Quirkbot_anatomy.pdf) to learn what they are.

## Where to start

First thing to do is to switch on the Quirkbot! The most important thing to think about is to **be careful with the switch**, since it's small and the most fragile part of the Quirkbot. Most of the time the Quirkbot will arrive with half the charge, but some of the time the production forgets to turn off the Quirkbot after test, and in this case you need to start by charging it.

### 1. Switch On the Quirkbot:

<p class="google-youtube"><google-youtube video-id="GkSwaykm1vs" fluid rel="0"></google-youtube></p>


### 2. Attach the Motor Backpack:

<p class="google-youtube"><google-youtube video-id="XO3nd1q9Yx4" fluid rel="0"></google-youtube></p>


### 3. Attach the Motor:

<p class="google-youtube"><google-youtube video-id="wWDKuAK6-ok" fluid rel="0"></google-youtube></p>


### 4. Build something!

Quirkbot makes it easy to make Strawbees move. A great way to get started is to just start building!

To first get started with Strawbees there is a [great guide](http://www.strawbees.com/wp-content/uploads/2015/11/booklet_a4_small.pdf) that you also can download. Only tools needed is a pair of scissors to cut the straws.

To make Strawbees move you don't have to program anything right now. Just switch on the Quirkbot, Plug in the motor and use the program that comes preloaded. This is how the factory preset program works:

<p class="google-youtube"><google-youtube video-id="4HHj5UaTJuU" fluid rel="0"></google-youtube></p>


### 5. Tips and Trix to make your building more fun

- **Attach a Strawbee to your motor:** Snap on a Strawbee on the back of your Servo Motors arm, like this:

![Strawbee to Motor]{: width="422px"}

You need a small Phillips screwdriver to fasten the screw. The arm can be places in different positions depending on what you want to build.


- **Building a motor mount:** There are many ways to connect a Servo motor to Strawbees. Check out these descriptions for [building motor mounts]() *coming soon* Here is also a simple type of motor mount you can build:

![Build motor mount]

- **The straw *secures* the motor arm:** When putting a straw on the Strawbee on the servo motor arm, make sure to slide it over both the Strawbee *and* the motor arm itself, like this:

![Secure motor arm]

- **Use other materials than straws:** Cardboard, Paper, Tape, Rubber bands, Aluminum foil and other light materials

- **Remember:** The Quirkbot Arms, Legs and Horn can be used to connect drinking straws, Just like Strawbees.

- **Inspiration:** To get some examples and inspiration for stuff to build check out [#quirkbot on Instagram](https://www.instagram.com/explore/tags/quirkbot/).

#### When the Quirkbot runs out of battery you need to charge it:

<p class="google-youtube"><google-youtube video-id="DyBdUnRJQzo" fluid rel="0"></google-youtube></p>

## Start programming


To change how the Quirkbot behaves you change the program inside of it. You do this from our website: [code.quirkbot.com/program](http://code.quirkbot.com/program/). You have to use the [Google Chrome Browser](https://www.google.com/chrome/) for everything to work.

When you have created an account you can start creating and uploading code to your Quirkbot.

### 1. Upload code

First time you try to upload, the interface will install a small plug-in in your browser, and on a Windows computer you will have to install drivers. The interface will guide you trough how to do it. (video guide *coming soon*)

After that this is how uploading code works:

<p class="google-youtube"><google-youtube video-id="Wz-Hy0kfnHo" fluid rel="0"></google-youtube></p>

Here is a link to a simple program you can try: [LED example](http://code.quirkbot.com/program/#!/5655f35bd66de10100d133a9) (the link will take you directly to the Quirkbot CODE)

### 2. Creating code

You create new code in the Quirkbot by connecting nodes together and changing the values of them.

Here is how you do some basic things:

#### Add and Delete Nodes
By dragging and dropping into your program, and press the X to get rid of them.

![Add and Delete]{: width="424px"}

#### Connect and disconnect the nodes:
The connections makes a continuous stream of data go from one node to the other.

![Connect Nodes]{: width="477px"}

#### Choose Place
All Nodes that control some external part like an LED or Servo Motor needs ti know where that part is placed.

![Choose Place]{: width="244px"}

#### Change Value
By dragging the slider or type in the value directly.

![Change Value]{: width="328px"}

#### Save Your Code and give it a name.
When you do this the code will automatically get a web address. If you want to share your code just share this address, Don't worry, none but you can change it. If someone shares code with you and you want to make your own copy, press *Clone CODE*. This is now your code and you can make any changes.

![Save Code]{: width="277px"}


*there is of course much more to learn about programming the quirkbot and many more examples are coming soon*


### 3. Attaching LEDs and light sensors:

<p class="google-youtube"><google-youtube video-id="i8j6pVTig60" fluid rel="0"></google-youtube></p>


## Learn More

### Check out the documentation for the Nodes

The {% assign arg1='nodes-docs'%}{% include f_print_page_link %} is starting to take shape. and will soon have many useful examples.

### The Forum

Check out the [Quirkbot Forum](http://forum.quirkbot.com/)! Don't be afraid to ask us any question.

[Strawbee to Motor]: {{r_base_url}}/content-assets/documentation/getting-started/strawbee_to_motor.jpg
[Whats in the box]: {{r_base_url}}/content-assets/documentation/getting-started/whats_in_the_box.jpg
[Build motor mount]: {{r_base_url}}/content-assets/documentation/getting-started/build_motor_mount.jpg
[Secure motor arm]: {{r_base_url}}/content-assets/documentation/getting-started/secure_motor_arm.jpg


[Add and Delete]: {{r_base_url}}/content-assets/documentation/gif/add_delete.gif
[Connect Nodes]: {{r_base_url}}/content-assets/documentation/gif/connect_nodes.gif
[Choose Place]: {{r_base_url}}/content-assets/documentation/gif/choose_place.gif
[Change Value]: {{r_base_url}}/content-assets/documentation/gif/change_value.gif
[Save Code]: {{r_base_url}}/content-assets/documentation/gif/save_code.gif















