const Produtos = () => {
 
 //Objeto da lista de pizzas 
 const pizzas =[
    'Pizza Muçarela',
    'Pizza Calabreza',
    'Pizza portuguesa', 'Pizza baiana', 'Pizza frita'
 ]
 //iteração da lista de pizzas - pizza a pizza (um a um)
 const listaPizzas = pizzas.map(pizza=><li>{pizza}</li>)

    return (
        <div>
            <h3>Listagem de Produtos</h3>
            <ul>
             {listaPizzas}
            </ul>
        </div>
    )
}
 
export default Produtos
 