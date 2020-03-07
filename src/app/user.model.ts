export interface UserModel {
  nome: string;
  email: string;
  endereco: {
    cep: string,
    numero: string,
    complemento: string,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string,
  };
}
