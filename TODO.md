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
