export default class Products {
	constructor(url, locale, engine) {
		this.url = url;
		this.locale = locale;
		this.engine = engine || fetch;
		this.getProduct = this.getProduct.bind(this);
	}

	getProduct(id) {
		return this.engine(this.url + "/products/" + this.locale + "/" + id)
			.then(function (response) {
				return response.json();
			});
		// 	.then(function (obj) {
		// 		return response.json();
		// 	})
		// console.log("Calling getProduct", id, this, this.engine);
		// const response = await
		// return await
		// response.json();
	}
}
