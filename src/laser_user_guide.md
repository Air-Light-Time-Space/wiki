<div class="warning">

This page and the machine itself is being actively modified and changed, while it is operable we are not quite to a point where new users can simply pick it up and start using it.

</div>

#### TODO
-[X] Fix homing (damaged ribbon cable)
-[ ] Set up macros
-[ ] backup configs
-[ ] get static ip
-[ ] make some informed settings reccomendations
-[ ] figure out automatic focusing
-[ ] replace x axis belt
-[ ] replace rubber rollers
-[ ] reimpliment physical controls

#### Known Bugs and UX SNAFUs
1. The laser source requires a "tickle" to warm up before it can function. The easiest way to do that right now is to put a rectangle with several passes at 0% such that it wastes some time (several seconds) while it warms up at the beginning of the print job.
~~2. Lightburn seems to ignore the leftmost approx 150mm, despite the fact that it knows that it's there? I need to confirm this on other versions.~~ this seems to have fixed itself, maybe a config issue that was inadvertantly fixed?
3. Use "~" after opening the door to resume. This should be able to be done by toggling hold/resume in the ui, but this appears to be a bug.
4. If you bump the z axis limit switch while joging you will need to turn the machine off and back off of it (this is to avoid requiring z axis homing, not sure if its worth it)

#Operator's Guide

#### Before you begin
Here's a checklist of things which need to be done before using the laser in no particular order. 
* Ensure that both the machine itself and the cord for the compressor are plugged in and the machine is switched on.
* Turn on the ventalation and ensure propper configuration to allow airflow through the machine.
* Turn on the compressor in the cabinet. This is technically not required for everything but its basically never detrimental. Air assist is not controllable by the machine (yet).
* Check mantinence log to ensure the lens has been cleaned recently (TODO: make a mantinence log)
* Wear Protection. It is reccomended to use safety glasses specifically designed for laser safety. (there should be some near the laser engraver)

#### Web interface
While connected to the AltSpace WiFi, navigate to http://10.20.30.16/ in a web browser. This is a web interface used for joging, resetting some errors, access to a terminal, homing, and some other things. It has a settings page, please do not touch the settings page. :)

Note: The ip will likely change in the future and be replaced with a static ip.

#### Software
The firmware is running FluidNC, a GRBL compatible GCode interpreter. As such it can be used with LightBurn (paid) or LaserGRBL (FOSS, but windows only) as well as some other options. (weird inkscape toolchain?) These should be able to connect to the machine over WiFi from any machine connected to the local network. (The usb port is only for configuration and firmware upgrades)

Here are some config files for OOTB support:
[For Lightburn](/files/BigBoi.lbdev)

#### Tuning and Reccomendations
[TODO]