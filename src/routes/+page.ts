// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export const load = async () => {
	try {
		const requestDeals = await fetch(
			'https://dummyjson.com/products?limit=5&sortBy=discountPercentage&order=desc'
		);
		const requestCategories = await fetch('https://dummyjson.com/products/categories');
		const requestCategoryMobileAccessories = await fetch(
			'https://dummyjson.com/products/category/mobile-accessories?limit=3&sort=discountPercentage&order=desc'
		);
		const requestCategoryLaptop = await fetch(
			'https://dummyjson.com/products/category/laptops?limit=3&sort=discountPercentage&order=desc'
		);
		const requestCategoryGroceries = await fetch(
			'https://dummyjson.com/products/category/groceries?limit=6&sort=discountPercentage&order=desc'
		);
		const requestCategoryMensShirts = await fetch(
			'https://dummyjson.com/products/category/mens-shirts?limit=1&sort=discountPercentage&order=desc'
		);
		const requestCategoryMensShoes = await fetch(
			'https://dummyjson.com/products/category/mens-shoes?limit=2&sort=discountPercentage&order=desc'
		);
		const requestCategoryWomensDresses = await fetch(
			'https://dummyjson.com/products/category/womens-dresses?limit=1&sort=discountPercentage&order=desc'
		);
		const requestCategoryWomensShoes = await fetch(
			'https://dummyjson.com/products/category/womens-shoes?limit=2&sort=discountPercentage&order=desc'
		);
		const responseDeals = await requestDeals.json();
		const responseCategories = await requestCategories.json();
		const responseCategoryMobileAccessories = await requestCategoryMobileAccessories.json();
		const responseCategoryLaptop = await requestCategoryLaptop.json();
		const responseCategoryGroceries = await requestCategoryGroceries.json();
		const responseCategoryMensShirts = await requestCategoryMensShirts.json();
		const responseCategoryMensShoes = await requestCategoryMensShoes.json();
		const responseCategoryWomenDresses = await requestCategoryWomensDresses.json();
		const responseCategoryWomenShoes = await requestCategoryWomensShoes.json();

		return {
			deals: responseDeals.products,
			categories: responseCategories,
			mobileAccessoriesDeals: responseCategoryMobileAccessories.products,
			laptopDeals: responseCategoryLaptop.products,
			groceries: responseCategoryGroceries.products,
			fashion: [
				...responseCategoryWomenShoes.products,
				...responseCategoryWomenDresses.products,
				...responseCategoryMensShoes.products,
				...responseCategoryMensShirts.products
			]
		};
	} catch (e) {
		return { e, code: 500 };
	}
};
