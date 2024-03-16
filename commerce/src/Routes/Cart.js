import React from 'react'

const Cart = ({ cartProducts }) => {
    var total = 0
    cartProducts.map((product)=>(
        total = total + product.item.cost
    ))
  return (
    <>
    <div className='container row' style={{margin:"auto"}}>
        {cartProducts.map((product) => (
            
        <div className=" m-2 col-5">
          <div className="card">
           <img className="card-img-top" src={product.item.pic} style={{height:"100px", width:"300px", margin:"auto"}} alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{product.item.name}</h5>
              <h2>{product.item.cost}</h2>
              <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary">-</button>
                <button type="button" className="btn btn-primary">{product.quantity}</button>
                <button type="button" className="btn btn-primary">+</button>
              </div>
            </div>
          </div>

        </div>
        ))}
    </div>
    <div className='jumbotron'>
        <h1 className='display-4'>Total Cart Price: {total} Rs</h1>
        <a className='btn btn-primary btn-lg' href="/" role='button'>Make Payment</a>

    </div>

    </>
  )
}

export default Cart