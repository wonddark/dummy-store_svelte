export async function load({ params }) {
	const { slug } = params;
	try {
		const categoriesResponse = await fetch('https://dummyjson.com/products/categories');
		const categories = await categoriesResponse.json();
		const categoryName = (categories as { name: string; slug: string }[]).filter(
			(item) => item.slug === slug
		)[0].name;

		const response = await fetch(`https://dummyjson.com/products/category/${slug}`);
		const data = await response.json();
		return { data, categoryName };
	} catch (error) {
		return { error, code: 500 };
	}
}
