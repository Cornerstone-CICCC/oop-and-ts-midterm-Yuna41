import { Component } from "../common/Component.js";

export class CartItem extends Component {
  // constructor(props){
  //   super(props)
  // }

  handleDelete(){
    this.props.cartContext.removeProduct(this.props.product.id)
  }

  handleReduce(){
    this.props.cartContext.reduceProduct(this.props.product)
  }
  handleAdd(){
    this.props.cartContext.addProduct(this.props.product)
  }

  render() {
    const item = document.createElement('li')
    item.innerHTML = `
      <img src=${this.props.product.image} alt=${this.props.product.title}>
      <div class="cart-detail">
        <button class="btn-delete-cart"></button>
        <dl>
          <dt class="name">${this.props.product.title}</dt>
          <dd>
            <p class="price">$${this.props.product.price}</p>
            <div class="cart-number">
              <button class="btn-reduce">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 9.66797H15V11.3346H5V9.66797Z" fill="#404E3E"/>
                </svg>
              </button>
              <span>${this.props.product.quantity}</span>
              <button class="btn-add">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.8337 11.3346H10.8337V16.3346H9.16699V11.3346H4.16699V9.66797H9.16699V4.66797H10.8337V9.66797H15.8337V11.3346Z" fill="#404E3E"/>
                </svg>
              </button>
            </div>
          </dd>
        </dl>
      </div>
    `
    const btnDeleteCart = item.querySelector('.btn-delete-cart')
    btnDeleteCart.addEventListener('click', () => this.handleDelete())

    const btnReduceItem = item.querySelector('.btn-reduce')
    btnReduceItem.addEventListener('click', () => this.handleReduce())

    const btnAddItem = item.querySelector('.btn-add')
    btnAddItem.addEventListener('click', () => this.handleAdd())
    return item
  }
}