## Unique URL Format
Short urls are based on:
- Domain
- Platform
- Site location
- Path

Example paths
```
platform.domain.org/docs/this/is/the/path
platform.domain.org/blog/this/is/the/path
platform.domain.org/guide/this/is/the/path
platform.domain.org/api/this/is/the/path

domain.org/platform/docs/this/is/the/path
domain.org/platform/blog/this/is/the/path
domain.org/platform/guide/this/is/the/path
domain.org/platform/api/this/is/the/path
```

These would all be renamed
```
platform.domain.org/shorturlid/this/is/the/path
platform.domain.org/shorturlid/this/is/the/path
platform.domain.org/shorturlid/this/is/the/path
platform.domain.org/shorturlid/this/is/the/path

domain.org/platform/shorturlid/this/is/the/path
domain.org/platform/shorturlid/this/is/the/path
domain.org/platform/shorturlid/this/is/the/path
domain.org/platform/shorturlid/this/is/the/path
```

## Tree definition
```typescript
type semver = `${number}.${number}.${number}`

export interface Metadata = {
  version?: semver
  // The title to show in the browser tab
  title?: string

  // An auto generated hash based on the href/filepath
  hash: string
  
  // Where it belongs on the sidebar.
  sidebar: string[]

  // The URL slug that is built out.
  slug?: string

  // The file this belongs to
  file?: filepath

  // The full route to this page
  href?: URL

  // Where this document belongs.
  project?: string
  
  // Depending on how it's defined in the parent.
  layout?: string | enum

  // A url to the git url for this specific file
  git: string

  // A URL to the previous or next document if they exist.
  // These are auto generated based on the tree, can be
  // overridden in the greymatter
  previous?: URL
  next?: URL

  // A list of tags to org things.
  tags?: string[]
}

export interface ChildlessNode = {
	name: string,
	type: string,
	metadata: Metadata
}

export interface Node extends ChildlessNode = {
	children?: ChildlessNode[]
}
```
