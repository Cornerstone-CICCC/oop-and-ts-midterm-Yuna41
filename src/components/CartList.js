import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";
import { CartCounter } from './CartCounter.js'
import { CartPrice } from './CartPrice.js'

export class CartList extends Component {
  constructor(props){
    super(props)
    this.state = {
      cart: []
    }
    this.updateCart = this.updateCart.bind(this)
    this.props.cartContext.subscribe(this.updateCart)
    this.productListElement = null
  }

  updateCart(cart){
    this.state.cart = cart
    this.productListElement.innerHTML = ""
    this.state.cart.forEach(product => {
      const li = new CartItem({
        product,
        cartContext: this.props.cartContext
      }).render()
      this.productListElement.appendChild(li)
    })
  }

  render() {
    const cartElement = document.createElement('div')
    cartElement.className = 'inner'
    cartElement.innerHTML = `
      <div class="cart-head">
        <button class="btn-cart-close"><span></span></button>
        <h2>Your Cart</h2>
      </div>
      <div class="cart-body">
        <ul class="cart-list"></ul>
        <dl class="cart-check">
          <div class="total">
            <dt>Subtotal (<span class="num-subtotal"></span>)</dt>
            <dd class="num-total">$</dd> 
          </div>
          <div>
            <dt>Shipping</dt>
            <dd>Free</dd> 
          </div>
        </dl>
        <form>
          <button type="button">Check Out</button>
        </form>
      </div>
    `

    this.productListElement = cartElement.querySelector('.cart-list')
    this.updateCart(this.props.cartContext.cart)

    const cartCounter = new CartCounter({
      cartContext: this.props.cartContext
    }).render()
    cartElement.querySelector('.num-subtotal').appendChild(cartCounter)

    const cartPrice = new CartPrice({
      cartContext: this.props.cartContext
    }).render()
    cartElement.querySelector('.num-total').appendChild(cartPrice)

    return cartElement
  }
}