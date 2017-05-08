<a name="Products"></a>

## Products
**Kind**: global class  

* [Products](#Products)
    * [new Products()](#new_Products_new)
    * [.getProducts(ids)](#Products+getProducts) ⇒ <code>\*</code>

<a name="new_Products_new"></a>

### new Products()
Products API JS client.

In order to use Products API you should create an instance of this class.
~~~~
import Products from "tm-products-api-client-js";
const products = new Products ('http://api.templatemonster.com/products/v1', 'en');
const list = products.getProducts ([12345, 55555]);
~~~~

<a name="Products+getProducts"></a>

### products.getProducts(ids) ⇒ <code>\*</code>
Return product information for given identifiers.

**Kind**: instance method of <code>[Products](#Products)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ids | <code>Array.&lt;int&gt;</code> | Product identifiers |

