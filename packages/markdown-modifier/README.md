# `@saraswati-js/markdown-modifier`

Don't bother me about this name. It's terrible, I know.

Also, I would prefer if this were done via a markdown preprocessor like unified and put to string but they say:
> `remark-stringify` will do its best to serialize markdown to match the syntax tree, but there are several cases where that is impossible. It’ll do its best, but complete roundtripping is impossible given that any value could be injected into the tree. (`v9.0.1`)

So a regex will be fine and is already pretty fast so that's good too.

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
