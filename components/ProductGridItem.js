import AddToCartButton from "./cart-manipulation-buttons/AddToCartButton";
export default function ProductGridItem({ product }) {
	const { name, description, price, image } = product;
	return (
		<li>
			<div className="product-grid-item">
				<h2>{name}</h2>
				<img src={image}></img>
				<p>{description}</p>
				<p>${price}</p>
				<AddToCartButton product={product}></AddToCartButton>
			</div>
		</li>
	);
}
