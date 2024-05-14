export interface MedicaoType {
	id_visita: string;
	id_medicao: string;
	hora?: string;
	cloro_encontrado?: string;
	cloro_corrigido?: string;
	ph_encontrado?: string;
	ph_corrigido?: string;
	turbidez_encontrada?: string;
	turbidez_corrigida?: string;
	local?: string;
	para_analise?: boolean;
}
