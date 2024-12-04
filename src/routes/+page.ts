// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export const load = async () => {
	try {
		const requestDeals = await fetch(
			'https://dummyjson.com/products?q=phone&limit=5&sortBy=discountPercentage&order=desc'
		);
		const requestCategories = await fetch('https://dummyjson.com/products/categories');
		const responseDeals = await requestDeals.json();
		const responseCategories = await requestCategories.json();

		return { deals: responseDeals.products, categories: responseCategories };
	} catch (e) {
		return { e, code: 500 };
	}
};
