import React, { Component, Fragment } from 'react';

export class Products extends Component {

    render() {
      console.log(1212121);
        return (
            <div className="products">
      <div className="container">
        <header>
          <h4>Our products</h4>
        </header>
        <div className="row">
          <div className="col-md-3">
            <div className="card p-0">
              <div className="card-body">
                <div className=" product-top">
                  <img src="https://i.pinimg.com/originals/b1/70/a9/b170a945ba792461b7382ee4cd60993d.png" width="100%" />
                  <div className="overlay">
                    <button type="button" className="btn btn-secondary" title="Quick-shop"><i className="fas fa-eye"></i></button>
                    <button type="button" className="btn btn-secondary" title="Add to Wishlist"><i className="fa fa-heart-o"></i></button>
                    <button type="button" className="btn btn-secondary" title="Add to Cart"><i className="fas fa-shopping-cart"></i></button>
    
                  </div>
                </div>
                <div className="product-bottom text-center">
                  <h5>200x400</h5>
                  <h6>$3.5</h6>
                  <h6>3 days ago</h6>
                </div>
              </div>
            </div> 
          </div>

          <div className="col-md-3">
            <div className="card p-0">
              <div className="card-body">
                <div className=" product-top">
                  <img src="https://i.pinimg.com/originals/b1/70/a9/b170a945ba792461b7382ee4cd60993d.png" width="100%" />
                  <div className="overlay">
                    <button type="button" className="btn btn-secondary" title="Quick-shop"><i className="fas fa-eye"></i></button>
                    <button type="button" className="btn btn-secondary" title="Add to Wishlist"><i className="fa fa-heart-o"></i></button>
                    <button type="button" className="btn btn-secondary" title="Add to Cart"><i className="fas fa-shopping-cart"></i></button>
    
                  </div>
                </div>
                <div className="product-bottom text-center">
                  <h5>200x400</h5>
                  <h6>$3.5</h6>
                  <h6>3 days ago</h6>
                </div>
              </div>
            </div> 
          </div>

          <div className="col-md-3">
            <div className="card p-0">
              <div className="card-body">
                <div className=" product-top">
                  <img src="https://i.pinimg.com/originals/b1/70/a9/b170a945ba792461b7382ee4cd60993d.png" width="100%" />
                  <div className="overlay">
                    <button type="button" className="btn btn-secondary" title="Quick-shop"><i className="fas fa-eye"></i></button>
                    <button type="button" className="btn btn-secondary" title="Add to Wishlist"><i className="fa fa-heart-o"></i></button>
                    <button type="button" className="btn btn-secondary" title="Add to Cart"><i className="fas fa-shopping-cart"></i></button>
    
                  </div>
                </div>
                <div className="product-bottom text-center">
                  <h5>200x400</h5>
                  <h6>$3.5</h6>
                  <h6>3 days ago</h6>
                </div>
              </div>
            </div> 
          </div>
          <div className="col-md-3">
            <div className="card p-0">
              <div className="card-body">
                <div className=" product-top">
                  <img src="https://i.pinimg.com/originals/b1/70/a9/b170a945ba792461b7382ee4cd60993d.png" width="100%" />
                  <div className="overlay">
                    <button type="button" className="btn btn-secondary" title="Quick-shop"><i className="fas fa-eye"></i></button>
                    <button type="button" className="btn btn-secondary" title="Add to Wishlist"><i className="fa fa-heart-o"></i></button>
                    <button type="button" className="btn btn-secondary" title="Add to Cart"><i className="fas fa-shopping-cart"></i></button>
    
                  </div>
                </div>
                <div className="product-bottom text-center">
                  <h5>200x400</h5>
                  <h6>$3.5</h6>
                  <h6>3 days ago</h6>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
        )
    }

}
export default Products;
