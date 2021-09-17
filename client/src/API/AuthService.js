import axios from "axios";
import config from "../common/config";

export default class AuthService {
  static async login(body) {
    return await axios.post(
      `http:${config.SERVER.HOST}:${config.SERVER.PORT}/login`,
      body
    );
  }
}
