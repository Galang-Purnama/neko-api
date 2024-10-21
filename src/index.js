const { API } = require("./api");

class NekoAPI {
	constructor(apikey) {
		this.ApiKEY = apikey ? apikey : ''
		this.baseURL = "https://nkhm.xyz"
	}
	get islami() {
		return {
			jadwal_sholat: async (kota) => new API(this.baseURL, { kota: kota }, this.ApiKEY).get("/api/islami/jadwalsholat"),
		};
	}
	get downloader() {
		return {
			tiktok: async (url) => new API(this.baseURL, { url: url }, this.ApiKEY).get("/api/downloader/tiktok"),
			instagram: async (url) => new API(this.baseURL, { url: url }, this.ApiKEY).get("/api/downloader/igdownloader"),
			fbdown: async (url) => new API(this.baseURL, { url: url }, this.ApiKEY).get("/api/downloader/fbdown"),
			gdrive: async (url) => new API(this.baseURL, { url: url }, this.ApiKEY).get("/api/downloader/gdrive"),
			dood: async (url) => new API(this.baseURL, { url: url }, this.ApiKEY).get("/api/downloader/dood"),
			terabox: async (url) => new API(this.baseURL, { url: url }, this.ApiKEY).get("/api/downloader/terabox"),
			twitter: async (url) => new API(this.baseURL, { url: url }, this.ApiKEY).get("/api/downloader/twitter"),
			tiktokv2: async (url) => new API(this.baseURL, { url: url }, this.ApiKEY).get("/api/downloader/tiktokv2"),
			tiktokv3: async (url) => new API(this.baseURL, { url: url }, this.ApiKEY).get("/api/downloader/tiktokv3"),
			capcut: async (url) => new API(this.baseURL, { url: url }, this.ApiKEY).get("/api/downloader/capcut"),
			igdlv2: async (url) => new API(this.baseURL, { url: url }, this.ApiKEY).get("/api/downloader/igdlv2"),
			igv3: async (url) => new API(this.baseURL, { url: url }, this.ApiKEY).get("/api/downloader/igv3"),
			yt: async (url) => new API(this.baseURL, { url: url }, this.ApiKEY).get("/api/downloader/yt"),
			ytv2: async (url) => new API(this.baseURL, { url: url }, this.ApiKEY).get("/api/downloader/yt-v2"),
			ytv3: async (url) => new API(this.baseURL, { url: url }, this.ApiKEY).get("/api/downloader/yt-v3"),
			soundcloud: async (url) => new API(this.baseURL, { url: url }, this.ApiKEY).get("/api/downloader/soundcloud"),
			spotify: async (url) => new API(this.baseURL, { url: url }, this.ApiKEY).get("/api/downloader/spotify"),
			mediafire: async (url) => new API(this.baseURL, { url: url }, this.ApiKEY).get("/api/downloader/mediafire"),
			sfilemobi: async (url) => new API(this.baseURL, { url: url }, this.ApiKEY).get("/api/downloader/sfilemobi"),
			xnxx: async (url) => new API(this.baseURL, { url: url }, this.ApiKEY).get("/api/downloader/xnxx"),
			pornhub: async (url) => new API(this.baseURL, { url: url }, this.ApiKEY).get("/api/downloader/pornhub"),
			nekopoi: async (url) => new API(this.baseURL, { url: url }, this.ApiKEY).get("/api/downloader/nekopoi"),
			doujindesu: async (url) => new API(this.baseURL, { url: url }, this.ApiKEY).get("/api/downloader/doujindesu"),
			komikcast: async (url) => new API(this.baseURL, { url: url }, this.ApiKEY).get("/api/downloader/komikcast"),
			nhentai: async (id) => new API(this.baseURL, { id: id }, this.ApiKEY).get("/api/downloader/nhentai"),
			nhentaiv2: async (id) => new API(this.baseURL, { id: id }, this.ApiKEY).get("/api/downloader/nhentaiv2"),
			pixiv: async (id) => new API(this.baseURL, { id: id }, this.ApiKEY).get("/api/downloader/pixiv"),
			telesticker: async (id) => new API(this.baseURL, { id: id }, this.ApiKEY).get("/api/downloader/telesticker"),
		}
	}
	get fun() {
		return {
			dadu: async () => new API(this.baseURL, this.ApiKEY).get("/api/fun/dadu"),
			coffee: async () => new API(this.baseURL, this.ApiKEY).get("/api/fun/coffee"),
			quotesanime: async () => new API(this.baseURL, this.ApiKEY).get("/api/fun/quotesanime"),
		}
	}
	get search() {
		return {
			yts: async (text) => new API(this.baseURL, {text: text}, this.ApiKEY).get("/api/search/yts"),
			komikcast: async (text) => new API(this.baseURL, {text: text}, this.ApiKEY).get("/api/search/komikcast"),
			characterai: async (text) => new API(this.baseURL, {text: text}, this.ApiKEY).get("/api/search/characterai"),
		}
	}
}

module.exports = NekoAPI;