class Pessoa {
  constructor(
    public name:string, 
    public age:number){
    
  }
}
// class Pessoa {
//   nome: string
//   idade: number

//   constructor(name:string, age:number){
//     this.nome = name
//     this.idade = age
//   }
// }

const eu = new Pessoa('Nati', 27)

console.log(eu)