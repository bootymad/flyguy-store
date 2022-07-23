import { getProductData } from "../services/productService";
import ProductGrid from "../components/ProductGrid";
import Cart from "../components/cart/Cart";
import Checkout from "../components/Checkout";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";

export default function Home({ products }) {
	const { checkoutClicked, confirmShowing, setConfirmShowing } =
		useContext(CartContext);
	return confirmShowing ? (
		<div className="confirmation">
			<p>Thank you for your purchase! Redirecting to the homepage...</p>
		</div>
	) : (
		<div className="main-wrapper">
			{!checkoutClicked && <Cart></Cart>}
			{!checkoutClicked && (
				<ProductGrid products={products}></ProductGrid>
			)}
			{checkoutClicked && <Checkout></Checkout>}
		</div>
	);
}

export async function getStaticProps() {
	const products = await getProductData();
	console.log(products);
	return {
		props: {
			products,
		},
	};
}
