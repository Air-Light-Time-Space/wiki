<div class="warning">

This page and the machine itself is being actively modified and changed, while it is operable we are not quite to a point where new users can simply pick it up and start using it. It is suggested to revisit this page before use to see what has changed.

</div>

#### TODO
-[X] Fix homing (damaged ribbon cable)
-[ ] backup configs
-[ ] get static ip
-[ ] make some informed settings reccomendations
-[ ] figure out automatic focusing
-[ ] replace x axis belt
-[ ] replace rubber rollers
-[ ] reimpliment physical controls

#### Known Bugs and UX SNAFUs
~~1. The laser source requires a "tickle" to warm up before it can function. The easiest way to do that right now is to put a rectangle with several passes at 0% such that it wastes some time (several seconds) while it warms up at the beginning of the print job.~~ now fixed, but only if you use lightburn on the computer by the machine.
~~2. Lightburn seems to ignore the leftmost approx 150mm, despite the fact that it knows that it's there? I need to confirm this on other versions.~~ this seems to have fixed itself, maybe a config issue that was inadvertantly fixed?
3. Type "~" in the terminal of the webui after opening and closing the door to resume. This should be able to be done by toggling hold/resume in the webui, but this appears to be a bug.
4. There is currently nothing behind where the old screen was, it is highly reccomended to set something over this space on the off chance of a stray beam getting reflected.


#Operator's Guide

#### Before you begin
Here's a checklist of things which need to be done before using the laser in no particular order. 
* Ensure that both the machine itself and the cord for the compressor are plugged in and the machine is switched on.
* Turn on the ventalation and ensure propper configuration to allow airflow through the machine.
* Turn on the compressor in the cabinet. This is technically not required for everything but its basically never detrimental. Air assist is not controllable by the machine (yet).
* Check mantinence log to ensure the lens has been cleaned recently (TODO: make a mantinence log)
* Wear Protection. It is reccomended to use safety glasses specifically designed for laser safety. (there should be some near the laser engraver)

#### Web interface
While connected to the AltSpace WiFi, navigate to http://10.20.30.16/ in a web browser. This is a web interface used for joging, resetting some errors, access to a terminal, homing, and some other things. It has a settings page, please do not touch the settings page. :) This is bookmarked on the space computer.

Note: The ip will likely change in the future and be replaced with a static ip.

#### Software
The firmware is running FluidNC, a GRBL compatible GCode interpreter. As such it can be used with LightBurn (paid) or LaserGRBL (FOSS, but windows only) as well as some other options. (weird inkscape toolchain?) These should be able to connect to the machine over WiFi from any machine connected to the local network. (The usb port is only for configuration and firmware upgrades)

Currently the only well supported software is the copy of Lightburn on the computer next to the machine. This is because of some of the SNAFU workarounds and also because LaserGRBL seems to want to write settings to the machine which doesnt seem to work in the way LaserGRBL expects.


#### Tuning and Reccomendations
[TODO]