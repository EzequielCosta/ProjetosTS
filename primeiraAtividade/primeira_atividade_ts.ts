// 1

/* a variável a é um number, não aceitando assim uma string
let a = 10;
a = "2";
*/

/*
Compila pois a tipagem de b é any
let b:any = 10;
b = 2;
console.log(b)
*/

/*
Compila,uma vez que foi atribuído à variável um valor inteiro

let c: number = 10;
c = 2;
console.log(c);
*/

//2
/*
function soma(x:number, y?:any):number{
    return x+y;
}

console.log(soma(1,2)); // 3
console.log(soma(1,"2")); // 12
console.log(soma(1)); // NaN

*/

//3

//a

/*
enum estados {
    PI,
    CE,
    MA
}
console.clear()
for (let estado in estados){
    
    if (isNaN(parseInt(estado))) {
        console.log(estado);
    }
    
}
*/

//b
/*
enum estados {
    PI,
    CE,
    MA
}
console.clear()
for (let estado in estados){
    
    if (isNaN(parseInt(estado))) {
        console.log(estados[estado]);
    }
    
}

Ele retornou os índices que comecou com 0 e foi incrementando
*/


// 4
/*
enum DiaDaSemana {
    "Segunda-Feira",
    "Terca-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sabado",
    "Domingo",
}

 namespace DiaDaSemana{

    function isDiaUtil(dia : DiaDaSemana):boolean{
        if (DiaDaSemana[dia] === 'Sabado' || DiaDaSemana[dia] === 'Domingo' ){
            return false;
        }
        return true;
    }
}


let dia1:DiaDaSemana = DiaDaSemana['Sabado'];
let dia2:DiaDaSemana = DiaDaSemana['Domingo'];
let dia3:DiaDaSemana = DiaDaSemana['Segunda-Feira'];
let dia4:DiaDaSemana = DiaDaSemana['Terca-Feira'];
// ESTOU ULTILIZANDO O CONSOLE ONLINE
 */


//5
/*
console.clear();
function exibir(...palavras:string[]){
    console.log(palavras.join(','));
}

exibir("a","b");
exibir("a","b","c");
exibir("a","b","c","d");
*/

//6
/*
console.clear();
let saudacao = (nome:string) => {
    console.log("Olá " + nome)
}

saudacao("Ezequiel");
*/

//7
/*
console.clear();
const array =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const novoArray = array.filter((i : number) =>{
    return i % 2 === 0;   
});

console.log(novoArray);
*/

//8
/*
class MenuNumero {

    readonly numero: number;
    
    constructor(numero: number) {
        this.numero = numero;
        
    }

    getInteiro():number{
        return Math.floor(this.numero);;
    }

    getDecimal():number{
        return this.numero - this.getInteiro();
    }
}


let numero1:MenuNumero = new MenuNumero(3.5);
let numero2:MenuNumero = new MenuNumero(7);
let numero3:MenuNumero = new MenuNumero(2.99);
console.clear();
console.log("A parte inteira de " + numero1.numero + " é " + numero1.getInteiro());
console.log("A parte decimal de " + numero1.numero + " é " + numero1.getDecimal());

console.log("A parte inteira de " + numero2.numero + " é " + numero2.getInteiro());
console.log("A parte decimal de " + numero2.numero + " é " + numero2.getDecimal());

console.log("A parte inteira de " + numero3.numero + " é " + numero3.getInteiro());
console.log("A parte decimal de " + numero3.numero + " é " + numero3.getDecimal());

*/

//9
/*
class Transacao{

    readonly valor:number;
    readonly desconto:number;

    constructor (valor:number, desconto:number){
        this.valor = valor;
        this.desconto = desconto;
    }

    calculaDesconto():number{
        return this.valor * ((100 - this.desconto ) / 100)
    } 

    public get getValor(){
        return this.valor;
    }  

    public get getDesconto(){
        return this.desconto;
    }
}


let transacao1:Transacao = new Transacao(1000,40);
let transacao2:Transacao = new Transacao(540,46);
console.clear();
console.log("Calculo do desconto de " + transacao1.getDesconto + "% "
 + " aplicado em " + transacao1.getValor + " é : " + transacao1.calculaDesconto());

console.log("Calculo do desconto de " + transacao2.getDesconto + "% "
 + " aplicado em " + transacao2.getValor + " é : " + transacao2.calculaDesconto());
*/