const { API } = require("./api");

class NekoAPI {
  constructor(apikey) {
    this.ApiKEY = apikey ? apikey : ''
    this.baseURL = "https://nkhm.xyz"
  }
  
  get islami() {
    return {
      jadwal_sholat: async (kota) => new API(this.baseURL).get("/api/islami/jadwalsholat", { kota: kota }, this.ApiKEY),
    };
  }
  
  get downloader() {
    return {
      tiktok: async (url) => new API(this.baseURL).get("/api/downloader/tiktok", { url: url }, this.ApiKEY),
      instagram: async (url) => new API(this.baseURL).get("/api/downloader/igdownloader", { url: url }, this.ApiKEY),
      fbdown: async (url) => new API(this.baseURL).get("/api/downloader/fbdown", { url: url }, this.ApiKEY),
      gdrive: async (url) => new API(this.baseURL).get("/api/downloader/gdrive", { url: url }, this.ApiKEY),
      dood: async (url) => new API(this.baseURL).get("/api/downloader/dood", { url: url }, this.ApiKEY),
      terabox: async (url) => new API(this.baseURL).get("/api/downloader/terabox", { url: url }, this.ApiKEY),
      twitter: async (url) => new API(this.baseURL).get("/api/downloader/twitter", { url: url }, this.ApiKEY),
      tiktokv2: async (url) => new API(this.baseURL).get("/api/downloader/tiktokv2", { url: url }, this.ApiKEY),
      tiktokv3: async (url) => new API(this.baseURL).get("/api/downloader/tiktokv3", { url: url }, this.ApiKEY),
      capcut: async (url) => new API(this.baseURL).get("/api/downloader/capcut", { url: url }, this.ApiKEY),
      igdlv2: async (url) => new API(this.baseURL).get("/api/downloader/igdlv2", { url: url }, this.ApiKEY),
      igv3: async (url) => new API(this.baseURL).get("/api/downloader/igv3", { url: url }, this.ApiKEY),
      yt: async (url) => new API(this.baseURL).get("/api/downloader/yt", { url: url }, this.ApiKEY),
      ytv2: async (url) => new API(this.baseURL).get("/api/downloader/yt-v2", { url: url }, this.ApiKEY),
      ytv3: async (url) => new API(this.baseURL).get("/api/downloader/yt-v3", { url: url }, this.ApiKEY),
      soundcloud: async (url) => new API(this.baseURL).get("/api/downloader/soundcloud", { url: url }, this.ApiKEY),
      spotify: async (url) => new API(this.baseURL).get("/api/downloader/spotify", { url: url }, this.ApiKEY),
      mediafire: async (url) => new API(this.baseURL).get("/api/downloader/mediafire", { url: url }, this.ApiKEY),
      sfilemobi: async (url) => new API(this.baseURL).get("/api/downloader/sfilemobi", { url: url }, this.ApiKEY),
      xnxx: async (url) => new API(this.baseURL).get("/api/downloader/xnxx", { url: url }, this.ApiKEY),
      pornhub: async (url) => new API(this.baseURL).get("/api/downloader/pornhub", { url: url }, this.ApiKEY),
      nekopoi: async (url) => new API(this.baseURL).get("/api/downloader/nekopoi", { url: url }, this.ApiKEY),
      doujindesu: async (url) => new API(this.baseURL).get("/api/downloader/doujindesu", { url: url }, this.ApiKEY),
      komikcast: async (url) => new API(this.baseURL).get("/api/downloader/komikcast", { url: url }, this.ApiKEY),
      nhentai: async (id) => new API(this.baseURL).get("/api/downloader/nhentai", { id: id }, this.ApiKEY),
      nhentaiv2: async (id) => new API(this.baseURL).get("/api/downloader/nhentaiv2", { id: id }, this.ApiKEY),
      pixiv: async (id) => new API(this.baseURL).get("/api/downloader/pixiv", { id: id }, this.ApiKEY),
      telesticker: async (id) => new API(this.baseURL).get("/api/downloader/telesticker", { id: id }, this.ApiKEY),
    }
  }
  
  get fun() {
    return {
      dadu: async () => new API(this.baseURL).get("/api/fun/dadu", {}, this.ApiKEY),
      coffee: async () => new API(this.baseURL).get("/api/fun/coffee", {}, this.ApiKEY),
      quotesanime: async () => new API(this.baseURL).get("/api/fun/quotesanime", {}, this.ApiKEY),
    }
  }
  
  get search() {
    return {
      yts: async (text) => new API(this.baseURL).get("/api/search/yts", { text: text }, this.ApiKEY),
      komikcast: async (text) => new API(this.baseURL).get("/api/search/komikcast", { text: text }, this.ApiKEY),
      characterai: async (text) => new API(this.baseURL).get("/api/search/characterai", { text: text }, this.ApiKEY),
      linkgroupwa: async (text) => new API(this.baseURL).get("/api/search/linkgroupwa", { text: text }, this.ApiKEY),
      ringtone: async (text) => new API(this.baseURL).get("/api/search/ringtone", { text: text }, this.ApiKEY),
      wikimedia: async (text) => new API(this.baseURL).get("/api/search/wikimedia", { text: text }, this.ApiKEY),
      google: async (text) => new API(this.baseURL).get("/api/search/google", { text: text }, this.ApiKEY),
      wallpaper: async (text) => new API(this.baseURL).get("/api/search/wallpaper", { text: text }, this.ApiKEY),
      sticker: async (text) => new API(this.baseURL).get("/api/search/sticker", { text: text }, this.ApiKEY),
      sfilemobi: async (text) => new API(this.baseURL).get("/api/search/sfilemobi", { text: text }, this.ApiKEY),
      pinterest: async (text) => new API(this.baseURL).get("/api/search/pinterest", { text: text }, this.ApiKEY),
      couplepp: async () => new API(this.baseURL).get("/api/search/couplepp", {}, this.ApiKEY),
    }
  }
  
  get maker() {
    return {
      circle: async (url) => new API(this.baseURL).get("/api/maker/circle", { url: url }, this.ApiKEY),
      beautiful: async (url) => new API(this.baseURL).get("/api/maker/beautiful", { url: url }, this.ApiKEY),
      blur: async (url) => new API(this.baseURL).get("/api/maker/blur", { url: url }, this.ApiKEY),
      darkness: async (url) => new API(this.baseURL).get("/api/maker/darkness", { url: url }, this.ApiKEY),
      facepalm: async (url) => new API(this.baseURL).get("/api/maker/facepalm", { url: url }, this.ApiKEY),
      invert: async (url) => new API(this.baseURL).get("/api/maker/invert", { url: url }, this.ApiKEY),
      pixelate: async (url) => new API(this.baseURL).get("/api/maker/pixelate", { url: url }, this.ApiKEY),
      rainbow: async (url) => new API(this.baseURL).get("/api/maker/rainbow", { url: url }, this.ApiKEY),
      resize: async (url) => new API(this.baseURL).get("/api/maker/resize", { url: url }, this.ApiKEY),
      trigger: async (url) => new API(this.baseURL).get("/api/maker/trigger", { url: url }, this.ApiKEY),
      wanted: async (url) => new API(this.baseURL).get("/api/maker/wanted", { url: url }, this.ApiKEY),
    }
  }
}

module.exports = NekoAPI;
