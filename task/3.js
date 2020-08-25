const fs = require("fs");
const { Task, Either, Id } = require("../types");
const { Right, Left, fromNullable } = Either;
const { List, Map } = require("immutable-ext");

Task.of(2)
  .map((two) => two * 2)
  .fork(console.error, console.log);

const testUser = { id: 2, name: "user1" };

const Db = {
  find: (_id) => Task((rej, res) => res(testUser)),
};

Db.find(3).fork(console.log, console.log);
