import { ProductItemType } from "../types/components/products";

export async function getAllProducts() {
    try {
        const response = [
            "mens-shoes",
            "mens-watches",
            "mens-shirts",
            "womens-shoes",
            "womens-watches",
            "womens-dresses",
        ].map((category) =>
            fetch(`https://dummyjson.com/products/category/${category}`).then(
                (res) => {
                    if (!res.ok) {
                        throw new Error(
                            `Failed to fetch category: ${category}`
                        );
                    }
                    return res.json();
                }
            )
        );

        // Wait for all requests to complete
        const results = await Promise.all(response);

        // const allProducts = results?.flatMap((item) => item.products);
        const allProducts = results?.flatMap((items) =>
            items.products.map((item: ProductItemType) => ({
                ...item,
                quantity: 1,
            }))
        );

        console.log(allProducts);
        return allProducts;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getOneProduct(category: string | null) {
    console.log(category);
    if (!category) return;

    const res = await fetch(
        `https://dummyjson.com/products/category/${category}`
    );

    if (!res.ok) throw new Error(`Failed to fetch category: ${category}`);
    const data = await res.json();
    return data;
}
