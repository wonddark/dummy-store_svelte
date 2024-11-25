import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const request = await fetch(`https://dummyjson.com/products/${params.id}`);
		const product = await request.json();

		const categoriesResponse = await fetch('https://dummyjson.com/products/categories');
		const categories = await categoriesResponse.json();
		const categoryName = (categories as { name: string; slug: string }[]).filter(
			(item) => item.slug === product.category
		)[0].name;

		return { product, categoryName };
	} catch (e) {
		error(500, (e as { message: string }).message);
	}
};
