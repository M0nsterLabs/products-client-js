export default class Products {
	constructor(url, engine) {
		this.url = url;
		this.engine = engine || fetch;
	}

	async getProduct(id) {
		const response = await this.engine(this.url + "/products/en/" + id);
		return await response.json();
	}
}
