import fetch from 'isomorphic-fetch';

export default class Products {
	constructor(url, locale, engine) {
		this.url = url;
		this.locale = locale;
		this.engine = engine || fetch;
		this.getProduct = this.getProduct.bind(this);
	}

	getProduct(id) {
		console.log("Calling getProduct id", id);
		console.log("Calling getProduct this", this);
		console.log("Calling getProduct this engine", this.engine);
		const result = this.engine(this.url + "/products/" + this.locale + "/" + id);
		console.log('result', result);

		return result
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
