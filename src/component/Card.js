import React, { useState } from 'react'
import { myDatabase } from '../firebase.js'
// import jquery from 'jquery'

function Card() {

    const [productData, setproductData] = React.useState([])

    React.useEffect(function () {
        // Logic to read the data from Firestore database
        myDatabase.collection("products").onSnapshot(function (snapshot) {
            //  snapshot =['doc1', "doc2" ," doc3"]
            setproductData(
                snapshot.docs.map(function (i) {
                    // console.log(i.data())
                    return i.data()
                })
            )
        })
    })

    function collectData(event) {

        //logic to collect the data like name , id ,quantity & price

        if (localStorage.getItem("cart") == null) {
            // cart key is not present in local storage , so it means id and quality is also not in the local storage 

            // we have create the cart key
            // var cart = { id : quantity}
            var cart = {}

        } else {

            // if cart is already in the local storage
            // JSON data in to Javascript Object 
            // {"cart":{"1" : 5}}   
            cart = JSON.parse(localStorage.getItem("cart"))
        }
        // we need to get the id
        // console.log(event)
        let myId = event.target.id

        if (cart[myId] == undefined) {
            // it means that id along with the quantity is not there inside the cart object

           
            var name = document.getElementById("myname"+myId).innerText
            var price = Number(document.getElementById("myprice"+myId).innerText) 
            var quantity = 1
            cart[myId] = [quantity , name , price]

            // cart[myId] = 1 
            // cart[myId] = 1 cart[2] = 1
        } else {

            quantity = cart[myId][0] + 1 
            cart[myId][0] = quantity

            price = Number(document.getElementById("myprice"+myId).innerText) * quantity
            cart[myId][2] = price

            // cart[myId][0] = cart[myId][0] + 1 
        }

        // {"cart" : {1 : 4, 2 : 4}}

        // cart(Javascript Object) -----> JSON
        localStorage.setItem("cart", JSON.stringify(cart))


        displayCart(cart)
        function displayCart(mycart){
            //Logic to display the data that is present inside the cart variable 
            // console.log(mycart)
            var cartData = ""
            for(let i in mycart){
                // console.log(mycart[i])
                cartData = cartData + "QTY:" + mycart[i][0]+" " + "NAME:" + mycart[i][1]+" " + "PRICE:" + mycart[i][2] +" "+"<br/>"
                // console.log(cartData)
            }


            cartData = cartData + "<a href='productData.html' class='btn btn-success'>Continue</a>"
            document.getElementById("mypopover").setAttribute("data-content" , cartData)
            // jquery('[data-toggle="popover"]').popover()
            

        }

    }




  


    return (
        <div className='all d-flex flex-wrap  justify-content-center' style={{ display: 'flex' }}>
            {
                productData.map(function (i) {
                    return <div key={i.slno} className="card" style={{ width: 350, margin: 30, padding: 30 }}>
                        <h2>{i.slno}</h2>
                        <img src={i.imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" id={"myname"+i.slno}>{i.name}</h5>
                            <p className="card-text">{i.description}</p>
                            <del><h5 className="card-title">{i.originalPrice}</h5></del>
                            <h5 className="card-title" id={"myprice"+i.slno}>{i.discountedPrice}</h5>
                            <a href="#" className="btn btn-primary" onClick={collectData} id={i.slno}>Add To Card</a>
                        </div>
                    </div>


                })

            }


        </div>
    )
}

export default Card
