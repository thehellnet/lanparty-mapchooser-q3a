import axios from "axios";

class ApiProvider {
  constructor(url) {
    this.http = axios.create({
      baseURL: url,
      headers: { "Content-Type": "application/json" }
    });
  }

  async mapName() {
    const requestBody = {};
    const responseBody = await this.http.post("mapName", requestBody);
    return responseBody.map_tag
  }

  async mapRestart() {
    const requestBody = {};
    await this.http.post("mapRestart", requestBody);
  }

  async randomMap() {
    const requestBody = {};
    const responseBody = await this.http.post("randomMap", requestBody);
    return responseBody.map_tag
  }

  async mapRun(tag) {
    const requestBody = {
      map_tag: tag
    };
    const responseBody = await this.http.post("mapRun", requestBody);
    return responseBody.map_tag
  }
}

const apiProvider = new ApiProvider("http://127.0.0.1:5000/api/public/v1");

export default apiProvider;
