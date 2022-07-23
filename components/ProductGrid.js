import ProductGridItem from "./ProductGridItem";

export default function ProductGrid({ products }) {
	return (
		<div className="product-grid">
			<ul>
				{products.map((product) => {
					return (
						<ProductGridItem
							key={product.id}
							product={product}
						></ProductGridItem>
					);
				})}
			</ul>
		</div>
	);
}
