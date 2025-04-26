// useFavoriteStorageStore
import { create } from "zustand";
import { asyncStorage } from "@core/service/Database/storage/asyncStorage";
import { FAVORITE_PRODUCT } from "@core/service/Database/storage/storageKey";
import { persist, createJSONStorage } from "zustand/middleware";

type State = {
    favoriteProduct: number[];
    initializeFavoriteProduct: () => Promise<void>;
};

type Actions = {
    setFavoriteProduct: (produc: number[]) => void;
    removeFavoriteProduct: () => void;
};

export const useFavoriteStorageStore = create<State & Actions>()(
    persist(
        (set) => ({
            favoriteProduct: [],
            initializeFavoriteProduct: async () => {
                const storedFavorites = await asyncStorage.getItem(FAVORITE_PRODUCT);
                set({ favoriteProduct: storedFavorites || [] });
            },
            setFavoriteProduct: (data) => {
                set({ favoriteProduct: data });
            },
            removeFavoriteProduct: () => {
                set({ favoriteProduct: [] });
            },
        }),

        {
            name: FAVORITE_PRODUCT,
            storage: createJSONStorage(() => asyncStorage),
        }
    )
);
