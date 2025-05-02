import { IProduct } from "src/feature/https/types/getProducts";
import { create } from "zustand";
export interface NotificationProps {
    title: string;
    body: string;
    data: { product: string };
}
type State = {
    notification: NotificationProps;
};

type Actions = {
    setNotification: (data: NotificationProps) => void;
};
export const useNotificationStore = create<State & Actions>((set) => ({
    notification: {} as NotificationProps,
    setNotification: (notification) => set({ notification }),
}));
