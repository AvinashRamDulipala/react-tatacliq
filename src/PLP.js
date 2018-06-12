import React, { Component } from 'react';
import './App.css';
import {Col ,Row} from 'react-bootstrap';
import BottomScrollListener  from 'react-bottom-scroll-listener';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import Product from './Product';
import PDP from './PDP';
//import withIntersectionObserverProps from '@hocs/with-intersection-observer-props';
//import InfiniteScroll from "react-infinite-scroll-component";

class PLP extends Component {
    constructor(props) {
          super(props);
          this.state = {
          searchText : "",
          searchData : [],
          pageNumber :0,
          products : [],
          productData : [],
          loading: true,
          clearData: true,
          paginationData:[],

    };
    this.inputChange = this.inputChange.bind(this);
    this.searchSubmit = this.searchSubmit.bind(this);
    this.scrollSubmit = this.scrollSubmit.bind(this);

    this.onKeyPress = this.onKeyPress.bind(this);
}  
inputChange(e) {
this.setState({searchText : e.target.value});
}
componentDidMount() {
setTimeout(() => this.setState({ loading: false}), 1500);


}
searchSubmit() {
this.setState({ loading  : true ,clearData  : true});
fetch(' https://www.tataque.com/marketplacewebservices/v2/mpl/products/searchProducts/?searchText='+
this.state.searchText+'&isTextSearch=false&isFilter=false&page=0&isPwa=true&pageSize=20&typeID=all')
.then(function (response) {
return response.json();
}).then(function (result) {

/*this.state.products = result.searchresult;
this.state.pagination = result.pagination;*/

this.setState({
searchData : result.searchresult  ,paginationData : result.pagination ,loading: false});
}.bind(this))

}
scrollSubmit() {
this.setState({ loading  : true,clearData  : false ,pageNumber:this.state.pageNumber + 1});
fetch(' https://www.tataque.com/marketplacewebservices/v2/mpl/products/searchProducts/?searchText='+
this.state.searchText+'&isTextSearch=false&isFilter=false&page='+this.state.pageNumber+'&isPwa=true&pageSize=20&typeID=all')
.then(function (response) {
return response.json();
}).then(function (result) {

this.state.products = result.searchresult;

this.setState({
searchData : this.state.products,loading: false});
}.bind(this))

}
searchOpen() {
document.getElementById("searchDiv").style.display = "block";
document.getElementById("homeDiv").style.display = "none";
document.getElementById("productData").style.display = "none";
document.getElementById("container").style.display = "none";
  document.getElementById("textareaInput").value='';

}
searchClose() {
document.getElementById("searchDiv").style.display = "none";
document.getElementById("homeDiv").style.display = "block";
document.getElementById("container").style.display = "block";
document.getElementById("productData").style.display = "block";



}  
onKeyPress = (e) => {

if(e.which === 13) {

document.getElementById("searchDiv").style.display = "none";
document.getElementById("homeDiv").style.display = "block";
document.getElementById("productData").style.display = "block";
document.getElementById("container").style.display = "block";

this.searchSubmit();

}
}

render() {


var totalProducts = [];
 var productData = [];

for(var product in this.state.searchData)
   {
      if (this.state.searchData.hasOwnProperty(product))
      {
       
            productData.push(<Product product={this.state.searchData[product]} key={this.state.searchData[product].productId+ Math.random()}></Product>);

      }
  }



if(this.state.clearData) {
    this.state.productData = [];
this.state.pageNumber=0;
  
}
this.state.productData = this.state.productData.concat(productData);





for(var paginations in this.state.paginationData)
{
if (this.state.paginationData.hasOwnProperty(paginations))
{

              totalProducts.push(this.state.paginationData[paginations]);

}
}


return (
 <Router>
 <div>
 <Route path="/" exact render={
          ()=>{
            return (
<div>

  <section>

   <div id="homeDiv" >
      <div className="navbar navbar-default">
         <div className="navbar-header">
            <div id="nav-top-icons" className="nav-header-body">
               <div className="nav-header-body-left-icon">
                  <div className="icon-position" style={{width: '16px', height:'16px'}}>
                    <div className="icon-left" style={{backgroundImage: 'url(https://tmppprd.tataunistore.com/static/media/arrowBack.1607a455.svg)',backgroundSize: 'contain'}}>
                    </div>
                  </div>
                </div> 
                <div className="logo">
                  <div className="icon-position" style={{width: '35px', height:'45px'}}>
                    <div className="navbar-header-icon" style={{backgroundImage: 'url(https://tmppprd.tataunistore.com/static/media/group.ccb1a969.svg)', backgroundSize: 'contain'}}>
                  </div>
                </div>
              </div>
              <div className="search-icon">
                <div className="icon-position" style={{width: '16px', height:'16px'}}>
                  <div className="navbar-header-icon" onClick={this.searchOpen} style={{backgroundImage: 'url(https://tmppprd.tataunistore.com/static/media/search.a4309640.svg)', backgroundSize: 'contain'}}>
                </div>
              </div>
            </div>
            <div className="search-results">
              <h1 className="search-results-text">Search results</h1>
            </div>
          </div>
        </div>
      </div>
   </div>
   <div id="searchDiv">
      <div className="searchbar">
         <div className="searchbar-text">
            <div className="navbar navbar-default">
               <div className="navbar-header">
                  <div id="nav-top-icons" className="nav-header-body">
                     <div className="search-icon">
                        <div className="icon-position"style={{width: '16px', height:'16px'}}>
                        <div className="navbar-header-icon" onClick={this.searchClose} style={{backgroundImage: 'url(https://tmppprd.tataunistore.com/static/media/cancel.fea9f12f.svg)', backgroundSize: 'contain'}}>
                     </div>
                  </div>
               </div>
               <div className="input-search">
                  <div className="input-search-text">
                     <div className="icon-position" style={{width: '16px', height:'45px'}}>
                     <div className="navbar-header-icon" style={{backgroundImage: 'url(https://tmppprd.tataunistore.com/static/media/searchwhite.8af840bd.svg)', backgroundSize: 'contain'}}>
                  </div>
               </div>
            </div>
            <div className="navbar-header-search">
               <div className="navbar-search-text-color navbar-search-position">
                  <div className=" navbar-search-position">
                     <div className="navbar-search-border" style={{height:'30px',borderColor:'rgb(33, 33, 33)', borderBottomWidth: '0px', borderBottomStyle:'solid'}}>
                     <input type="text" onKeyPress={this.onKeyPress} placeholder="What are you looking for?" autofocus="" name="searchtext" 
                        onChange={this.inputChange} id="textareaInput" className="navbar-search-text-color" style={{fontSize:'14px'}} value={this.props.search}  />
                     <button type="submit" onClick={this.searchSubmit} style={{display:'none'}} >Search</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   </div>
   </div>
   <div className=""></div>
   </div>
   </div>
   </div>
   </section>
   <div className="container" id="container">
   <section>
<div className="product-list-view"  id="nav-top-icons">
   <div className="total-products">{totalProducts[3]} Products</div>
   <div className="product-position">
      <div className="icon-position" style={{width: '20px', height:'20px'}}>
         <div className="navbar-header-icon" style={{backgroundImage: 'url(https://tmppprd.tataunistore.com/static/media/list.341c3565.svg)', backgroundSize: 'contain'}}></div>
      </div>
   </div>
</div>
</section>
<section>
<Row className="filter-grid">
   <Col xs={6} className="mar-t-refine">
   <div className="bg-img-refine">
      <i className="fa fa-exchange"></i><span>Refine</span>
   </div>
   </Col>
   <Col xs={6} className="mar-t-refine">
   <div className="bg-img-refine">
      <i className="fa fa-sort-amount-desc"></i><span>Sort</span>
   </div>
   </Col>
</Row>
</section>

   <section>
      <div  style={{marginTop:'10px',marginLeft:'-15px',marginRight:'-15px'}} id="productData">
         <BottomScrollListener  onBottom={this.scrollSubmit} />
         {this.state.productData} 
         { this.state.loading && 
         <div className="loader-container"><div className="loader"></div></div>
         }
      </div>
      
   </section>
</div>

 
</div>

              );
          }
         } />
         <Route exact path="/:handle" component={PDP} />
         
</div>

         </Router>
);
}
}
export default PLP;
