export async function load() {
	try {
		const request = await fetch('https://dummyjson.com/products');
		return await request.json();
	} catch (e) {
		return { e, code: 500 };
	}
}
