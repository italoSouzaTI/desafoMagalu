import { IProduct } from "src/feature/https/types/getProducts";
import { create } from "zustand";
type State = {
    listProduct: IProduct[];
};

type Actions = {
    setListProduct: (data: IProduct) => void;
};
export const useListProductStore = create<State & Actions>((set) => ({
    listProduct: {} as IProduct[],
    setListProduct: (listProduct) => set({ listProduct }),
}));
