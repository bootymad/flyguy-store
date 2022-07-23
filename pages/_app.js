import "../styles/images.css";
import "../styles/globals.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Layout from "../layout/Layout";
import CartProvider from "../store/CartContext";

function MyApp({ Component, pageProps }) {
	return (
		<PayPalScriptProvider
			options={{
				"client-id":
					"AXFha4c-d47HFHPWWL_zHuA6EWd-1RCXXllPS5E4gNEtdFi0xvFZWUVaxM9qo9dHZHMe35UA--kY1rTX",
			}}
		>
			<CartProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</CartProvider>
		</PayPalScriptProvider>
	);
}

export default MyApp;
