export interface VisitaType {
	id_visita: string;
	data_visita: string | null;
	tecnico: string | null;
	cliente: string | null;
	tipo_visita: string | null;
	tem_produtos: string | null;
	tem_medicao: string | null;
	tem_manutencao: string | null;
	horainicial: string | null;
	horafinal: string | null;
	observacao: string | null;
	data_formatted?: Date | null;
}
