export default class Products {
	constructor(url, locale, engine) {
		this.url = url;
		this.locale = locale;
		this.engine = engine || fetch;
		this.getProduct = this.getProduct.bind(this);
	}

	async getProduct (id) {
		console.log("Calling getProduct", id, this, this.engine);
		const response = await this.engine(this.url + "/products/" + this.locale + "/" + id);
		return await response.json();
	}
}
