export async function load() {
	try {
		const response = await fetch('https://dummyjson.com/products/categories');
		const categories = await response.json();
		return { categories };
	} catch (e) {
		return { e, code: 500 };
	}
}
