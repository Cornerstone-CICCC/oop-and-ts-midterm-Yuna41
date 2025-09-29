import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(props){
    super(props)
  }

  handleAddToCart(){
    this.props.cartContext.addProduct(this.props.product)
    // alert('This item was added to your cart.')
  }

  render() {
    const item = document.createElement('li')
    item.innerHTML = `
      <img src=${this.props.product.image} alt=${this.props.product.title}>
      <dl>
        <dt class="name">${this.props.product.title}</dt>
        <dd>
          <p class="price">$${this.props.product.price}</p>
          <p class="desc">${this.props.product.description}</p>
          <button class="btn-add-cart">Add to Cart</button>  
        </dd>
      </dl>
    `
    const btnAddCart = item.querySelector('.btn-add-cart')
    btnAddCart.addEventListener('click', () => this.handleAddToCart())

    return item    
  }
}