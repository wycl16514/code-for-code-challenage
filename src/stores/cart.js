import {makeObservable, observable, action, computed} from 'mobx'
import * as shop from "../api/shop"
class CartStore {
   @observable items = []
   @observable checkoutStatus = null
   @action.bound addToCart(product) {
       console.log('addToCart=>', product)

       const prod = this.items.find(cartItem => cartItem.id === product.id)
       if (prod) {
           prod.quantity++
       } else {
           this.items.push({
               id: product.id ,
               quantity: 1,
           })
       }
       
       this.rootStore.productStore.decrementInventory(product)
   }

   @computed get cartProducts() {
       const prodcutStore = this.rootStore.productStore 

       return this.items.map(cartItem => {
          const prod = prodcutStore.all.find(prodItem => prodItem.id === cartItem.id)
          return {
              id: prod.id, 
              title: prod.title,
              price: prod.price,
              quantity: cartItem.quantity,
          }
       })
   }

   @computed get totalPrice() {
       return this.cartProducts.reduce((total, prod) => {
           return total + prod.price * prod.quantity
       }, 0)
   }

   constructor(rootStore) {
       makeObservable(this)
       this.rootStore = rootStore
   }

   @action.bound checkout(products) {
       const savedProducts = [...products]
       this.setItems([])

       shop.buyProducts(products, 
        ()=>{
            this.setCheckoutStatus("successful")
        }, 
        ()=>{
            this.setCheckoutStatus("fail")
            this.setItems(savedProducts)
        })

   }

   @action.bound setCheckoutStatus(status) {
       console.log("checkout status: ", status)
       this.checkoutStatus = status
   }

   @action.bound setItems(items) {
       this.items = items
   }
}

export default CartStore