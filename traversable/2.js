const fs = require("fs");
// const Task = require("data.task");
const { Task } = require("../types");
const { List, Map } = require("immutable-ext");

const httpGet = (path, params) => Task.of(`${path}: result`);

const getUser = (x) => httpGet("/user", { id: x });
const getTimeline = (x) => httpGet(`/timeline/${x}`, {});
const getAds = () => httpGet("/ads", {});

List([getUser, getTimeline, getAds])
  .traverse(Task.of, (f) => f())
  .fork(console.log, (x) => console.log(x.toJS()));
