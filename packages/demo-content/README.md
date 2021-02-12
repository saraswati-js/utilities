# `@saraswati-js/demo-content`
A way to generate demo dummy content all in markdown. Puts them all in randomized directories with an image. All frontmatter reflects this.

To be used with `@saraswati-js` packages for easier development.

## Examples
* `demo-content --dir=./tmp`
* `demo-content --count=10000`
* `demo-content --count=10000 --dir=./tmp`
* `demo-content --type=demo|component` (tbd)

# TODO
* Add imports (partials)
	- Multiple
	- Global
	- Use URL Schemes
* Different content types
	* Generate components content
		- Add the type flag
	* Generate API content
* Create a `Trampoline` function to replace the `while` loop
	- https://t.ly/G90s
	- https://www.xspdf.com/resolution/53855743.html
* Make it typescript
* Have a series of stock images to use so I'm not using a single image every time.
	- Best to have 50 or so that it will randomly pick.