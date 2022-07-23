import AddToCartButton from "../cart-manipulation-buttons/AddToCartButton";
import RemoveFromCartButton from "../cart-manipulation-buttons/RemoveFromCartButton";

export default function CartItem({ item }) {
	// use addToCartButton as an increment button
	return (
		<li>
			<div className="cart-item">
				<div className="cart-item-text">
					<p>{item.name}</p>
					<p>${item.price}</p>
					<p>x{item.quantity}</p>
					<p>${item.price * item.quantity}</p>
				</div>
				<div className="cart-incrementers">
					<AddToCartButton product={item}></AddToCartButton>
					<RemoveFromCartButton product={item}></RemoveFromCartButton>
				</div>
			</div>
		</li>
	);
}
