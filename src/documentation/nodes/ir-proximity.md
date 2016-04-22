---
title: IR Proximity
node: ir-proximity
object_id: ir-proximity-docs
---

Node to use with the DIY IR Proximity Backpack. The IR Proximity detects amount of Infra Read light from an IR-LED that reflects from back to a IR Detector.

## Connections

<div class="node-input-list" markdown="block">

### Inputs

- *min*
    - Range: `0` - `1000`
    - Minimum value of the output range

- *max*
    - Range: `0` - `1000`
    - Maximum value of the output range

</div>

<div class="node-output-list" markdown="block">

### Outputs

- *out*
    - Range: <span class='node-input'>min</span> - <span class='node-input'>max</span>
    - The amount of reflected IR Light in a range between <span class='node-input'>min</span> and <span class='node-input'>max</span> values. Non repeating, meaning it only sends numbers when something changes.

</div>

## Hardware
DIY IR Proximity Backpack

## Comment
Build instructions for the DIY IR Proximity Backpack

### Learn more
What is IR Learn about the electromagnetic spectrum
