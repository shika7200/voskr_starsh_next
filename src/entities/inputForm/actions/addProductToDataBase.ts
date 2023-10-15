"use server"


import { Product } from "@/widgets/InsertProduct/types";
import { revalidateTag } from "next/cache";

export const addProductToDataBase = async (event: FormData) => {
    const product = event.get("product")?.toString();
    const price = event.get("price")?.toString();

    if (!product || !price) return;

    const newProduct: Product = {
        product,
        price,
    };

    await fetch('https://65193ac1818c4e98ac602a04.mockapi.io/products', {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: {
            "Content-Type": "application/json"
        }
    })
    revalidateTag("products");
}

