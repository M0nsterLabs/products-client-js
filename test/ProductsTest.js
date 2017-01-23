import Products from "../src/";
import {assert} from 'chai';
import sinon from 'sinon';

describe('Products API', function () {
	beforeEach(function () {
		this.api = new Products('http://api.templatemonster.com/products/v1');

		this.willReturnResponse = function (data) {
			this.fetch = sinon.stub();
			this.api.engine = this.fetch;

			const response = new Response(JSON.stringify(data));
			this.fetch.returns(Promise.resolve(response));
		}
	});

	it('gets product info', function (done) {
		const template = {id: 123456};

		this.willReturnResponse(template);
		this.api.getProduct(12345).then(function (response) {
			assert.deepEqual(template, response);
			done();
		})
	});
});
