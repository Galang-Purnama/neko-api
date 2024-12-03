const axios = require("axios");
const FormData = require("form-data");

class API {
  constructor(baseURL, options) {
    this.URI = baseURL;
    this.create = axios.create({
      baseURL: this.URI,
      timeout: 60000,
      headers: options?.headers ? options.headers : {},
      ...options,
    });
  }

  async get(path = "/", query = {}, apikey, options = {}) {
    try {
      const res = await this.create.get(path, {
        params: {
          ...query,
          ...(apikey ? { apikey: apikey } : {}),
        },
        ...options,
      });

      return res.data;
    } catch (error) {
      console.error("GET Request Error:", error.message);
      return { status: 400, error: error.message };
    }
  }

  async post(path = "", data = {}, apikey, options = {}) {
    try {
      let payload;
      let headers = options.headers || {};
      if (typeof data === "object" && !(data instanceof Buffer)) {
        if (apikey) {
          data.apikey = apikey;
        }
        if (data instanceof FormData) {
          payload = data;
          headers = { ...headers, ...data.getHeaders() };
        } else {
          payload = JSON.stringify(data);
          headers["Content-Type"] = "application/json";
        }
      } else {
        payload = data;
      }
      const res = await this.create.post(path, payload, {
        ...options,
        headers,
      });

      return res.data;
    } catch (error) {
      console.error("POST Request Error:", error.message);
      return { status: 400, error: error.message };
    }
  }
}

module.exports = { API };