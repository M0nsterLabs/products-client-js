export default class Products {
	constructor(url, locale, engine) {
		this.url = url;
		this.locale = locale;
		this.engine = engine || fetch;
	}

	async getProduct(id) {
		const response = await this.engine(this.url + "/products/" + this.locale + "/" + id);
		return await response.json();
	}
}
