import React, { Component, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import getTimeInterval  from './layout/timeFormating';
import {getAllProducts, sortProducts} from '../redux/actions/products.action';
import { BASE_URL } from '../utils/constant';
import Header from './layout/header';



export class Products extends Component {
  state = {
    loading: false
  }

  componentWillMount() {
    this.props.getAllProducts();
  }
  

    render() {
      const { productReducer } = this.props;
      const { loading } = this.state;
      
      if (productReducer.loading) {
        return (
          <div className="products">
            <div className="fluid-container">
              <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
          </div>
         
        );
        }
        return (
        <div className="products">
          <Header />
          <div className="container">
        <header>
          <h4>Our products</h4>
        </header>
        <select class="custom-select custom-select-lg mb-3" onChange={this.props.sortProducts} >
          <option selected>Sort by</option>
          <option value="price">Price</option>
          <option value="size">Size</option>
          <option value="id">Id</option>
        </select>
        <div className="row">
          {
            productReducer.list.map( (product, index) => {
              if(index > 0 && index % 20 === 0 || index === productReducer.list.length -1){  
                var link = `${BASE_URL}/ads/?r=` + Math.floor(Math.random()*1000);
                return(
                  <div className="col-md-12 d-flex justify-content-center">
                    <img src={link} />
                  </div>
                )               
              } 
                return (
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
                        <h6>{getTimeInterval(product.date)}</h6>
                      </div>
                    </div>
                  </div> 
                </div>

                )
              })
              }
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
  { getAllProducts, sortProducts },
)(Products);

