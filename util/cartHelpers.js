export const addToCartHelper = (productObject, cartObject, cartSetter) => {
	if (productObject.name in cartObject) {
		cartObject[productObject.name].quantity++;
	} else {
		cartObject[productObject.name] = {
			name: productObject.name,
			price: productObject.price,
			quantity: 1,
		};
	}
	cartSetter({ ...cartObject });
};

export const removeFromCartHelper = (productObject, cartObject, cartSetter) => {
	cartObject[productObject.name].quantity--;
	if (cartObject[productObject.name].quantity === 0) {
		delete cartObject[productObject.name];
	}
	cartSetter({ ...cartObject });
};
