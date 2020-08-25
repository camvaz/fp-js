const { Right, Left, fromNullable } = require("./2.js");

// const Right = (x) => ({
//   chain: (f) => f(x),
//   map: (f) => Right(f(x)),
//   fold: (f, g) => g(x),
//   inspect: () => `Right(${x})`,
// });

// const Left = (x) => ({
//   chain: (f) => Left(x),
//   map: (f) => Left(x),
//   fold: (f, g) => f(x),
//   inspect: () => `Left(${x})`,
// });
const findColor = (name) =>
  fromNullable({ red: "#ff4444", blue: "#3b5998", yellow: "#fff68f" }[name]);

const res = () =>
  findColor("redd")
    .map((x) => x.toUpperCase())
    .map((x) => x.slice(1))
    .fold(
      () => "no color",
      (color) => color
    );

console.log(res());
