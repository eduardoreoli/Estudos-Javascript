const empresas = [
    { nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    { nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
];

//emoresas com valor de mercado acima de 120
//usamos filter que ira filtrar o array e retornar apenas o solicitado
const valorDeMercado = empresas.filter(empresa=>(empresa.valorDeMercado > 120));
console.log(valorDeMercado);

//nome de cada empresa e seu CEO
//usamos map, que irá percorrer todos os itens do array, podendo executar alguma transformacao nesses itens e retornar um novo array sem modificar o atual
const mostrarInfos = empresas.map(empresa => `${empresa.nome} CEO: ${empresa.CEO}`);
console.log(mostrarInfos);

//valor de todas as empresas somadas
//usamos reduce, que irá percorrer o array fazendo uma expressao escolhida, e no final devolve um unico valor
const valorSomado = empresas.reduce((soma, valorAtual)=>soma + valorAtual.valorDeMercado,0);
console.log(valorSomado);