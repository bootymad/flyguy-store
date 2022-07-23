/*
CART STRUCTURE
{
    product_name: {
        name: product_name,
        price: product_price,
        quantity: product_quantity
    },
        product_name: {
        name: product_name,
        price: product_price,
        quantity: product_quantity
    },
        product_name: {
        name: product_name,
        price: product_price,
        quantity: product_quantity
    },
}
*/

const makeDescription = (cart) => {
	let description = "Your purchase of";
	for (const key in cart) {
		const substring = ` x${cart[key].quantity} ${key}(s)`;
		description += substring;
	}
	return description;
};

export const convertCart = (cart) => {
	const SHIPPING_FEE = 2.99;
	const DESCRIPTION = makeDescription(cart);
	const ITEMS = Object.keys(cart).map((productName) => {
		return {
			name: productName,
			quantity: cart[productName].quantity.toString(),
			unit_amount: {
				currency_code: "USD",
				value: cart[productName].price.toString(),
			},
		};
	});
	const cartTotal = Object.keys(cart).reduce(
		(prev, curr) => prev + cart[curr].price * cart[curr].quantity,
		0
	);
	const paypalCart = {};
	paypalCart.purchase_units = [
		{
			amount: {
				currency_code: "USD",
				value: `${(cartTotal + SHIPPING_FEE).toFixed(2)}`,
				breakdown: {
					item_total: {
						currency_code: "USD",
						value: `${cartTotal}`,
					},
					shipping: {
						currency_code: "USD",
						value: `${SHIPPING_FEE}`,
					},
				},
			},
			description: DESCRIPTION,
			items: ITEMS,
		},
	];

	return paypalCart;
};

export const createOrderWrapper = (cart) => {
	console.log(convertCart(cart));
	const createOrder = (data, actions) => {
		return actions.order.create(convertCart(cart));
	};
	return createOrder;
};
