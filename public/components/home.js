import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getAllProducts} from '../redux/actions/products.action';

export class Products extends Component {

  componentWillMount() {
    this.props.getAllProducts();
  }

    render() {
      const { productReducer } = this.props;
        return (
            <div className="products">
      <div className="container">
        <header>
          <h4>Our products</h4>
        </header>
        <div className="row">
          {
            productReducer.list.map(product => (
              <div className="col-md-3">
                <div className="card p-0">
                  <div className="card-body">
                    <div className=" product-top">
                      <h1>{product.face}</h1>
                      <div className="overlay">
                        <button type="button" className="btn btn-secondary" title="Quick-shop"><i className="fas fa-eye"></i></button>
                        <button type="button" className="btn btn-secondary" title="Add to Wishlist"><i className="fa fa-heart-o"></i></button>
                        <button type="button" className="btn btn-secondary" title="Add to Cart"><i className="fas fa-shopping-cart"></i></button>
        
                      </div>
                    </div>
                    <div className="product-bottom text-center">
                      <h5>{product.size} pixels</h5>
                      <h6>${product.price}</h6>
                      <h6>{product.date}</h6>
                    </div>
                  </div>
                </div> 
              </div>

            ))
          }
          

          {/* <div className="col-md-3">
            <div className="card p-0">
              <div className="card-body">
                <div className=" product-top">
                <h1>( .-. )</h1>
                  <div className="overlay">
                    <button type="button" className="btn btn-secondary" title="Quick-shop"><i className="fas fa-eye"></i></button>
                    <button type="button" className="btn btn-secondary" title="Add to Wishlist"><i className="fa fa-heart-o"></i></button>
                    <button type="button" className="btn btn-secondary" title="Add to Cart"><i className="fas fa-shopping-cart"></i></button>
    
                  </div>
                </div>
                <div className="product-bottom text-center">
                  <h5>35 pixels</h5>
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
                <h1>( .-. )</h1>
                  <div className="overlay">
                    <button type="button" className="btn btn-secondary" title="Quick-shop"><i className="fas fa-eye"></i></button>
                    <button type="button" className="btn btn-secondary" title="Add to Wishlist"><i className="fa fa-heart-o"></i></button>
                    <button type="button" className="btn btn-secondary" title="Add to Cart"><i className="fas fa-shopping-cart"></i></button>
    
                  </div>
                </div>
                <div className="product-bottom text-center">
                  <h5>35 pixels</h5>
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
                <h1>( .-. )</h1>
                  <div className="overlay">
                    <button type="button" className="btn btn-secondary" title="Quick-shop"><i className="fas fa-eye"></i></button>
                    <button type="button" className="btn btn-secondary" title="Add to Wishlist"><i className="fa fa-heart-o"></i></button>
                    <button type="button" className="btn btn-secondary" title="Add to Cart"><i className="fas fa-shopping-cart"></i></button>
    
                  </div>
                </div>
                <div className="product-bottom text-center">
                  <h5>35 pixels</h5>
                  <h6>$3.5</h6>
                  <h6>3 days ago</h6>
                </div>
              </div>
            </div> 
          </div> */}
        </div>
      </div>
    </div>
        )
    }

}

const mapStateToProps = ({ productReducer }) => ({
  productReducer,
});
export default connect(
  mapStateToProps,
  { getAllProducts },
)(Products);

