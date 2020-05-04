export interface Agendamento {
    nomeCliente: string;
    enderecoCliente: string;
    emailCliente: string;
    data: string;
    modeloCarro: string;
    precoTotal: number;
    confirmado: boolean;
    enviado: boolean;
    visualizado: boolean;
}