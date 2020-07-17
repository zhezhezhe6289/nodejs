// Object property shorthand
const name = 'Eugene'
const userAge = 28

const user = {
    name,
    userAge,
    location: 'taipei'
}
// console.log(user)

// Object destructuring
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const price = product.price

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = ({label, stock}) => {
    console.log(label, stock)
}

transaction(product)