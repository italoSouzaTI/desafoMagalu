import { useState } from "react";

export function useMdelViewHome() {
    const [dataTab, setDataTab] = useState([
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
    ]);
    function handleTab(id: number) {
        let cloneDataTab = dataTab.slice();
        cloneDataTab = cloneDataTab.map((item) => {
            if (item.id === id) {
                return { ...item, active: true };
            }
            return { ...item, active: false };
        });
        setDataTab(cloneDataTab);
    }
    return {
        dataTab,
        handleTab,
    };
}
