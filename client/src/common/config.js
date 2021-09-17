import { config } from "dotenv-flow";
import * as path from "path";

const root = path.join.bind(this, __dirname);
config({ path: root("../../") });

export default {
  SERVER: { HOST: process.env.SERVER_HOST, PORT: process.env.SERVER_PORT },
};
