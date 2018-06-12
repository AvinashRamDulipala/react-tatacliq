import React, { Component } from 'react';
import './App.css';
import {Col,Image} from 'react-bootstrap';
import { If, Then, ElseIf } from 'react-if-elseif-else-render';

import {  Link } from 'react-router-dom';

export default class Product extends Component {
   constructor(props) {
          super(props);
          this.state = {
         };
}
   
render(){
const imgElements =Math.round(this.props.product.discountPercent,0);
const offerElements =this.props.product.price.mrpPrice.formattedValueNoDecimal;
const newProduct =this.props.product.newProduct;
const isOfferExisting =this.props.product.isOfferExisting;
const webURLData =this.props.product.webURL.split('p-');
// console.log(webURLData)
const url_array = webURLData[1];

// console.log("avinash"+answer_array);
// const productId =this.props.product.productId;

//console.log(webURL);
var textStyle = {
position: 'absolute',
top: '6.6%',
};
var percentoffer ={
top: '18px', left: '13px', fontSize: '9px', fontWeight: 'bold' ,color:'#fff', textAlign: 'center',padding: '0 15px 0 10px' ,fontFamily: 'semibold',position: 'absolute'
}

return(
  <Col xs={6} className="mar-t-20 max-height">
   <Link to={url_array}> 
   <div className="bg-img-list" >
  
                       
 <div style={{width: 'auto'}} className="discountoffer" >
      <Image responsive  className="img-list" src={this.props.product.imageURL}></Image>
      <div>
         <If condition={imgElements >
            0}>
            <Then>
               <div>
                  <Image style={textStyle} responsive src="/images/discountoffer.png" />
                  <div style={percentoffer}>
                     <div>{imgElements} % off</div>
                  </div>
               </div>
            </Then>
            <ElseIf condition={isOfferExisting===true}>
               <div>
                  <Image style={textStyle} responsive src="/images/discountoffer.png" />
                  <div style={percentoffer}>
                     <div>On offer</div>
                  </div>
               </div>
            </ElseIf>
            <ElseIf condition={ newProduct ===true}>
               <div>
                  <Image style={textStyle} responsive src="https://tmppprd.tataunistore.com/static/media/new.27aaa13d.svg" />
                  <div style={percentoffer}>
                     <div> new</div>
                  </div>
               </div>
            </ElseIf>
         </If>
      </div>
   </div>

</div>
<div className="mar-t-10">
   <div className="list-view">
      <div className="list-details">
         <h3 className="list-brandname">{this.props.product.brandname}</h3>
      </div>
      <div className="product-details">
         <h2 className="list-productname">{this.props.product.productname}</h2>
         <div className="price-details">{this.props.product.price.sellingPrice.formattedValueNoDecimal} &nbsp;&nbsp;
            {imgElements > 0 &&
            <span className="spanText"><strike>
            {offerElements}</strike>
            </span>
            }
         </div>
      </div>
   </div>
</div>
 </Link>
</Col>  
              


       
);
}
}