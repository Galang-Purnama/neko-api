const { API } = require("./api");

class NekoAPI {
  constructor(apikey) {
    this.ApiKEY = apikey || '';
    this.baseURL = "https://nkhm.xyz";
  }

  async request(endpoint, params = {}, method = 'GET', options = {}) {
    let response;
    if (method.toLowerCase() === 'get') {
      response = await new API(this.baseURL).get(endpoint, params, this.ApiKEY, options); // Remove the unnecessary assignment
    } else if (method.toLowerCase() === 'post') {
      response = await new API(this.baseURL).post(endpoint, params, this.ApiKEY, options); // Remove the unnecessary assignment
    }
    return response;
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
      dadu: () => this.request("/api/fun/dadu", "GET", { responseType: 'arraybuffer' }),
      coffee: () => this.request("/api/fun/coffee", "GET", { responseType: 'arraybuffer' }),
      quotesanime: () => this.request("/api/fun/quotesanime"),
    };
  }

  get search() {
    return {
      yts: (text) => this.request("/api/search/ytplay", { text }),
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
      circle: (url) => this.request("/api/maker/circle", { url }, 'GET', { responseType: 'arraybuffer' }),
      beautiful: (url) => this.request("/api/maker/beautiful", { url }, 'GET', { responseType: 'arraybuffer' }),
      blur: (url) => this.request("/api/maker/blur", { url }, 'GET', { responseType: 'arraybuffer' }),
      darkness: (url) => this.request("/api/maker/darkness", { url }, 'GET', { responseType: 'arraybuffer' }),
      qc: (json) => this.request("/api/maker/qc", json, 'POST', { responseType: 'arraybuffer' }),
      facepalm: (url) => this.request("/api/maker/facepalm", { url }, 'GET', { responseType: 'arraybuffer' }),
      invert: (url) => this.request("/api/maker/invert", { url }, 'GET', { responseType: 'arraybuffer' }),
      pixelate: (url) => this.request("/api/maker/pixelate", { url }, 'GET', { responseType: 'arraybuffer' }),
      rainbow: (url) => this.request("/api/maker/rainbow", { url }, 'GET', { responseType: 'arraybuffer' }),
      resize: (url) => this.request("/api/maker/resize", { url }, 'GET', { responseType: 'arraybuffer' }),
      trigger: (url) => this.request("/api/maker/trigger", { url }, 'GET', { responseType: 'arraybuffer' }),
      wanted: (url) => this.request("/api/maker/wanted", { url }, 'GET', { responseType: 'arraybuffer' }),
      attp: (text) => this.request("/api/maker/attp", { text }, 'GET', { responseType: 'arraybuffer' }),
      ttp: (text) => this.request("/api/maker/ttp", { text }, 'GET', { responseType: 'arraybuffer' }),
      emojimix: (emoji1, emoji2) => this.request("/api/maker/emojimix", { emoji1, emoji2 }, 'GET', { responseType: 'arraybuffer' }),
      welcome1: (name, gpname, member, pp, bg) => this.request("/api/maker/welcome1", { name, gpname, member, pp, bg }, 'GET', { responseType: 'arraybuffer' }),
      goodbye1: (name, gpname, member, pp, bg) => this.request("/api/maker/goodbye1", { name, gpname, member, pp, bg }, 'GET', { responseType: 'arraybuffer' }),
    };
  }

  get ai() {
    return {
      nekogpt: (message, id, username, custom) => this.request("/api/chat", { message, id, username, custom }, 'POST'),
      toanime: (url) => this.request("/api/ai/toanime", { url }, 'GET', { responseType: 'arraybuffer' }),
      bingimg: (text) => this.request("/api/ai/bingimg", { text }),
      bingchat: (text) => this.request("/api/ai/bingchat", { text }),
      characterai: (text, id) => this.request("/api/ai/characterai", { text, id }),
      diffusion: (text, id) => this.request("/api/ai/diffusion", { text, id }, 'GET', { responseType: 'arraybuffer' }),
      hd: (url) => this.request("/api/ai/hd", { url }, 'GET', { responseType: 'arraybuffer' }),
      remini: (url) => this.request("/api/ai/remini", { url }, 'GET', { responseType: 'arraybuffer' }),
      /**
     * Mengambil hasil dari model AI berdasarkan URL yang diberikan.
     * Model yang digunakan dapat berupa salah satu dari berikut:
     * 
     * toonyou, timelessv10, theallys, shoninsbeautiful, pruned, sdv14, rundiffusionfxv10, rundiffusionfx25dv10, revanimatedv122, 
     * redshiftdiffusionv10, realisticvisionv50, realisticvisionv40, realisticvisionv20, realisticvisionv14, protogenx34, portraitplus, 
     * mixstylizedanime, openjourney, neverendingdream, meiname, meinameina, mechamix, majicmixrealisticv4, lyrielv16, lofiv4, juggernaut, 
     * photography, naturals, elldreths-vivid-mix, eimisanimev1, edgeofrealism, dreamshaperv8, dreamshaperv7, dreamshaper, photorealv2, 
     * diffusionv1, animev1, deliberatev3, deliberatev2, dalcefo, cyberrealistic, cuteyukimixadorable, counterfeit, childrensstories, 
     * cetusmix, blazing, aom3a3, anythingv5, anythingv4, anythingv3, analog-diffusion, amireal, absolutereality, 3guofeng3
     */
      anything: (text, model) => this.request("/api/ai/anything", { text, model }, 'GET', { responseType: 'arraybuffer' }),
    };
  }
}

module.exports = NekoAPI;