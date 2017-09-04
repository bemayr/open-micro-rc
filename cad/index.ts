import { ball } from "./parts/ball";

function main(): CSG {
  return ball();
}

// https://stackoverflow.com/a/44325252
declare var module: any;
module.exports = main;
