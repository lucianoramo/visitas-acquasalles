export interface Client {
	id: string;
	cnpj: string;
	razao_social: string;
	nome: string;
	telefone: string;
	email: string;
	cidade: string;
	Estado: string;
	endereco_sem_cidade: string;
	bairro: string;
	cep: string;
	endereco: string;
	valor_contrato: number;
}
