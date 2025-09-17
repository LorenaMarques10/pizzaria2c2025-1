const Produtos = () => {
<<<<<<< HEAD
 
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
=======

   //Objeto da lista de pizzas
   const pizzas = [
    'Pizza de Quatro Queijos',
    'Pizza de Frango com Catupiry',
    'Pizza de Marguerita', 'Pizza de pepperoni', 'Pizza de estrogonofe'
   ]
   // Iteração da lista de pizzas - pizza a pizza (um a um)
   const listaPizzas = pizzas.map(pizza=><li>{pizza}</li>)
   
   return (
        <div>
            <h3>Listagem de Produtos</h3>
            <ul>
              {listaPizzas}
>>>>>>> 296b083b0406614d64c392e027339926875486a1
            </ul>
        </div>
    )
}
<<<<<<< HEAD
 
export default Produtos
 
=======

export default Produtos
>>>>>>> 296b083b0406614d64c392e027339926875486a1
