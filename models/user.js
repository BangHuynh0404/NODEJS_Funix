const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;
const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email) {
    this.name;
    this.email;
  }
  save() {
    const db = getDb();
    db.collection('users').insertOne(this);
  }
  static findById(userId) {
    const db = getDb();
    db.collection('users')
      .find({ _id: new ObjectId(userId) })
      .next();
  }
}
module.exports = User;
