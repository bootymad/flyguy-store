import { CartContext } from "../../store/CartContext";
import { removeFromCartHelper } from "../../util/cartHelpers";
import { useContext } from "react";

export default function RemoveFromCartButton({ product }) {
	const { cart, setCart } = useContext(CartContext);

	const clickHandler = () => {
		console.log("Clicked remove from cart for " + product.name);
		removeFromCartHelper(product, cart, setCart);
	};
	return (
		<button className="cleanButton" onClick={clickHandler}>
			Remove from Cart
		</button>
	);
}
