import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'

@inject('productStore', 'cartStore') @observer 
class Products extends Component {
    
    render() {
        const {productStore, cartStore} = this.props
        return (
            <div>
                <h2>products</h2>
                <p>{this.props.productStore.foo}</p>
                <ul>
                    {productStore.all.map( (item, idx) => (
                        <li key={idx}>
                            {item.title} - {item.price} * {item.inventory}
                            <br/>
                            <button 
                            disable={!item.inventory}
                            onClick={()=>cartStore.addToCart(item)}>{item.inventory? "Add to cart" :
                             "Sold out"}</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    changeFoo = ()=> {
        this.props.productStore.setFoo()
    }

    componentDidMount() {
        this.props.productStore.getAllProducts()
        console.log("Product all in component: ",this.props.productStore.all)
    }
}

export default Products