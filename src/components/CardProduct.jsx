// rafce
import React from 'react'

const CardProduct = () => { //CardProduct là tên component
    //Nội dung component đc viết trong lệnh return (nhớ nội dung phải được viết trong 1 thẻ bao phủ)
  return (
    <div className="card">
        <img src="https://dummyimage.com/600x400/000/fff&text=CardProduct" alt="..." />
        <div className="card-body">
            <h3 className="card-title">Card name</h3>
            <p className="card-text">Card desc</p>
            <button className="btn btn-success">Add to cart</button>
        </div>
    </div>
  )
}

export default CardProduct