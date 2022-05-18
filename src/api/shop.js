const _products = [
    {"id":1, "title": "IPad 4 Mini", "price": 500.1, "inventory": 2},
    {"id":2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
    {"id":1, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5},
]

export const getAllProducts = callback => {
    setTimeout(function() {
        callback(_products)
    }, 1000)
}

export const buyProducts = (prodcuts, callback, errorCallback)=> {
    setTimeout(()=> {
        Math.random() > 0.5 ? callback() : errorCallback()
    }, 100)
}