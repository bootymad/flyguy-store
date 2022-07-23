import Cart from "./cart/Cart";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { createOrderWrapper } from "../services/paypalService";

export default function Checkout() {
	const { setCheckoutClicked, cart, setCart, setConfirmShowing } =
		useContext(CartContext);
	// the setter function is the checkout render state setter
	return (
		<section className="checkout-container">
			<div className="checkout-header">
				<h2>Checkout</h2>
				<button
					className="cleanButton"
					onClick={() => setCheckoutClicked(false)}
				>
					Close
				</button>
			</div>
			<Cart></Cart>
			<PayPalButtons
				createOrder={createOrderWrapper(cart)}
				onApprove={(data, actions) =>
					actions.order.capture().then((details) => {
						// clear the cart
						setCart({});
						// close checkout
						setCheckoutClicked(false);
						// show confirmation render
						setConfirmShowing(true);
						setTimeout(() => setConfirmShowing(false), 3000);
					})
				}
				style={{ color: "white" }}
			></PayPalButtons>
		</section>
	);
}
