const { Task } = require("../types");
const { compose } = require("ramda");

const Box = (f) => ({
  map: (g) => Box(compose(f, g)),
  fold: f,
});

const res_ = Box(() => 2)
  .map((two) => two + 1)
  .fold();

Task.of(2).map((two) => two + 1);

const t1 = Task((rej, res) => res(2))
  .map((two) => two + 1)
  .map((three) => three * 2);

//=====================
const res = t1.fork(console.error, console.log);
console.log(res);
