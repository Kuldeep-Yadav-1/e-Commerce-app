import React from 'react'

import { myDatabase } from "../firebase.js"

function AddProduct() {

    const [productData, setProductData] = React.useState({
      productSlno : "" ,
      productName : "" ,
      productIamgeUrl : "" ,
      productDescription : "" ,
      productOriginalPrice : "" ,
      productDiscountedPrice : "" 
    })

    function collectIt(event){
      const myData = event.target.value 
      // const myName = event.target.name 

      setProductData({...productData ,[event.target.name] : myData})
      console.log(productData) 
    }

    // console.log(productData) 

    function saveData(){
      // logic the insert/add data into the Database
      myDatabase.collection("products").add({
       
        slno : Number(productData.productSlno),
        name : productData.productName,
        imageUrl : productData.productIamgeUrl,
        description : productData.productDescription,
        originalPrice : Number(productData.productOriginalPrice),
        discountedPrice : Number(productData.productDiscountedPrice),
      })

      window.location.pathname = "/home"

    }


  return (
    <div className='row' style={{margin : 40}}>
        <div className='col-md-3'>
            <label>Product Slno:</label>
            <input type='number' name='productSlno' className='form-control' onChange={collectIt}/><br/><br/>

            <label>Product Name:</label>
            <input type='text' name='productName' className='form-control' onChange={collectIt}/><br/><br/>

            <label>Product Iamge URL:</label>
            <input type='text' name='productIamgeUrl' className='form-control' onChange={collectIt}/><br/><br/>

            <label>Product Description:</label>
            <textarea rows={4} cols={40} name='productDescription' className='form-control' onChange={collectIt}></textarea><br/><br/>

            <label>Product Original Price:</label>
            <input type='number' name='productOriginalPrice' className='form-control' onChange={collectIt} /><br/><br/>

            <label>Product Discounted Price:</label>
            <input type='number' name='productDiscountedPrice' className='form-control' onChange={collectIt}/><br/><br/>

            <button className='btn btn-outline-success' onClick={ saveData }>Add Product</button>

        </div>
    </div>
  )
}

export default AddProduct
