import { IProduct } from "src/feature/https/types/getProducts";
import { create } from "zustand";
type State = {
    currentFavorite: IProduct;
};

type Actions = {
    setCurrentFavorite: (data: IProduct) => void;
};
export const useCurrentFavoriteStore = create<State & Actions>((set) => ({
    currentFavorite: {} as IProduct,
    setCurrentFavorite: (currentFavorite) => set({ currentFavorite }),
}));
