class Carro {
  cor: string = 'preto';
  marca: string = 'volkswagen';
  modelo: string = 'fusca'
  ano:number = 1970
  potencia: number = 70
}

const veiculo = new Carro()
veiculo.modelo = 'fiat'

console.log(veiculo)

