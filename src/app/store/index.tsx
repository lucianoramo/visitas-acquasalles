// store.ts
import { create } from "zustand";
import { ClientType, MedicaoType, VisitaType } from "../../../types";

type State = {
	clients: ClientType[];
	visitas: VisitaType[];
	medicoes: MedicaoType[];
	selectedClient: any | null;
	startDate: Date | null;
	endDate: Date | null;
	selectedItemsMensal: string[];
	setClients: (clients: ClientType[]) => void;
	setVisitas: (visitas: VisitaType[]) => void;
	setMedicoes: (medicoes: MedicaoType[]) => void;
	setSelectedClient: (client: any) => void;
	setStartDate: (date: Date) => void;
	setEndDate: (date: Date) => void;
	setSelectedItemsMensal: (update: (items: string[]) => string[]) => void;
};

const useStore = create<State>((set) => ({
	clients: [],
	visitas: [],
	medicoes: [],
	selectedClient: null,
	startDate: null,
	endDate: null,
	selectedItemsMensal: [],
	setClients: (clients) => set({ clients }),
	setVisitas: (visitas) => set({ visitas }),
	setMedicoes: (medicoes) => set({ medicoes }),
	setSelectedClient: (client) => set({ selectedClient: client }),
	setStartDate: (date) => set(() => ({ startDate: date })),
	setEndDate: (date) => set(() => ({ endDate: date })),
	setSelectedItemsMensal: (update) => set((state) => ({ selectedItemsMensal: update(state.selectedItemsMensal) })),
}));

export default useStore;
