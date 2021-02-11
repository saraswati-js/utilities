#!/usr/bin/env node

console.clear()

const path = require('path')
const yargs = require('yargs')
const faker = require('faker')
const rimraf = require('rimraf')
const { mkfileuuid, markdownPath, articleDir } = require('./_lib/files')
const bodycontent = require('./_lib/body-content')
const markdown = require('./_lib')
const frontmatter = require('./_lib/front-matter')
const images = require('./_lib/images')
const { urlpath } = require('./_lib/path')

if (!yargs.argv.dir) {
  throw new Error('The --dir=./path/to/content argument is required')
}

const COUNT = yargs.argv.count || 500
const DIR = yargs.argv.dir

// Create a bunch of images to be copied over here.
rimraf.sync(DIR)

for (let i = 0; i < COUNT; i++) {
  // Create the article path first.
  const pathconfig = urlpath()
  const deets = markdownPath(DIR, pathconfig.path)
  articleDir(deets.directory)

  const doc = markdown({
    frontmatter: frontmatter({
      title: faker.lorem.words(5),
      version: '1.0.0',
      hash: '123456lkjlkj',
      sidebar: pathconfig.segments,
      file: deets.fullPath,
      project: yargs.argv.project || 'main',
      tags: faker.random.words(5).split(' '),
      layout: 1,
      // slug: '',
      // href: '',
      // git: '',
    }),
    heroimage: images.markdownImage(deets.directory),
    title: faker.lorem.words(3),
    body: bodycontent(20),
  })

  mkfileuuid(DIR, pathconfig.path, doc)
}

console.log(`Finished generating ${COUNT} markdown documents`)