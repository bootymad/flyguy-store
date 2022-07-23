import fs from "fs/promises";
import path from "path";

export async function getProductData() {
	const filePath = path.join(process.cwd(), "/data/products.json");
	const data = await fs.readFile(filePath, "utf-8");
	const products = JSON.parse(data);
	return products;
}
