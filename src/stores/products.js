import {action, makeObservable, observable} from 'mobx'
import * as shop from '../api/shop'

class ProductsStore {
   @observable all = []
  

   constructor(rootStore) {
       makeObservable(this)
       this.rootStroe = rootStore
   }

   @action.bound getAllProducts() {
       shop.getAllProducts(products => {
           console.log("get products: ", products)
           this.setAll(products)
       })
   }


   @action.bound setAll(products) {
       console.log("setAll products: ", products)
       this.all = products
       console.log("products all: ", this.all)
   }

   @action.bound decrementInventory(product) {
      const prod =  this.all.find(item => item.id === product.id)
      prod.inventory--
   }
}

export default ProductsStore