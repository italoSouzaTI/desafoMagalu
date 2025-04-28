import { api } from "@core/service";
import { IProduct } from "./types/getProducts";

export async function getProducts(): Promise<IProduct[]> {
    try {
        const response: IProduct[] = await api.get("/products");
        return response.data;
    } catch (error) {
        throw error;
    }
}
export async function getProductId(id: number): Promise<IProduct> {
    try {
        const response = await api.get(`products/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
