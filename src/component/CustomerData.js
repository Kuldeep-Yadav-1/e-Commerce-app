import React from 'react'
import { myDatabase } from '../firebase.js'

function CustomerData() {

    React.useEffect(function(){
        const name = localStorage.getItem("Name")
        const city = localStorage.getItem("City")
        const country = localStorage.getItem("Country")
        const pincode = Number(localStorage.getItem("Pincode"))
        const total = Number(localStorage.getItem("total"))

        // console.log(name , city, country , pincode , total)

        myDatabase.collection("customers").add({
            name: name ,
            city: city , 
            country: country ,
            pincode: pincode ,
            total: total
        })

    })


  return (
    <div>
      
    </div>
  )
}

export default CustomerData
