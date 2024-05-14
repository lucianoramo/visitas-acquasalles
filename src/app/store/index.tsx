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
	setClients: (clients: ClientType[]) => void;
	setVisitas: (visitas: VisitaType[]) => void;
	setMedicoes: (medicoes: MedicaoType[]) => void;
	setSelectedClient: (client: any) => void;
	setStartDate: (date: Date) => void;
	setEndDate: (date: Date) => void;
};

const useStore = create<State>((set) => ({
	clients: [],
	visitas: [],
	medicoes: [],
	selectedClient: null,
	startDate: null,
	endDate: null,
	setClients: (clients) => set({ clients }),
	setVisitas: (visitas) => set({ visitas }),
	setMedicoes: (medicoes) => set({ medicoes }),
	setSelectedClient: (client) => set({ selectedClient: client }),
	setStartDate: (date) => set(() => ({ startDate: date })),
	setEndDate: (date) => set(() => ({ endDate: date })),
}));

export default useStore;
