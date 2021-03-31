### TODOs
| Filename | line # | TODO
|:------|:------:|:------
| [packages/eslint-base/tests.js](packages/eslint-base/tests.js#L18) | 18 | figure out how to lint these files for extra dev deps
| [packages/daemon-sidebar/lib/db.js](packages/daemon-sidebar/lib/db.js#L10) | 10 | Currently each enrich file there is some early bailing.
| [packages/daemon-sidebar/lib/db.js](packages/daemon-sidebar/lib/db.js#L16) | 16 | Enrich the frontmatter with:
| [packages/daemon-sidebar/lib/db.js](packages/daemon-sidebar/lib/db.js#L19) | 19 | Use this function to nest the DB object by project as well.
| [packages/daemon-sidebar/lib/sidebar.js](packages/daemon-sidebar/lib/sidebar.js#L4) | 4 | Keep an array of all the keys and this is how we'll determine it's siblings.
| [packages/daemon-sidebar/lib/sidebar.js](packages/daemon-sidebar/lib/sidebar.js#L5) | 5 | Make sure to sort by delta
| [packages/daemon-sidebar/lib/sidebar.js](packages/daemon-sidebar/lib/sidebar.js#L6) | 6 | Add alt to links
| [packages/daemon-sidebar/lib/sidebar.js](packages/daemon-sidebar/lib/sidebar.js#L7) | 7 | Allow external links (opens new browser window)
| [packages/daemon-sidebar/lib/sidebar.js](packages/daemon-sidebar/lib/sidebar.js#L22) | 22 | Sidebar should filter by projects
| [packages/daemon-sidebar/lib/sidebar.js](packages/daemon-sidebar/lib/sidebar.js#L23) | 23 | Add next previous links here ... somehow. Or ask someone todo this for me ... :'(
| [packages/daemon-sidebar/lib/sidebar.js](packages/daemon-sidebar/lib/sidebar.js#L43) | 43 | Rethink this for the sidebar functionality.
| [packages/daemon-sidebar/lib/utils.js](packages/daemon-sidebar/lib/utils.js#L12) | 12 | Get these file paths from the yaml file?
| [packages/daemon-sidebar/lib/enrich/sidebar.js](packages/daemon-sidebar/lib/enrich/sidebar.js#L3) | 3 | Fix this so that it returns an array regarldess of format so I don't break it later.
| [packages/daemon-sidebar/lib/enrich/slug.js](packages/daemon-sidebar/lib/enrich/slug.js#L4) | 4 | Validate as well that it's a slug.
| [packages/daemon-sidebar/lib/format/index.js](packages/daemon-sidebar/lib/format/index.js#L8) | 8 | This should log any duplicates to a file.
| [packages/daemon-sidebar/lib/validate/validate.js](packages/daemon-sidebar/lib/validate/validate.js#L1) | 1 | Add validation all around. Perhaps it can be added to each enrich file.
| [packages/daemon-sidebar/lib/validate/validate.js](packages/daemon-sidebar/lib/validate/validate.js#L2) | 2 | Make a validate directory.
| [packages/daemon-sidebar/lib/validate/validate.js](packages/daemon-sidebar/lib/validate/validate.js#L3) | 3 | Add validation for each property
| [packages/daemon-sidebar/lib/validate/validate.js](packages/daemon-sidebar/lib/validate/validate.js#L8) | 8 | Memoize, or pass it in ala Redux
| [packages/daemon-sidebar/node_modules/glob/common.js](packages/daemon-sidebar/node_modules/glob/common.js#L106) | 106 | is an absolute `cwd` supposed to be resolved against `root`?
| [packages/daemon-sidebar/node_modules/minimatch/minimatch.js](packages/daemon-sidebar/node_modules/minimatch/minimatch.js#L462) | 462 | It would probably be faster to determine this
| [packages/daemon-sidebar/node_modules/string-width/index.js](packages/daemon-sidebar/node_modules/string-width/index.js#L46) | 46 | remove this in the next major version
| [packages/daemon-sidebar/node_modules/yargs-parser/browser.js](packages/daemon-sidebar/node_modules/yargs-parser/browser.js#L4) | 4 | figure out reasonable web equivalents for "resolve", "normalize", etc.
| [packages/daemon-sidebar/node_modules/faker/dist/faker.js](packages/daemon-sidebar/node_modules/faker/dist/faker.js#L139) | 139 | change all these methods that accept a boolean to instead accept an options hash.
| [packages/daemon-sidebar/node_modules/faker/dist/faker.js](packages/daemon-sidebar/node_modules/faker/dist/faker.js#L399) | 399 | implement either a gaussian/uniform distribution of points in cicular region.
| [packages/daemon-sidebar/node_modules/faker/dist/faker.js](packages/daemon-sidebar/node_modules/faker/dist/faker.js#L627) | 627 | find undefined here
| [packages/daemon-sidebar/node_modules/faker/dist/faker.js](packages/daemon-sidebar/node_modules/faker/dist/faker.js#L2093) | 2093 | implement for letters e.g. [0-9a-zA-Z] etc.
| [packages/daemon-sidebar/node_modules/faker/dist/faker.js](packages/daemon-sidebar/node_modules/faker/dist/faker.js#L122053) | 122053 | have ability to return specific type of word? As in: noun, adjective, verb, etc
| [packages/daemon-sidebar/node_modules/faker/lib/address.js](packages/daemon-sidebar/node_modules/faker/lib/address.js#L133) | 133 | change all these methods that accept a boolean to instead accept an options hash.
| [packages/daemon-sidebar/node_modules/faker/lib/address.js](packages/daemon-sidebar/node_modules/faker/lib/address.js#L393) | 393 | implement either a gaussian/uniform distribution of points in cicular region.
| [packages/daemon-sidebar/node_modules/faker/lib/commerce.js](packages/daemon-sidebar/node_modules/faker/lib/commerce.js#L81) | 81 | find undefined here
| [packages/daemon-sidebar/node_modules/faker/lib/helpers.js](packages/daemon-sidebar/node_modules/faker/lib/helpers.js#L176) | 176 | implement for letters e.g. [0-9a-zA-Z] etc.
| [packages/daemon-sidebar/node_modules/faker/lib/random.js](packages/daemon-sidebar/node_modules/faker/lib/random.js#L135) | 135 | have ability to return specific type of word? As in: noun, adjective, verb, etc
| [packages/daemon-sidebar/node_modules/inherits-ex/lib/mixin.js](packages/daemon-sidebar/node_modules/inherits-ex/lib/mixin.js#L22) | 22 | Another Implement:
| [packages/daemon-sidebar/node_modules/inherits-ex/lib/mixin.js](packages/daemon-sidebar/node_modules/inherits-ex/lib/mixin.js#L114) | 114 | cant use async function. MUST make chain too.
| [packages/daemon-sidebar/node_modules/inherits-ex/src/mixin.js](packages/daemon-sidebar/node_modules/inherits-ex/src/mixin.js#L22) | 22 | Another Implement:
| [packages/daemon-sidebar/node_modules/inherits-ex/src/mixin.js](packages/daemon-sidebar/node_modules/inherits-ex/src/mixin.js#L114) | 114 | cant use async function. MUST make chain too.
| [packages/daemon-sidebar/node_modules/jake/lib/rule.js](packages/daemon-sidebar/node_modules/jake/lib/rule.js#L107) | 107 | Write a utility function that appends a
| [packages/daemon-sidebar/node_modules/js-yaml/dist/js-yaml.js](packages/daemon-sidebar/node_modules/js-yaml/dist/js-yaml.js#L1621) | 1621 | rework to inline fn with no type cast?
| [packages/daemon-sidebar/node_modules/js-yaml/dist/js-yaml.js](packages/daemon-sidebar/node_modules/js-yaml/dist/js-yaml.js#L3002) | 3002 | Add tag format check.
| [packages/daemon-sidebar/node_modules/yaml/dist/Document-9b4560a1.js](packages/daemon-sidebar/node_modules/yaml/dist/Document-9b4560a1.js#L18) | 18 | Set true in v2
| [packages/daemon-sidebar/node_modules/yaml/dist/Schema-88e323a7.js](packages/daemon-sidebar/node_modules/yaml/dist/Schema-88e323a7.js#L484) | 484 | remove in v2
| [packages/daemon-sidebar/node_modules/yaml/dist/Schema-88e323a7.js](packages/daemon-sidebar/node_modules/yaml/dist/Schema-88e323a7.js#L485) | 485 | remove in v2
| [packages/daemon-sidebar/node_modules/argparse/lib/help/formatter.js](packages/daemon-sidebar/node_modules/argparse/lib/help/formatter.js#L10) | 10 | add [additonal formatters][1]
| [packages/daemon-sidebar/node_modules/cliui/build/lib/string-utils.js](packages/daemon-sidebar/node_modules/cliui/build/lib/string-utils.js#L3) | 3 | look at porting https://www.npmjs.com/package/wrap-ansi to ESM.
| [packages/daemon-sidebar/node_modules/js-yaml/lib/js-yaml/loader.js](packages/daemon-sidebar/node_modules/js-yaml/lib/js-yaml/loader.js#L621) | 621 | rework to inline fn with no type cast?
| [packages/daemon-sidebar/node_modules/js-yaml/lib/js-yaml/type.js](packages/daemon-sidebar/node_modules/js-yaml/lib/js-yaml/type.js#L45) | 45 | Add tag format check.
| [packages/daemon-sidebar/node_modules/yaml/browser/dist/Schema-e94716c8.js](packages/daemon-sidebar/node_modules/yaml/browser/dist/Schema-e94716c8.js#L634) | 634 | remove in v2
| [packages/daemon-sidebar/node_modules/yaml/browser/dist/Schema-e94716c8.js](packages/daemon-sidebar/node_modules/yaml/browser/dist/Schema-e94716c8.js#L635) | 635 | remove in v2
| [packages/daemon-sidebar/node_modules/yaml/browser/dist/index.js](packages/daemon-sidebar/node_modules/yaml/browser/dist/index.js#L18) | 18 | Set true in v2
| [packages/daemon-sidebar/node_modules/yargs-parser/build/lib/index.js](packages/daemon-sidebar/node_modules/yargs-parser/build/lib/index.js#L29) | 29 | figure  out a  way to combine ESM and CJS coverage, such  that
| [packages/daemon-sidebar/node_modules/yargs-parser/build/lib/yargs-parser.js](packages/daemon-sidebar/node_modules/yargs-parser/build/lib/yargs-parser.js#L158) | 158 | @bcoe for the first pass at removing object prototype  we didn't
| [packages/daemon-sidebar/node_modules/yargs-parser/build/lib/yargs-parser.js](packages/daemon-sidebar/node_modules/yargs-parser/build/lib/yargs-parser.js#L745) | 745 | @bcoe in the next major version of yargs, switch to
| [packages/daemon-sidebar/node_modules/yargs-parser/build/lib/yargs-parser.js](packages/daemon-sidebar/node_modules/yargs-parser/build/lib/yargs-parser.js#L766) | 766 | @bcoe in the next major version of yargs, switch to
| [packages/daemon-sidebar/node_modules/yargs-parser/build/lib/yargs-parser.js](packages/daemon-sidebar/node_modules/yargs-parser/build/lib/yargs-parser.js#L1023) | 1023 | @bcoe in the next major version of yargs, switch to
| [packages/daemon-sidebar/node_modules/@saraswati-js/demo-content/node_modules/yaml/dist/Document-9b4560a1.js](packages/daemon-sidebar/node_modules/@saraswati-js/demo-content/node_modules/yaml/dist/Document-9b4560a1.js#L18) | 18 | Set true in v2
| [packages/daemon-sidebar/node_modules/@saraswati-js/demo-content/node_modules/yaml/dist/Schema-88e323a7.js](packages/daemon-sidebar/node_modules/@saraswati-js/demo-content/node_modules/yaml/dist/Schema-88e323a7.js#L484) | 484 | remove in v2
| [packages/daemon-sidebar/node_modules/@saraswati-js/demo-content/node_modules/yaml/dist/Schema-88e323a7.js](packages/daemon-sidebar/node_modules/@saraswati-js/demo-content/node_modules/yaml/dist/Schema-88e323a7.js#L485) | 485 | remove in v2
| [packages/daemon-sidebar/node_modules/@saraswati-js/demo-content/node_modules/yaml/browser/dist/Schema-e94716c8.js](packages/daemon-sidebar/node_modules/@saraswati-js/demo-content/node_modules/yaml/browser/dist/Schema-e94716c8.js#L634) | 634 | remove in v2
| [packages/daemon-sidebar/node_modules/@saraswati-js/demo-content/node_modules/yaml/browser/dist/Schema-e94716c8.js](packages/daemon-sidebar/node_modules/@saraswati-js/demo-content/node_modules/yaml/browser/dist/Schema-e94716c8.js#L635) | 635 | remove in v2
| [packages/daemon-sidebar/node_modules/@saraswati-js/demo-content/node_modules/yaml/browser/dist/index.js](packages/daemon-sidebar/node_modules/@saraswati-js/demo-content/node_modules/yaml/browser/dist/index.js#L18) | 18 | Set true in v2

### FIXMEs
| Filename | line # | FIXME
|:------|:------:|:------
| [packages/daemon-sidebar/node_modules/ejs/ejs.js](packages/daemon-sidebar/node_modules/ejs/ejs.js#L385) | 385 | Remove this in a future version
| [packages/daemon-sidebar/node_modules/ejs/ejs.js](packages/daemon-sidebar/node_modules/ejs/ejs.js#L734) | 734 | May end up with some false positives here
| [packages/daemon-sidebar/node_modules/ejs/lib/ejs.js](packages/daemon-sidebar/node_modules/ejs/lib/ejs.js#L384) | 384 | Remove this in a future version
| [packages/daemon-sidebar/node_modules/ejs/lib/ejs.js](packages/daemon-sidebar/node_modules/ejs/lib/ejs.js#L733) | 733 | May end up with some false positives here
| [packages/daemon-sidebar/node_modules/faker/dist/faker.js](packages/daemon-sidebar/node_modules/faker/dist/faker.js#L121890) | 121890 | this is strange passing in an array index.
| [packages/daemon-sidebar/node_modules/faker/lib/phone_number.js](packages/daemon-sidebar/node_modules/faker/lib/phone_number.js#L20) | 20 | this is strange passing in an array index.
| [packages/daemon-sidebar/node_modules/jake/lib/jake.js](packages/daemon-sidebar/node_modules/jake/lib/jake.js#L226) | 226 | Should only need to add a new entry for the current
| [packages/daemon-sidebar/node_modules/jake/lib/rule.js](packages/daemon-sidebar/node_modules/jake/lib/rule.js#L79) | 79 | Right now this just throws away any passed-in args
| [packages/daemon-sidebar/node_modules/jake/lib/rule.js](packages/daemon-sidebar/node_modules/jake/lib/rule.js#L154) | 154 | Should allow optional ns passed in instead of this hack
