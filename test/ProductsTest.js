import Products from "../src/";
import {assert} from 'chai';
import sinon from 'sinon';

describe('Products API', function () {
	beforeEach(function () {
		this.api = new Products('http://api.templatemonster.com/products/v1', 'en');

		this.willInjectFetch = function () {
			this.fetch = sinon.stub();
			this.api.engine = this.fetch;
		};

		this.willReturnResponse = function (url, data) {
			this.willInjectFetch();

			if (typeof data === "undefined") {
				data = url;
				const response = new Response(JSON.stringify(data));
				this.fetch.returns(Promise.resolve(response));
			} else {
				const response = new Response(JSON.stringify(data));
				this.fetch.withArgs(url).returns(Promise.resolve(response));
			}
		};

		this.willReturn404 = function () {
		  this.willInjectFetch();
			const response = new Response(JSON.stringify(data));
			this.fetch.returns(Promise.resolve(response));
		}
	});

	it('gets product info', function (done) {
		const template = {id: 12345, title: "Sample title"};

		this.willReturnResponse('http://api.templatemonster.com/products/v1/products/en/12345', template);

		this.api.getProduct(12345).then(function (response) {
			assert.deepEqual(template, response);
			done();
		})
	});
});
