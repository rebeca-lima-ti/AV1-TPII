import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";

let cliente = new Cliente()
cliente.nome = "Antoine de Saint-Exupéry"
cliente.nomeSocial = ``
cliente.dataCadastro = new Date(1943, 11, 21)
cliente.dataNascimento = new Date(1900, 6, 29)

let endereco = new Endereco()
endereco.rua = `R. das Roseiras`
endereco.bairro = ``
endereco.cidade = `Tamanrasset`
endereco.estado = `Província de Tamanrasset`
endereco.pais = `Argélia`
endereco.codigoPostal = `11000`
cliente.endereco = endereco

let telefone = new Telefone ("12", "12345-6789")
cliente.telefones.push(telefone)

let dependente = new Cliente()
dependente.nome = `Beauvoir de Saint-Exupéry`
dependente.nomeSocial = `O Pequeno Príncipe`
dependente.dataCadastro = new Date(1943, 11, 21)
dependente.dataNascimento = new Date(1943, 10, 6)
dependente.endereco = (cliente.endereco.clonar() as Endereco)
dependente.endereco = cliente.endereco.clonar() as Endereco
dependente.telefones = cliente.telefones.map(tel => tel.clonar() as Telefone)
dependente.titular = cliente
cliente.dependentes.push(dependente)

console.log(cliente);
console.log(dependente);
