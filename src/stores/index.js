import ProductsStore  from "./products"
import CartStore from './cart'


class RootStore {
    constructor () {
        this.productStore = new ProductsStore(this)
        this.cartStore = new CartStore(this)
    }
}

export default RootStore