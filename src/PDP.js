import React, { Component } from 'react';
import './PDP.css';
import Carousel from 'nuka-carousel';
import ReactDOM from 'react-dom';
import { If, Then, ElseIf } from 'react-if-elseif-else-render';
import { Collapse , CardBody, Card } from 'reactstrap';
// import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import ScrollEvent from 'react-onscroll';
// import Accordion from 'react-responsive-accordion';



 class PDP extends Component {
	constructor(props) {
      super(props);

      this.state = {
      	productData: {},
        productImages : [],
        Product:[],
         knowMore:[],
         details:[],
         classifications:[],
         variantOptions:[],
        productDetails:[],
        collapse: false,
         collapseone: false,
         collapsetwo: false,
         collapsethree: false, wrapAround: false 
      };
          this.goBack = this.goBack.bind(this);
          this.toggle = this.toggle.bind(this);
          this.toggleone = this.toggleone.bind(this);
          this.toggletwo = this.toggletwo.bind(this);
          this.togglethree = this.togglethree.bind(this);
          this.handleScroll = this.handleScroll.bind(this);
           this.handleClick = this.handleClick.bind(this);
            


    }
    toggle() {
    
    this.setState({ collapse: !this.state.collapse });


  }
   toggleone() {
    
    this.setState({ collapseone: !this.state.collapseone });
  }
  toggletwo() {
    	
    this.setState({ collapsetwo: !this.state.collapsetwo });
  }
  togglethree() {
    
    this.setState({ collapsethree: !this.state.collapsethree });
  }
goBack() {
    this.props.history.goBack()
  }
  componentDidMount() {
  	
  	  const { handle } = this.props.match.params;

  	 console.log(handle);
  	
  	 
const API = `https://www.tataque.com/marketplacewebservices/v2/mpl/products/productDetails/${handle}?isPwa=true`;
// console.log(API);
  fetch(API).then((Response)=>Response.json()).then((data)=>
  {
  	var galleryImg = data.galleryImagesList;
  	
  	var imageUrls=[];

  	for(var i=0; i<galleryImg.length;i++){
  		 imageUrls.push(galleryImg[i].galleryImages[0].value);
  	}
      this.setState({
            productImages:imageUrls, productData:data, knowMore:data.knowMore,
            details:data.details,variantOptions:data.variantOptions,classifications:data.classifications
      })
  console.log("arrowBack"+data.classifications);
  
  })
  }
handleClick(){
	 var acc = document.getElementsByClassName("accordion");
   alert(acc);
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
}
handleScroll(){
	  //alert('kddd');
	 // const div = ReactDOM.findDOMNode(this.refs.someRef);
    // div.addEventListener('scroll', this.handleScroll);
	
	window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");


function myFunction() {
  if (window.pageYOffset >= 50) {

if(document.getElementById("header") != null) {
  document.getElementById("header").style.display = "block";
}

    navbar.classList.add("sticky")
  } else {
   
   if(document.getElementById("header") != null) {
    document.getElementById("header").style.display = "none";
}
     navbar.classList.remove("sticky");

  }
}

}

componentWillUnmount() {
   const div = ReactDOM.findDOMNode(this.refs.someRef)
    div.addEventListener('scroll', this.handleScroll);
}


render(){
	
	 var productDetails = [];

	   // var classifications = this.state.productData.classifications;
	  const rootCategory = this.state.productData.rootCategory;
	  console.log(rootCategory);
	  const discount =Math.round(this.state.productData.discount,0);

	// for(var prop in this.state.productData) {
	// 	if (this.state.productData.hasOwnProperty(prop)) {
	//  	winningSeller=this.state.productData.winningSellerPrice;
	// 	}
	// }

    for(var prop in this.state.productImages)
       {
          if (this.state.productImages.hasOwnProperty(prop))
          {
                 productDetails.push(<img key={this.state.productImages[prop]} src={this.state.productImages[prop]} alt="Shirts"/>);


          }
      }
	return(<div id="root" ref="someRef"  className="parent"   >
		 
   <div className="nav-default">
      <div className="nav-header">
       <div className="nav-body" id="navbar">
       <ScrollEvent handleScrollCallback={this.handleScroll} />
            <div className="nav-header-body-left-icon">
               <div className="nav-position" style={{width: '30px', height:'30px'}}>
                  <div className="nav-icons"  onClick={this.goBack} style={{backgroundImage: 'url(https://tmppprd.tataunistore.com/static/media/back-with-bg.3bb6fef7.svg)',backgroundSize: 'contain'}}></div>
               </div>
            </div>
            <div className="nav-header-body-right-icons">
               <div className="nav-right-cart-icon cart-bag-icons">
                  <div className="nav-position" style={{width: '30px', height:'30px'}}>
                     <div className="nav-icons" style={{backgroundImage: 'url(https://tmppprd.tataunistore.com/static/media/cart-with-bg.9bdb35e6.svg)',backgroundSize: 'contain'}}></div>
                  </div>
               </div>
               <div className="cart-bag-icons">
                  <div className="nav-position" style={{width: '30px', height:'30px'}}>
                     <div className="nav-icons" style={{backgroundImage: 'url(https://tmppprd.tataunistore.com/static/media/save-with-bg.2aadebe5.svg)',backgroundSize: 'contain'}}></div>
                  </div>
               </div>

            </div>

         </div>
         <div className="nav-scroll-header"  id="header" style={{display:'none'}}>
        
   <div className="nav-productName">{this.state.productData.productName}</div>
   <div className="nav-left-arrow-icon">
      <div className="nav-position" style={{width: '20px', height:'20px'}}>
         <div className="nav-icons" onClick={this.goBack} style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/arrowBack.1607a455.svg)',backgroundSize: 'contain'}}></div>
      </div>
   </div>
   <div className="nav-order-history">
      <div className="nav-right-cart-icon cart-bag-icons">
         <div className="nav-position" style={{width: '20px', height:'20px'}}>
            <div className="nav-icons" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/orderhistorywhite.90cdf30a.svg)',backgroundSize: 'contain'}}></div>
         </div>
      </div>
      <div className="cart-bag-icons">
         <div className="nav-position" style={{width: '20px', height:'20px'}}>
            <div className="nav-icons" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/downloadWhite.04850b89.svg)',backgroundSize: 'contain'}}></div>
         </div>
      </div>
   </div>
</div>
      </div> 
       
         <div className="product-image">
            <div className="product-image-view">
               <div className="image-carousel">
                  <div className="image-style" style={{transform: 'translateX(0%)'}}>
                     <div className="body-color">

                        <div className="image-position" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
                           
                           <div className="Carousel-list" >
                           <Carousel>
                           {productDetails}
     
      </Carousel>
								     
							
                        </div>
                     </div>
                     
                    
                  </div>
                  
               </div>
            </div>
        
          
    </div>
             <div className="brand-main">
               <div className="brand-main-title">
                  <div className="brand-title">
                     <div className="brand-details">
                        <div >
                           <h2 className="product-brand-name"><span >{this.state.productData.brandName}</span></h2>
                        </div>
                        <a  href="https://tmppprd.tataunistore.com/mufti-turquoise-navy-cotton-slim-fit-shirt/p-mp000000001702072">
                           <div >
                              <h1 className="product-name">{this.state.productData.productName}</h1>
                           </div>
                        </a>
                     </div>
                     <div className="product-price">
                        <div className="product-seller-price">
                           
                           <span>{this.state.productData.winningSellerPrice ? this.state.productData.winningSellerPrice.formattedValueNoDecimal : ''}</span>
                        </div>
                        <div className="product-mrp-price">
                        {discount > 0 &&
                        <span className="product-mrp-price-value">{this.state.productData.mrpPrice ? this.state.productData.mrpPrice.formattedValueNoDecimal : ''}</span> }
                       {discount > 0 &&
                        <span className="product-discount-price">({discount}%)</span> }</div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="product-delivery">
               <div className="product-cash-on-delivery">Cash on Delivery available</div>
            </div>
            {this.state.productData.productOfferMsg &&
            <div className="product-msg">
            <div className="product-offer-msg">
             {this.state.productData.productOfferMsg ?this.state.productData.productOfferMsg.messageID : ''}
            </div></div>}
            <If condition={rootCategory ==="Clothing"}>
            <Then>
            <div className="root-category">
            
               <div className="select-size">
                  Select Size
                  <div className="select-size-details">
                     <div className="select-guide">
                        Size guide
                        <div className="select-guide-line"></div>
                     </div>
                  </div>
               </div>
                
               <div className="select-size-list-details">
               
                  <div className="select-free-size">


                     <div className="select-size-style" style={{width: 'auto'}}>
                        <div className="select-font-size">
                           <div className="select-size-numbers" style={{fontSize: '14px'}}>M</div>
                        </div>
                     </div>
                     <div className="select-size-style" style={{width: 'auto'}}>
                        <div className="select-font-size">
                           <div className="select-size-numbers" style={{fontSize: '14px'}}>L</div>
                        </div>
                     </div>
                     <div className="select-size-style" style={{width: 'auto'}}>
                        <div className="select-font-size">
                           <div className="select-size-numbers" style={{fontSize: '14px'}}>XL</div>
                        </div>
                     </div>
                     <div className="select-size-style" style={{width: 'auto'}}>
                        <div className="select-font-size">
                           <div className="select-size-numbers" style={{fontSize: '14px'}}>XXL</div>
                        </div>
                     </div>
                     <div className="select-size-style" style={{width: 'auto'}}>
                        <div className="select-font-size">
                           <div className="select-size-numbers" style={{fontSize: '14px'}}>3XL</div>
                        </div>
                     </div>
                     <div className="select-size-style" style={{width: 'auto'}}>
                        <div className="select-font-size">
                           <div className="select-size-numbers" style={{fontSize: '14px'}}>4XL</div>
                        </div>
                     </div>
                     <div className="select-size-style" style={{width: 'auto'}}>
                        <div className="select-font-size">
                           <div className="select-size-numbers" style={{fontSize: '14px'}}>5XL</div>
                        </div>
                     </div>


                  </div>
                  
               </div>
                
            </div>

            <div className="product-variations">
   <div className="product-variations-options" >
      <div className="product-variations-color">Colour: <span >{this.state.productData.variantOptions ? this.state.productData.variantOptions[0].colorlink.color : ''}</span></div>
      <div className="product-color-view">
         
               <div className="product-color-style" style={{width: 'auto'}}>
                  <div className="product-hexa-main-color">
                     <div className="product-hexa-color">

                        <div className="product-hexa-color-code" style={{backgroundColor: this.state.productData.variantOptions ? this.state.productData.variantOptions[0].colorlink.colorHexCode : ''}}></div>
                        <div className="product-hexa-color-opacity"></div>
                     </div>
                  
            </div>
         </div>
      </div>
      
   </div>
</div>
</Then>
<ElseIf condition={rootCategory ==="Watches"}>
               <div>
                 
               </div>
            </ElseIf>
            <ElseIf condition={rootCategory ==="Accessories"}>
               <div className="product-variations">
   <div className="product-variations-options" >
      <div className="product-variations-color">Colour: <span >{this.state.productData.variantOptions ? this.state.productData.variantOptions[0].colorlink.color : ''}</span></div>
      <div className="product-color-view">
         
               <div className="product-color-style" style={{width: 'auto'}}>
                  <div className="product-hexa-main-color">
                     <div className="product-hexa-color">

                        <div className="product-hexa-color-code" style={{backgroundColor: this.state.productData.variantOptions ? this.state.productData.variantOptions[0].colorlink.colorHexCode : ''}}></div>
                        <div className="product-hexa-color-opacity"></div>
                     </div>
                  </div>
              
         </div>
      </div>
      <div></div>
   </div>
</div>
            </ElseIf>
            <ElseIf condition={rootCategory ==="FashionJewellery"||rootCategory ==="FineJewellery" }>
               <div className="root-category">
            
               <div className="select-size">
                  Select Size
                  <div className="select-size-details">
                     <div className="select-guide">
                        Size guide
                        <div className="select-guide-line"></div>
                     </div>
                  </div>
               </div>
                
               <div className="select-size-list-details">
   <div className="select-free-size">
      <div className="select-size-style" style={{width: 'auto'}}>
         <div className="_1bhlTE9d7GniOkiRE3zXhJ select-font-size">
            <div className="_3S5er6rKz1JBlb8agJfqwx select-size-numbers" style={{fontSize: '14px' ,backgroundColor: this.state.productData.variantOptions ? this.state.productData.variantOptions[0].colorlink.colorHexCode : ''}}>{this.state.productData.variantOptions ? this.state.productData.variantOptions[0].sizelink.size : ''}</div>
         </div>
      </div>
   </div>
</div>
</div>
            </ElseIf>
            <ElseIf condition={rootCategory ==="Footwear"}>
               <div className="root-category">
            
               <div className="select-size">
                  Select Length
                  <div className="select-size-details">
                     <div className="select-guide" >
                        Size guide
                        <div className="select-guide-line"></div>
                     </div>
                  </div>
               </div>
                
              <div className="select-size-list-details" >
   <div className="select-free-size">
   {this.state.productData.variantOptions ? 
   this.state.variantOptions.map(function(post, index){
          return (
      <div className="select-size-style" style={{width: 'auto'}} key={index+ Math.random()}>
         <div className="select-font-size">
            <div className="select-size-numbers" style={{fontSize: '14px'}}>{post.sizelink.size}</div>
         </div>
      </div>
  


            )
          }
        ) : ''
    } 
         </div>
</div>
                </div>
            </ElseIf>
                </If>
<div className="check-delivery">
   <div className="check-pincode">Click to enter pin code &amp; check delivery options</div>
   <div className="check-delivery-option">
      <div className="select-check-pincode">
         <div className="select-guide" style={{color: 'rgb(255, 23, 68)'}}>
            Check Pincode
            <div className="select-guide-line" style={{backgroundColor: 'rgb(255, 23, 68)'}}></div>
         </div>
      </div>
   </div>
</div>
<div className="delivery-options">
   <div className="product-delivery-details">
      <div className="product-delivery-mode">
         <div className="product-delivery-modes-atp">
            <div className="delivery-icons">
               <div className="nav-position" style={{width: '30px', height:'30px'}}>
                  <div className="nav-icons" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/expressDelivery.1ea024e7.svg)',backgroundSize: 'contain'}}></div>
               </div>
            </div>
            <div className="delivery-types">Express Delivery </div>
            <div className="delivered-dates">{this.state.productData.deliveryModesATP ? this.state.productData.deliveryModesATP[1].value : ''}</div>
         </div>
      </div>
   </div>
   <div className="product-delivery-details">
      <div className="product-delivery-mode">
         <div className="product-delivery-modes-atp">
            <div className="delivery-icons">
               <div className="nav-position" style={{width: '30px', height:'30px'}}>
                  <div className="nav-icons" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/homeDelivery.16bfffbf.svg)',backgroundSize: 'contain'}}></div>
               </div>
            </div>
            <div className="delivery-types">Standard Delivery </div>
            <div className="delivered-dates">{this.state.productData.deliveryModesATP ? this.state.productData.deliveryModesATP[0].value : ''}</div>
         </div>
      </div>
   </div>
   <div className="product-delivery-details">
      <div className="product-delivery-mode">
         <div className="product-delivery-modes-atp">
            <div className="delivery-icons">
               <div className="nav-position" style={{width: '30px', height:'30px'}}>
                  <div className="nav-icons" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/collect.d4a40190.svg)',backgroundSize: 'contain'}}></div>
               </div>
            </div>
            <div className="delivery-types">QUiQ PiQ </div>
         </div>
      </div>
   </div>
</div>

<div className="product-seller-name">
   <div className="product-seller-winning-seller">
      <div className="product-sold-by">Sold by <span className="span-sold-by">{this.state.productData.winningSellerName }</span></div>
   </div>
</div>
<div className="product-collapse">
   <div className="collapsible" style={{padding: '0px'}}>
      <div className="collapse-content">
         <div className="collapse-body" style={{fontSize: '16px'}}>
            <h3 className="collapse-description">Product Description</h3>
            <div className="down-arrow-icon" onClick={this.toggle} style={{ marginBottom: '1rem' }}></div>

         </div>
      </div>

         <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>{this.state.productData.productDescription}</CardBody>
          </Card>
        </Collapse>
      
   </div>
   <div className="collapsible" style={{padding: '0px'}}>
      <div className="collapse-content">
         <div className="collapse-body" style={{fontSize: '16px'}}>
            <h3 className="collapse-description">Product Details</h3>
            <div className="down-arrow-icon" onClick={this.toggleone} style={{ marginBottom: '1rem' }} ></div>
         </div>
      </div>
       <Collapse isOpen={this.state.collapseone}>
          <Card>
            <CardBody>
      <ul>
        {this.state.details.map(function(post, index){
          return (
              <div key={index+ Math.random()}>
                <h4><b>{post.key}</b></h4>
                <p>{post.value}</p>
              </div>
            )
          }
        )}
      </ul>
       </CardBody>
          </Card>
        </Collapse>
   
   </div>
   <div className="collapsible" style={{padding: '0px'}}>
      <div className="collapse-content">
         <div className="collapse-body" style={{fontSize: '16px'}}>
            <h3 className="collapse-description">Know More</h3>
            <div className="down-arrow-icon" onClick={this.toggletwo} style={{ marginBottom: '1rem' }}></div>
         </div>
      </div>
       <Collapse isOpen={this.state.collapsetwo}>
          <Card>
            <CardBody>
      <ul>
         {this.state.knowMore.map((know, i) =>
        <li  key={i+ Math.random()}>{know.knowMoreItem} </li>)}
        </ul>
       </CardBody>
          </Card>
        </Collapse>
   </div>
   <div className="collapsible" style={{padding: '0px'}}>
      <div className="collapse-content">
         <div className="collapse-body" style={{fontSize: '16px'}}>
            <h3 className="collapse-description">Brand Info</h3>
            <div className="down-arrow-icon" onClick={this.togglethree} style={{ marginBottom: '1rem' }}></div>
         </div>
      </div>
      <Collapse isOpen={this.state.collapsethree}>
          <Card>
            <CardBody>
      {this.state.productData.brandInfo}
     </CardBody>
          </Card>
        </Collapse>
</div>

<div className="product-seller-name">
   <div className="product-seller-winning-seller">
      <div className="product-arrow-icon">
         <div className="nav-position" style={{width: '10px', height:'10px'}}>
            <div className="nav-icons" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/down-arrow.9b5a45a2.svg)',backgroundSize: 'contain'}}></div>
         </div>
      </div>
      <div className="product-review">
         <div className="product-review-details">
            
                  <div className="product-review-stars">
                     <div className="nav-position" style={{width: '15px', height:'15px'}}>
                        <div className="nav-icons" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/star-stroke.bcd1687c.svg)',backgroundSize: 'contain'}}></div>
                     </div>
                  </div>
                  <div className="product-review-stars">
                     <div className="nav-position" style={{width: '15px', height:'15px'}}>
                        <div className="nav-icons" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/star-stroke.bcd1687c.svg)',backgroundSize: 'contain'}}></div>
                     </div>
                  </div>
                  <div className="product-review-stars">
                     <div className="nav-position" style={{width: '15px', height:'15px'}}>
                        <div className="nav-icons" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/star-stroke.bcd1687c.svg)',backgroundSize: 'contain'}}></div>
                     </div>
                  </div>
                  <div className="product-review-stars">
                     <div className="nav-position" style={{width: '15px', height:'15px'}}>
                        <div className="nav-icons" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/star-stroke.bcd1687c.svg)',backgroundSize: 'contain'}}></div>
                     </div>
                  </div>
                  <div className="product-review-stars">
                     <div className="nav-position" style={{width: '15px', height:'15px'}}>
                        <div className="nav-icons" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/star-stroke.bcd1687c.svg)',backgroundSize: 'contain'}}></div>
                     </div>
                  
            </div>
         </div>
         <div className="product-review-yet">There are no reviews yet</div>
      </div>
   </div>
</div>

 
<div className="product-save-items">
   <div className="product-save-bag-views">
      <div className="save-cart" style={{borderRight: '1px solid rgb(236, 236, 236)'}}>
         <div className="save-cart-products">
            <div className="nav-position" style={{width: '20px', height:'20px'}}>
               <div className="nav-icons" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/download.868b22af.svg)',backgroundSize: 'contain'}}></div>
            </div>
         </div>
         <div 
         className="cart-font" 
         style={{color:'rgb(141, 141, 141)',fontsize:'14px',fontfamily:'semibold'}}>
         Save
         </div>
      </div>
   </div>

   
   <div className="product-save-bag-views">
      <div className="save-cart" style={{backgroundColor: 'rgb(255, 23, 68)'}}>
         <div className="save-cart-products">
            <div className="nav-position" style={{width: '20px', height:'20px'}}>
               <div className="nav-icons" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/order-historyWhite.94d80599.svg)',backgroundSize: 'contain'}}></div>
            </div>
         </div>
         <div className="cart-font"  style={{color:' rgb(255, 255, 255)', fontsize: '14px', fontfamily: 'semibold'}}>Add to bag</div>
      </div>
   </div>
</div>

   </div>
   </div>
   </div>
   </div>
  

);
}
}
export default PDP;
