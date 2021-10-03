console.log ("\n\n========= Tabela de Produtos ============\n\n");

const produtos = [
    
{NomedoProduto: "Mac", ValordoProduto: 492, QualidadedoProduto: 8, Status: true },
{NomedoProduto: "Pc", ValordoProduto: 1500, QualidadedoProduto: 8, Status: false },
{NomedoProduto: "Teclado", ValordoProduto: 50, QualidadedoProduto: 7, Status: true },

]
console.log (produtos);

let carrinho = produtos.filter(i => i.ValordoProduto >= 482 && i.ValordoProduto <= 1600 && i.QualidadedoProduto > 6 && i.Status === true);


let soma = carrinho.reduce((acc, item) => {
    return acc+item.ValordoProduto}, 0); 

console.log ("\n\n========= Compra / Valor ============\n\n");

let produtoDescritos = JSON.stringify(carrinho);

console.log(`Produtos escolhidos: ${produtoDescritos}\n`);
console.log (`Valor total dos produtos escolhidos: ${soma}`);

