// useFavoriteStorageStore
import { create } from "zustand";
import { asyncStorage } from "@core/service/Database/storage/asyncStorage";
import { TOKEN_CURRENT_USER } from "@core/service/Database/storage/storageKey";
import { persist, createJSONStorage } from "zustand/middleware";

type State = {
    token: string | null;
    initializeUsetCurrent: () => Promise<void>;
};

type Actions = {
    setToken: (token: string | null) => void;
    removeToken: () => void;
};

export const useUserCurrentStore = create<State & Actions>()(
    persist(
        (set) => ({
            token: null,
            initializeUsetCurrent: async () => {
                const storedUser = await asyncStorage.getItem(TOKEN_CURRENT_USER);
                set({ token: storedUser || null });
            },
            setToken: (data) => {
                set({ token: data });
            },
            removeToken: () => {
                set({ token: null });
            },
        }),

        {
            name: TOKEN_CURRENT_USER,
            storage: createJSONStorage(() => asyncStorage),
        }
    )
);
