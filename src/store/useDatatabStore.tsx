import { create } from "zustand";
interface IdataTab {
    id: number;
    label: string;
    active: boolean;
}
type State = {
    dataTab: IdataTab[];
};

type Actions = {
    setDataTab: (data: IdataTab[]) => void;
};
export const useDataTabStore = create<State & Actions>((set) => ({
    dataTab: [
        {
            id: 1,
            label: "Lista",
            active: true,
        },
        {
            id: 2,
            label: "Favorito",
            active: false,
        },
    ],
    setDataTab: (dataTab) => set({ dataTab }),
}));
