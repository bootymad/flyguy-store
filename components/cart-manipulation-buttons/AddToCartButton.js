import { CartContext } from "../../store/CartContext";
import { addToCartHelper } from "../../util/cartHelpers";
import { useContext } from "react";

export default function AddToCartButton({ product }) {
	const { cart, setCart } = useContext(CartContext);

	const clickHandler = () => {
		console.log("Clicked add to cart for " + product.name);
		addToCartHelper(product, cart, setCart);
	};
	return (
		<button className="cleanButton" onClick={clickHandler}>
			Add to Cart
		</button>
	);
}
