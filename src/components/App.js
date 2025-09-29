import { Component } from "../common/Component.js";
import { Header } from './Header.js'
import { Footer } from './Footer.js'
import { ProductList } from './ProductList.js'
import { CartList } from './CartList.js'

export class App extends Component {
  render() {
    const app = document.createElement('div')
    app.className = 'container'
    app.innerHTML = `
      <div class="header"></div>
      <main>
        <div class="hero">
          <img src="/src/img/hero.jpg">  
        </div>
      </main>
      <div class="cart"></div>
      <div class="footer"></div>
    `

    const header = new Header().render()
    app.querySelector('.header').appendChild(header)

    const footer = new Footer().render()
    app.querySelector('.footer').appendChild(footer)

    const productList = new ProductList({
      cartContext: this.props.cartContext
    })
    productList.mount(app.querySelector('main'))

    const cartList = new CartList({
      cartContext: this.props.cartContext
    }).render()
    app.querySelector('.cart').appendChild(cartList)

    document.addEventListener('DOMContentLoaded', function(){
      const body = document.querySelector('body')
      const cart = document.querySelector('.cart')
      const btnCartClose = document.querySelector('.btn-cart-close')
      const headerSpCart = document.querySelector('.btn-spCart')
      const headerCart = document.querySelector('.btn-cart')
      headerSpCart.addEventListener('click', function(){
        body.classList.add('isOpen')
        cart.classList.add('isOpen')
      })
      headerCart.addEventListener('click', function(){
        body.classList.add('isOpen')
        cart.classList.add('isOpen')
      })
      btnCartClose.addEventListener('click', function(){
        body.classList.remove('isOpen')
        cart.classList.remove('isOpen')
      })
    })

    return app
  }
}