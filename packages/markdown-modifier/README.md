# `@saraswati-js/markdown-modifier`


## NOTE
This will be best as a remark plugin but I don't want to put the effort into that. So it stays as such.

## TODO
- [ ] Convert to TypeScript
- [ ] Build a dest thingy for TS
- [ ] Add actual tests
- [ ] Watch file changes on start directory

```
markdown modifier
  - image files
  - imports
    - local
    - remote
  - Tabs
    - Inline?
    - New pages?
```

Figure out plan for how to do
  - API Docs (Swagger)
  - Components
  - How to chunk components to specific pages/routes

```js
(?:!\<import\>\((.*?)\))
!<import>(./some/file/path/markdown.md)
!(import)[./some/file/path/markdown.md]
```
