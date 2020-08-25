const Right = (x) => ({
  chain: (f) => f(x),
  map: (f) => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: `Right(${x})`,
});

const Left = (x) => ({
  chain: (f) => Left(x),
  map: (f) => Left(x),
  fold: (f, g) => f(x),
  inspect: `Left(${x})`,
});

const fromNullable = (x) => (x != null ? Right(x) : Left(null));

const tryCatch = (f) => {
  try {
    return Right(f());
  } catch (e) {
    return Left(e);
  }
};

//=====================================

const fs = require("fs");
const { parse } = require("path");

const getPort_ = () => {
  try {
    const str = fs.readFileSync("config.json");
    const config = JSON.parse(str);
    return config.port;
  } catch (e) {
    return 3000;
  }
};

const readFileSync = (path) => tryCatch(() => fs.readFileSync(path));

const parseJSON = (contents) => tryCatch(() => JSON.parse(contents));

const getPort = () =>
  readFileSync("config.json")
    // .map(contents => parseJSON(contents))
    .chain((contents) => parseJSON(contents))
    .map((config) => config.port)
    .fold(
      () => 8080,
      (x) => x
    );

const result = getPort();

console.log(result);

module.exports = {
  Right,
  Left,
  fromNullable,
};
