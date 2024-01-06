import React, { createContext, useState } from 'react'

export const BasketContext=createContext()

function BasketProvider({children}) {
    const [basket, setBasket] = useState([])
    const [isOpenBasket, setIsOpenBasket] = useState(false)

    let subtotal=0
    basket.forEach(element=>{
        subtotal+=parseInt(element.total)
    })

    function HandleAddBasket(x) {
        const product=basket.find((item)=>item._id === x._id)
        if (product) {
            product.count++
            product.total=product.count * parseInt(product.newprice)
            return
        }
        else{
            const total =x.newprice
            setBasket([...basket, {...x ,count:1 , total:total }])
        }
      }
    
    function HandleIsOpenBasket() {
        setIsOpenBasket(!isOpenBasket)
      }

     function HandleCountVal(isAdd, x) {
        const product=basket.find((item)=>item._id === x._id)

       if (isAdd) {
        if (product.count === 30) {
            return
        }
        product.count++
        product.total=product.count * parseInt(product.newprice)
        setBasket([...basket])
        console.log("Productdur", product);
       }
       else{
        if (product.count === 1) {
            return
        }
        product.count--
        product.total=product.count * parseInt(product.newprice)
        setBasket([...basket])


       }
     }

    function HandleDelete(_id) {
        setBasket(basket.filter(x=>x._id !== _id))
    }
    const data={
        HandleAddBasket,
        HandleIsOpenBasket,
        HandleCountVal,
        HandleDelete,
        basket,
        setBasket,
        basket,
        isOpenBasket,
        subtotal
    }
  return (
    <BasketContext.Provider value={data}>
        {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider