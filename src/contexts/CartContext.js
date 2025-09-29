export class CartContext {
  constructor(){
    this.cart = []
    this.listeners = []
  }

  getCart(){
    return this.cart
  }

  addProduct(item){
    const found = this.cart.find(product => product.id === item.id)
    if(!found){
      this.cart.push({
        ...item,
        quantity: 1
      })
    } else {
      this.cart = this.cart.map(product => product.id === item.id ? {
        ...product,
        quantity: product.quantity + 1
      }
      : product)
    }
    this.notifyListeners()
  }

  reduceProduct(item){
    this.cart = this.cart.flatMap(product => {
      if(product.id === item.id){
        if(item.quantity > 1){
          return{
            ...product,
            quantity: product.quantity - 1
          }
        } else {
          return []
        }
      } else {
        return product
      }
    })
    this.notifyListeners()
  }

  removeProduct(id) {
    const foundIndex = this.cart.findIndex(product => product.id === id)
    if(foundIndex !== -1){
      this.cart = this.cart.toSpliced(foundIndex, 1)
    }
    this.notifyListeners()
  }

  subscribe(listener){
    this.listeners.push(listener)
  }

  notifyListeners(){
    this.listeners.forEach(listener => listener(this.cart))
  }
}