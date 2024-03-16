import React from 'react'

const Gallery = ({ productItems, handleAddToCart }) => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" style={{height:"500px ;"}} alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/7310202/pexels-photo-7310202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" style={{height:"500px ;"}} alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/16675632/pexels-photo-16675632/free-photo-of-shoper-website-opened-on-the-computer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" style={{height:"500px"}} alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='row container' style={{margin:"auto"}}>
             {productItems.map((product)=>(

                <div className="card col-5" style={{margin: "25px"}}>
                <img  className="card-img-top" style={{height:"255px"}} src={product.pic} alt="Cart img"/>
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button onClick={()=>handleAddToCart(product)} className='btn btn-primary'>
                   Add to Cart
                  </button>
                </div>
              </div>

             ))}
            </div>

        </>
    )
}

export default Gallery