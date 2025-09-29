import { Component } from '../common/Component.js'

export class CartPrice extends Component{
  constructor(props){
    super(props)
    this.state = {
      cart: []
    }
    this.updatePrice = this.updatePrice.bind(this)
    this.props.cartContext.subscribe(this.updatePrice)
    this.priceElement = null
  }

  updatePrice(cart){
    this.state.cart = cart
    this.priceElement.innerHTML = this.state.cart.reduce((total, acc) => total + acc.price*acc.quantity, 0)
  }
  render(){
    const price = document.createElement('span')
    price.textContent = 0
    this.priceElement = price
    return price
  }
}