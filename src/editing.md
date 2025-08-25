# Updating this Manual

The content of this manual lives on github at
<https://github.com/Air-Light-Time-Space/wiki>.

If you have questions about editing the manual, feel free to ask in our discord server or on the mailing list.

Your GitHub user account will need to be added to the [contributors group](https://github.com/orgs/Air-Light-Time-Space/teams/altspace-contributors/members) — ask on discord!

## Structure

The content lives in a series of [markdown](https://guides.github.com/features/mastering-markdown/) files.

The navigation menu is defined in the [SUMMARY.md file](https://github.com/Air-Light-Time-Space/wiki/edit/main/src/SUMMARY.md).

Whenever a change is merged to the main branch on GitHub, the site will be automatically rebuilt and redeployed using [Github Actions](https://github.com/Air-Light-Time-Space/wiki/actions). 
In a minute, your changes should appear on altspace.wiki

## Previewing your changes locally

Github's built in browser editor lets you preview your markdown changes, but it may render things a little 
differently from our wiki software. If you'd like to see your changes before you 
commit them, or if you want to test links, you'll need to build the wiki locally
before pushing your changes. To do so, you'll need to install the tool that builds 
our wiki, `mdbook`.

You can install mdbook by downloading a 
[pre-built release](https://github.com/rust-lang/mdBook/releases), or if you have 
[rust installed](https://www.rust-lang.org/tools/install), you can build it yourself 
with `cargo install mdbook`. 

Then cd to the wiki directory and run `mdbook serve`.
