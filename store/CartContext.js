import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
	const [cart, setCart] = useState({});
	const [checkoutClicked, setCheckoutClicked] = useState(false);
	const [confirmShowing, setConfirmShowing] = useState(false);

	const values = {
		cart,
		setCart,
		checkoutClicked,
		setCheckoutClicked,
		confirmShowing,
		setConfirmShowing,
	};
	return (
		<CartContext.Provider value={values}>{children}</CartContext.Provider>
	);
}
