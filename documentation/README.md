# React-Static Basic Template
A working example of `Saraswati JS`. The intention here is to build out the shape of all the data and having an example theme to referance to build your own theme and theme runners.

All events, data and how it runs will be shown via this [primary] example. Documentation will live elsewhere.

# TODO
## Priority
* Add content to demo content
* Figure out how to organize links

## React static
* Pull out the configs so that each can be handled on it's own.
* Might behoove me to take `react-static-plugin-source-filesystem` and convert it to dynamically handle the layouts for me.
  - Register the layouts in the code
  - Rename to `react-static-plugin-dyanmic-layouts`
* Eventually when I use `react-static-plugin-css-modules` again i'll have to start from scratch.

## Markdown Finder
* Integrate the markdown finder
  - Make it run in the background
- Options
  - ? Create a short hash
    - https://github.com/bibig/node-shorthash (shorthash)
    - http://sahatyalkabov.com/jsrecipes/#!/backend/generating-short-hashesgs
  - Determine the tree's leaf data structure
* Builds a JSON file that is used for `static.config.js`
  - Should re-deploy when it does this
* Tab functionality
  - Requires URL. Preferably not a hash but full URL

## Sidebar
* Make the sidebar show which item is active
  - Remember to use the hash as the first part of the URL. The rest of the URL can be the "pretty" part.
  - https://reach.tech/router/example/active-links
* Will this account for tabs?
  - Possibly as a setting
* When landing on a page the sidebar should open to the correct nested tree + tab if required

## Markdown Features
* Table of contents
  - Find one, I don't want to make another one.
* Content design stuff (Hero image, carosels, bibliographies, graphs, math, et al)
* Glossary
  - Add term in markdown content, it shows up somehow in the document (clickable + popup or at the bottom) plus in a main glossary for the platform

## Api Docs
- Get it in there.

## Pages
* Figure out the main pages that will be supported
  - And their layouts
  - For instance:
    - Landing pages
    - Contact + About [Us]
    - Documentation + Guide
      - Tabs
    - Component playground (https://medium.com/better-programming/creating-a-simple-live-react-editor-a6cc17e77beb)
    - API Docs (Code/Web)
    - Platform -> Product -> Version

## Theme (Boostrap)
* Theme should be all demo content. No proper images. Colours are cool tho.
* Use a proper layout + grid system.
* Find a new base theme I like better
* Pull the theme out so it can be published outside of here.
  - This should be a bunch of components in it's own package like `@sarawati-js/components`
* Finish putting in rest of pages
  - Proper loading screen
  - Support
  - Docs
    - Front page/Overview
      - https://developer.android.com/docs
    - API
    - Examples
    - Classes/Reference
  - About
  - Changelog
  - FAQ
  - Contact
  - Blog & Blog details + Pagination
  - Help/Support
  - Login/Register

### Pages, Layouts & Components
* Menu dropdown layout
  - See anything on this page: https://landkit.goodthemes.co/
* Documentaiton: https://landkit.goodthemes.co/v/2.0.0-alpha/docs/index.html
* CAREER
	- Listing, Opening
* COMPANY
	- About, Pricing, Terms
* HELP CENTER
	- Overview, Article
* CONTACT
	- Basic, Cover
* BLOG
	- Rich View, Article, Showcase, Search
* PORTFOLIO
	- Masonry, Grid Rows, Parallax, Case Study, Sidebar, Sidebar: Fluid, Basic Grid
* Account pages
  - Check em' all out
* Landing Page Layouts
  - Coworking, Rental, Job Listing, Desktop, Mobile, Basic, Startup, Enterprise, Service, Cloud Hosting, Agency

## Web API Explorer
- Use `swagger-ui-react` which is super simple
- Figure how to get a `swagger.json` file out of a repo
- Figure out how to organize
- Figure out how to keep it "watching"
- Might need to be dynamic, if so this is another channel that requires some smarts
- Are there swagger ui themes?

## Misc
* Move examples out of here.
* Once the markdown finder is working
* Convert this bad boy to typescript?
* Update to a newer version of `react-static`
* Re-organize everything
* Global CSS + Inline CSS
* Add in tests
* Convert this to a monorepo

<!--
An interesting ide
https://github.com/benjaminoakes/markdo
-->

## Other interesting themes
https://bootstrapious.com/
* https://landkit.goodthemes.co/careers.html
* https://startbootstrap.com/previews/new-age
* https://startbootstrap.com/previews/simple-sidebar
* https://github.com/startbootstrap/startbootstrap-modern-business
* https://startbootstrap.com/template/modern-business
* https://startbootstrap.com/template/business-frontpage
* https://bootstrapious.com/p/listings-bootstrap-directory-theme
* https://bootstrapious.com/p/bootstrap-corporate-template
* https://bootstrapious.com/p/boutique-bootstrap-e-commerce-template
* https://mobirise.com/extensions/innovationamp/demo_science/
* https://mobirise.com/extensions/conferencem4/life_coach/
* https://colorlib.com/preview/#sierra
* https://colorlib.com/preview/#mosh

```
https://themewagon.com/themes/free-bootstrap-4-html5-responsive-corporate-website-template-loan/
```

https://www.christopherbiscardi.com/post/how-mdx-transforms-into-jsx

