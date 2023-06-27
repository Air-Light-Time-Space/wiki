# Updating this Manual

The content of this manual lives at
<https://github.com/Air-Light-Time-Space/wiki>.

If you're not familiar with Github, or otherwise have questions about editing
the manual, feel free to ask in our discord server or on the mailing list.

If you are familiar with Github, then hopefully this is straight forward. The
content lives in a series of
[markdown](https://guides.github.com/features/mastering-markdown/) files.

Whenever a change is merged, the site will be automatically rebuilt and
redeployed using [Github
Actions](https://github.com/Air-Light-Time-Space/wiki/actions). It could
take a minute.

## Previewing your changes locally

Github lets you preview your markdown changes, but it may render things a little 
differently from our wiki software. If you'd like to see you changes before you 
commit them, or if you want to test links, you'll need to build the wiki locally
before pushing your changes. To do so, you'll need to install the tool that builds 
our wiki, mdbook.

You can install mdbook by downloading a 
[pre-built release](https://github.com/rust-lang/mdBook/releases), or if you have 
[rust installed](https://www.rust-lang.org/tools/install), you can build it yourself 
with `cargo install mdbook`.

