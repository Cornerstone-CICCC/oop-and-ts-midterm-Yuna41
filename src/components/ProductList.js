import { Component } from "../common/Component.js";
import { ProductItem } from "./ProductItem.js";

export class ProductList extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: []
    }
  }

  mount(container){
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      this.state.products = data
      container.appendChild(this.render())
    })
    .catch(err => console.log(err))
  }

  render() {
    const productList = document.createElement('div')
    productList.className = 'product-list'

    const ul = document.createElement('ul')
    this.state.products.forEach(product => {
      const productItem = new ProductItem({
        product,
        cartContext: this.props.cartContext
      }).render()
      ul.appendChild(productItem)
    })
    productList.appendChild(ul)

    return productList
  }
}