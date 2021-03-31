console.clear()

const { JsonDB } = require('node-json-db')
const { Config } = require('node-json-db/dist/lib/JsonDBConfig')

const db = new JsonDB(new Config('./db.json', true, false, '/'))
const data = db.getData('/sidebar[0]/name')

console.log(data)









// -------------------------------------------------
// const StormDB = require("stormdb");
// // start db with "./db.stormdb" storage location
// const engine = new StormDB.localFileEngine("./db.json");
// const db = new StormDB(engine);
// // set default db value if db is empty
// // db.default({ users: [] });
// // // add new users entry
// // db.get("users").push({ name: "tom" });
// // update username of first user
// const t = db.get('test-obj.nested-key').value()
//   // .get(0)
//   // .get('name')
//   // .set('jeff')
// // save changes to db
// // db.save();
// console.log(t)

// -------------------------------------------------
// const low = require('lowdb')
// const FileSync = require('lowdb/adapters/FileSync')
// const adapter = new FileSync('db.json')
// const db = low(adapter)
// // db.defaults({ posts: [] }).write()
// // db.get('posts').push({ title: 'some text bitch' }).write()
// // db.get('posts').push({ hey: 'some text bitch' }).write()
// console.log(db.get('posts').get(0))
// // db.write()
