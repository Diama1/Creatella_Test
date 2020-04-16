import React, { Component, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import getTimeInterval  from './layout/timeFormating';
import { getAllProducts} from '../redux/actions/products.action';

export class Products extends Component {
  state = {
    sorting: 'asc',
    loading: false
  }

  componentWillMount() {
    this.props.getAllProducts();
  }
  

    render() {
      const { productReducer } = this.props;
      const { loading, sorting } = this.state;
      
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
          <div className="container">
        <header>
          <h4>Our products</h4>
        </header>
        <div className="row">
          {
            productReducer.list.sort((a,b) => {
              const isReversed = (sorting === 'asc') ? 1 : -1;
              return isReversed * a.size - b.size;
            })
              .map( (product, index) => {
              if(index > 0 && index % 20 === 0 || index === productReducer.list.length -1){  
                var link = "http://localhost:3000/ads/?r=" + Math.floor(Math.random()*1000);
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
  { getAllProducts },
)(Products);

