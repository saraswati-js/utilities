# `@saraswati-js/remark-graph`
## Why
There aren't many, if any, decent graphing `remark` plugins out there that work. Any? Either way I needed/wanted something that worked with an older version of remark (I'm limited by what `next-mdx-remote` supports). So this is what I've come up with. You have the full power of `graphviz` and `plantuml`.

This is meant to build markdown files for next js but can be used in any place that accepts `remark` plugins as the api is straight forward. There are a couple of caveats tho (noted below).

There are two ways to work with this plugin as it exports 2 different versions.

1. Hardfile image
1. In memory replacement

`[1]` This will create a file locally next to your markdown. This is great if you want the files to be served externally to your document.

`[2]`This will modify the markdown inline with your markdown in-memory. You will need to save your file manually but this is great if you're okay with the markdown files getting very large (base64 encodes your graph and inlines it into the document) and/or you just need to see previews of your document as you go. 

## It's use in `@saraswati-js`
I will be using it in both ways. The in-memory version for the runtime when working locally before your documentation is pushed up to the saraswati server. Then when in the server the server runtime will parse the document, convert it to an svg file and save it somewhere in the system. This keeps the document at a regular size and the images can be served from elsewhere (`nextjs` public directory).

## Caveats
This plugin forks 2 other remark plugins and puts them together into one package.

You need to externally install `dot`. Which is `graphviz` onto the machine that will be running `@saraswati-js`. It does not come with this package and I'm not sure how I would do that. If someone could show me that would be cool and if I can keep the instal from becomging too large or take too long to install then I can add it in.
