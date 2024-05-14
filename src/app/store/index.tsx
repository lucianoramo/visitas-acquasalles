// store.ts
import { create } from "zustand";

type State = {
	clients: any[];
	selectedClient: any | null;
	orders: any[];
	setClients: (clients: any[]) => void;
	setSelectedClient: (client: any) => void;
	setOrders: (orders: any[]) => void;
	startDate: Date | null;
	endDate: Date | null;
	setStartDate: (date: Date) => void;
	setEndDate: (date: Date) => void;
};

const useStore = create<State>((set) => ({
	clients: [],
	selectedClient: null,
	orders: [],
	setClients: (clients) => set({ clients }),
	setSelectedClient: (client) => set({ selectedClient: client }),
	setOrders: (orders) => set({ orders }),
	startDate: new Date(),
	endDate: new Date(),
	setStartDate: (date) => set(() => ({ startDate: date })),
	setEndDate: (date) => set(() => ({ endDate: date })),
}));

export default useStore;
