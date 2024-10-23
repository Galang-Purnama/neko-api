const { API } = require("./api");

class NekoResponse {
  constructor(response) {
    this.data = response.data;
    this.status = response.status;
  }
}

class NekoAPI {
  constructor(apikey) {
    this.ApiKEY = apikey || '';
    this.baseURL = "https://nkhm.xyz";
  }

  async request(endpoint, params = {}, method = 'GET') {
    let response;
    if (method.toLowerCase() === 'get') {
      response = await new API(this.baseURL).get(endpoint, params, this.ApiKEY);
    } else if (method.toLowerCase() === 'post') {
      response = await new API(this.baseURL).post(endpoint, params, this.ApiKEY);
    }
    return new NekoResponse(response);
  }

  get islami() {
    return {
      jadwal_sholat: (kota) => this.request("/api/islami/jadwalsholat", { kota }),
    };
  }

  get downloader() {
    return {
      tiktok: (url) => this.request("/api/downloader/tiktok", { url }),
      instagram: (url) => this.request("/api/downloader/igdownloader", { url }),
      fbdown: (url) => this.request("/api/downloader/fbdown", { url }),
      gdrive: (url) => this.request("/api/downloader/gdrive", { url }),
      dood: (url) => this.request("/api/downloader/dood", { url }),
      terabox: (url) => this.request("/api/downloader/terabox", { url }),
      twitter: (url) => this.request("/api/downloader/twitter", { url }),
      tiktokv2: (url) => this.request("/api/downloader/tiktokv2", { url }),
      tiktokv3: (url) => this.request("/api/downloader/tiktokv3", { url }),
      capcut: (url) => this.request("/api/downloader/capcut", { url }),
      igdlv2: (url) => this.request("/api/downloader/igdlv2", { url }),
      igv3: (url) => this.request("/api/downloader/igv3", { url }),
      yt: (url) => this.request("/api/downloader/yt", { url }),
      ytv2: (url) => this.request("/api/downloader/yt-v2", { url }),
      ytv3: (url) => this.request("/api/downloader/yt-v3", { url }),
      soundcloud: (url) => this.request("/api/downloader/soundcloud", { url }),
      spotify: (url) => this.request("/api/downloader/spotify", { url }),
      mediafire: (url) => this.request("/api/downloader/mediafire", { url }),
      sfilemobi: (url) => this.request("/api/downloader/sfilemobi", { url }),
      xnxx: (url) => this.request("/api/downloader/xnxx", { url }),
      pornhub: (url) => this.request("/api/downloader/pornhub", { url }),
      nekopoi: (url) => this.request("/api/downloader/nekopoi", { url }),
      doujindesu: (url) => this.request("/api/downloader/doujindesu", { url }),
      komikcast: (url) => this.request("/api/downloader/komikcast", { url }),
      nhentai: (id) => this.request("/api/downloader/nhentai", { id }),
      nhentaiv2: (id) => this.request("/api/downloader/nhentaiv2", { id }),
      pixiv: (id) => this.request("/api/downloader/pixiv", { id }),
      telesticker: (id) => this.request("/api/downloader/telesticker", { id }),
    };
  }

  get fun() {
    return {
      dadu: () => this.request("/api/fun/dadu"),
      coffee: () => this.request("/api/fun/coffee"),
      quotesanime: () => this.request("/api/fun/quotesanime"),
    };
  }

  get search() {
    return {
      yts: (text) => this.request("/api/search/yts", { text }),
      komikcast: (text) => this.request("/api/search/komikcast", { text }),
      characterai: (text) => this.request("/api/search/characterai", { text }),
      linkgroupwa: (text) => this.request("/api/search/linkgroupwa", { text }),
      ringtone: (text) => this.request("/api/search/ringtone", { text }),
      wikimedia: (text) => this.request("/api/search/wikimedia", { text }),
      google: (text) => this.request("/api/search/google", { text }),
      wallpaper: (text) => this.request("/api/search/wallpaper", { text }),
      sticker: (text) => this.request("/api/search/sticker", { text }),
      sfilemobi: (text) => this.request("/api/search/sfilemobi", { text }),
      pinterest: (text) => this.request("/api/search/pinterest", { text }),
      couplepp: () => this.request("/api/search/couplepp"),
    };
  }

  get maker() {
    return {
      circle: (url) => this.request("/api/maker/circle", { url }),
      beautiful: (url) => this.request("/api/maker/beautiful", { url }),
      blur: (url) => this.request("/api/maker/blur", { url }),
      darkness: (url) => this.request("/api/maker/darkness", { url }),
      facepalm: (url) => this.request("/api/maker/facepalm", { url }),
      invert: (url) => this.request("/api/maker/invert", { url }),
      pixelate: (url) => this.request("/api/maker/pixelate", { url }),
      rainbow: (url) => this.request("/api/maker/rainbow", { url }),
      resize: (url) => this.request("/api/maker/resize", { url }),
      trigger: (url) => this.request("/api/maker/trigger", { url }),
      wanted: (url) => this.request("/api/maker/wanted", { url }),
      attp: (text) => this.request("/api/maker/attp", { text }),
      ttp: (text) => this.request("/api/maker/ttp", { text }),
      emojimix: (emoji1, emoji2) => this.request("/api/maker/emojimix", { emoji1,  emoji2 }),
      welcome1: (name, gpname, member, pp, bg) => this.request("/api/maker/welcome1", { name, gpname, member, pp, bg }),
      goodbye1: (name, gpname, member, pp, bg) => this.request("/api/maker/goodbye1", { name, gpname, member, pp, bg }),
    };
  }

  get ai() {
    return {
      nekogpt: (message, id, username, custom) => this.request("/api/chat", { message, id, username, custom }, 'POST'),
      toanime: (url) => this.request("/api/ai/toanime", { url }),
    };
  }
}

module.exports = NekoAPI;