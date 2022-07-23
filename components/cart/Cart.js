import { useContext } from "react";
import { CartContext } from "../../store/CartContext";
import CartItem from "./CartItem";
export default function Cart() {
	const { cart, checkoutClicked, setCheckoutClicked } =
		useContext(CartContext);
	const cartKeys = Object.keys(cart);
	const cartEmpty = cartKeys.length !== 0 ? false : true;
	const cartTotal = cartKeys.reduce((prev, curr) => {
		return prev + cart[curr].quantity * cart[curr].price;
	}, 0);
	return (
		<div className="cart">
			<p>Cart</p>
			{cartEmpty ? (
				<p>Your cart is empty!</p>
			) : (
				<ul>
					{cartKeys.map((productName) => (
						<CartItem
							item={cart[productName]}
							key={productName}
						></CartItem>
					))}
					<p>Cart Total: ${cartTotal}</p>
				</ul>
			)}

			{!cartEmpty && !checkoutClicked ? (
				<button
					className="checkoutButton"
					onClick={() => setCheckoutClicked(true)}
				>
					CHECKOUT
				</button>
			) : null}
		</div>
	);
}
