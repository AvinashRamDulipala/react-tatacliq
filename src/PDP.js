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

document.getElementById("header").style.display = "block";
    navbar.classList.add("sticky")
  } else {
   
    document.getElementById("header").style.display = "none";

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
		 
   <div className="LeFt5T0EqAiCJR4_F2OqM">
      <div className="_12orGphuUBoVhbfARLkElK _3NW0CEkydSg1ZjVWF3KlaZ">
       <div className="_2eKUs3w8JucqGfD1brIBAY" id="navbar">
       <ScrollEvent handleScrollCallback={this.handleScroll} />
            <div className="_2yCr7POXuyM8068-LCMMr6">
               <div className="_3MS696tz4Ii3vM5b6MwBkL" style={{width: '30px', height:'30px'}}>
                  <div className="_2VmboXpEND_dvkTUvRwISU"  onClick={this.goBack} style={{backgroundImage: 'url(https://tmppprd.tataunistore.com/static/media/back-with-bg.3bb6fef7.svg)',backgroundSize: 'contain'}}></div>
               </div>
            </div>
            <div className="_1kPJubxJUMdEfgMjf7jjpp">
               <div className="_3W6G6gu2WNdcxNhDarru1b _3tkKBMFV2PK9zemLylEh-W">
                  <div className="_3MS696tz4Ii3vM5b6MwBkL" style={{width: '30px', height:'30px'}}>
                     <div className="_2VmboXpEND_dvkTUvRwISU" style={{backgroundImage: 'url(https://tmppprd.tataunistore.com/static/media/cart-with-bg.9bdb35e6.svg)',backgroundSize: 'contain'}}></div>
                  </div>
               </div>
               <div className="_3tkKBMFV2PK9zemLylEh-W">
                  <div className="_3MS696tz4Ii3vM5b6MwBkL" style={{width: '30px', height:'30px'}}>
                     <div className="_2VmboXpEND_dvkTUvRwISU" style={{backgroundImage: 'url(https://tmppprd.tataunistore.com/static/media/save-with-bg.2aadebe5.svg)',backgroundSize: 'contain'}}></div>
                  </div>
               </div>

            </div>

         </div>
         <div className="_2OmdJidMBXIMET3TFtgAaL"  id="header" style={{display:'none'}}>
        
   <div className="_3EybeJGuAByuhQxOGSfFeT">{this.state.productData.productName}</div>
   <div className="Se2l2_auJJESKrJiEiZUu">
      <div className="_3MS696tz4Ii3vM5b6MwBkL" style={{width: '20px', height:'20px'}}>
         <div className="_2VmboXpEND_dvkTUvRwISU" onClick={this.goBack} style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/arrowBack.1607a455.svg)',backgroundSize: 'contain'}}></div>
      </div>
   </div>
   <div className="_20L5cJxC0Asf6Oig8XRdHW">
      <div className="FmtLI0rfca2bao8yyGYk6 _1emAkU_WoZFA_EkU6mxO1G">
         <div className="_3MS696tz4Ii3vM5b6MwBkL" style={{width: '20px', height:'20px'}}>
            <div className="_2VmboXpEND_dvkTUvRwISU" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/orderhistorywhite.90cdf30a.svg)',backgroundSize: 'contain'}}></div>
         </div>
      </div>
      <div className="_1emAkU_WoZFA_EkU6mxO1G">
         <div className="_3MS696tz4Ii3vM5b6MwBkL" style={{width: '20px', height:'20px'}}>
            <div className="_2VmboXpEND_dvkTUvRwISU" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/downloadWhite.04850b89.svg)',backgroundSize: 'contain'}}></div>
         </div>
      </div>
   </div>
</div>
      </div> 
        <div >
         <div className="_3Zwp_xfvys_Gl6iCn51uE6">
            <div className="_2mBPcQdlloIsORsSIxDqLa">
               <div className="_1_Sp-CrAsDTGK_v6sbIBE5">
                  <div className="_37-X0Phoi1pUmycE91myJL" style={{transform: 'translateX(0%)'}}>
                     <div className="rGQ3uAODggS05jZA9U0UZ">
                        <div className="_3UUIxSHz02ejoRizQovNW1" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
                           
                           <div className="rnVlQIG2OU_zvETUcW0TW" >
                           <Carousel ref="carousel"   data={productDetails} fixedHeight={true} wrapAround={this.state.wrapAround}>
                           {productDetails}
     
      </Carousel>
								     
							
                        </div>
                     </div>
                     
                    
                  </div>
                  
               </div>
            </div>
        
          
    </div>
             <div className="_1aUdjHZYKnkxjO2n7hIzJh">
               <div className="_1fSef12o5ekrcpTps_nSOA">
                  <div className="_3QxM820UNvRen7hLNf8P1Z">
                     <div className="fMO6mN8qLtqRumW90vzk4">
                        <div >
                           <h2 className="_32j4sBQ3lSbjUreo6IafvZ"><span >{this.state.productData.brandName}</span></h2>
                        </div>
                        <a  href="https://tmppprd.tataunistore.com/mufti-turquoise-navy-cotton-slim-fit-shirt/p-mp000000001702072">
                           <div >
                              <h1 className="_2qfozlUZGLD1nRgcHNLXdP">{this.state.productData.productName}</h1>
                           </div>
                        </a>
                     </div>
                     <div className="w_9jEmcINBVgphWDDl3-k">
                        <div className="_3BuuEa4DZJe-0OCEQmi_K_">
                           
                           <span>{this.state.productData.winningSellerPrice ? this.state.productData.winningSellerPrice.formattedValueNoDecimal : ''}</span>
                        </div>
                        <div className="_1SqU-tZi3_1P_qwOxyduSR _1z3fpAXU-k-tK8WAR8oRqN">
                        {discount > 0 &&
                        <span className="_3Ksu1urMkvjd1amuOOQ1vR">{this.state.productData.mrpPrice ? this.state.productData.mrpPrice.formattedValueNoDecimal : ''}</span> }
                       {discount > 0 &&
                        <span className="_1xOHD8V4wjrIrdaoKrL5uN">({discount}%)</span> }</div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="DTwjEYPNl47yrWJbd5pwy">
               <div className="pEMsKG_z0OfNlRk50nsTv">Cash on Delivery available</div>
            </div>
            {this.state.productData.productOfferMsg &&
            <div className="VBt-UG7GCk323_S3xyG19">
            <div className="_1mSoBq6TvEklcir1384gep">
             {this.state.productData.productOfferMsg ?this.state.productData.productOfferMsg.messageID : ''}
            </div></div>}
            <If condition={rootCategory ==="Clothing"}>
            <Then>
            <div className="_3oRwIJ6pVP1wx9UGNapnwx">
            
               <div className="_2u3JmTCrjM5jdb28QRtuYr">
                  Select Size
                  <div className="_2rtAWiVG4Kd2GuqZMhRBF_">
                     <div className="_334CJHb5qzNgnA_p0FkQYm">
                        Size guide
                        <div className="_3so0JbgPUCDHo8OQrv_L0Y"></div>
                     </div>
                  </div>
               </div>
                
               <div className="_1J51kDwqYIbo3rHfQx42H-">
               
                  <div className="_2wLGY50Rx5iPE8jAer-0q6">


                     <div className="KRLNaKF_JLLAKvXbqTY2a" style={{width: 'auto'}}>
                        <div className="_1bE4X9Z-UjqPQxclaTor2e _3q17wjzhwLXsM5sG9c7u6B">
                           <div className="_1MCuivdU_SXeL3K_iX4oGE" style={{fontSize: '14px'}}>M</div>
                        </div>
                     </div>
                     <div className="KRLNaKF_JLLAKvXbqTY2a" style={{width: 'auto'}}>
                        <div className="_1bE4X9Z-UjqPQxclaTor2e _3q17wjzhwLXsM5sG9c7u6B">
                           <div className="_1MCuivdU_SXeL3K_iX4oGE" style={{fontSize: '14px'}}>L</div>
                        </div>
                     </div>
                     <div className="KRLNaKF_JLLAKvXbqTY2a" style={{width: 'auto'}}>
                        <div className="_1bE4X9Z-UjqPQxclaTor2e _3q17wjzhwLXsM5sG9c7u6B">
                           <div className="_1MCuivdU_SXeL3K_iX4oGE" style={{fontSize: '14px'}}>XL</div>
                        </div>
                     </div>
                     <div className="KRLNaKF_JLLAKvXbqTY2a" style={{width: 'auto'}}>
                        <div className="_1bE4X9Z-UjqPQxclaTor2e _3q17wjzhwLXsM5sG9c7u6B">
                           <div className="_1MCuivdU_SXeL3K_iX4oGE" style={{fontSize: '14px'}}>XXL</div>
                        </div>
                     </div>
                     <div className="KRLNaKF_JLLAKvXbqTY2a" style={{width: 'auto'}}>
                        <div className="_1bE4X9Z-UjqPQxclaTor2e _3q17wjzhwLXsM5sG9c7u6B">
                           <div className="_1MCuivdU_SXeL3K_iX4oGE" style={{fontSize: '14px'}}>3XL</div>
                        </div>
                     </div>
                     <div className="KRLNaKF_JLLAKvXbqTY2a" style={{width: 'auto'}}>
                        <div className="_1bE4X9Z-UjqPQxclaTor2e _3q17wjzhwLXsM5sG9c7u6B">
                           <div className="_1MCuivdU_SXeL3K_iX4oGE" style={{fontSize: '14px'}}>4XL</div>
                        </div>
                     </div>
                     <div className="KRLNaKF_JLLAKvXbqTY2a" style={{width: 'auto'}}>
                        <div className="_1bE4X9Z-UjqPQxclaTor2e _3q17wjzhwLXsM5sG9c7u6B">
                           <div className="_1MCuivdU_SXeL3K_iX4oGE" style={{fontSize: '14px'}}>5XL</div>
                        </div>
                     </div>


                  </div>
                  
               </div>
                
            </div>

            <div className="_3FJjjT1yQ9BuyBLjJuqU7i">
   <div className="nmX5w96CSm0Dg1pHm2F1G" >
      <div className="lqcy0ahDje2aIZSiPuk9K">Colour: <span className="_2wOc5Q2GM26j6j_dUptKl4">{this.state.productData.variantOptions ? this.state.productData.variantOptions[0].colorlink.color : ''}</span></div>
      <div className="_3SWPcSXE66j9utjjh80q0J">
         <div className="_1qE10e_-Xi0nDnsm2Up9iF">
            <div className="_2i-VLoI3FkUkYRmMU5GdL4" style={{transform: 'translateX(0%)'}}>
               <div className="_3sPQWI6cQrtb-_Lzn3UhJQ" style={{width: 'auto'}}>
                  <div className="zAwIgvMZ_qGKhcgO0zbY_">
                     <div className="_3456qVmOuIwADimS0onU4K">

                        <div className="vHnu6kdwioDy2CDbPpPOp" style={{backgroundColor: this.state.productData.variantOptions ? this.state.productData.variantOptions[0].colorlink.colorHexCode : ''}}></div>
                        <div className="_1uFPo5PEx6x-MpnddZh7Uq _36YbovhIrj8b4mLXkrIVSY"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div></div>
   </div>
</div>
</Then>
<ElseIf condition={rootCategory ==="Watches"}>
               <div>
                 
               </div>
            </ElseIf>
            <ElseIf condition={rootCategory ==="Accessories"}>
               <div className="_3FJjjT1yQ9BuyBLjJuqU7i">
   <div className="nmX5w96CSm0Dg1pHm2F1G" >
      <div className="lqcy0ahDje2aIZSiPuk9K">Colour: <span className="_2wOc5Q2GM26j6j_dUptKl4">{this.state.productData.variantOptions ? this.state.productData.variantOptions[0].colorlink.color : ''}</span></div>
      <div className="_3SWPcSXE66j9utjjh80q0J">
         <div className="_1qE10e_-Xi0nDnsm2Up9iF">
            <div className="_2i-VLoI3FkUkYRmMU5GdL4" style={{transform: 'translateX(0%)'}}>
               <div className="_3sPQWI6cQrtb-_Lzn3UhJQ" style={{width: 'auto'}}>
                  <div className="zAwIgvMZ_qGKhcgO0zbY_">
                     <div className="_3456qVmOuIwADimS0onU4K">

                        <div className="vHnu6kdwioDy2CDbPpPOp" style={{backgroundColor: this.state.productData.variantOptions ? this.state.productData.variantOptions[0].colorlink.colorHexCode : ''}}></div>
                        <div className="_1uFPo5PEx6x-MpnddZh7Uq _36YbovhIrj8b4mLXkrIVSY"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div></div>
   </div>
</div>
            </ElseIf>
            <ElseIf condition={rootCategory ==="FashionJewellery"||rootCategory ==="FineJewellery" }>
               <div className="_3oRwIJ6pVP1wx9UGNapnwx">
            
               <div className="_2u3JmTCrjM5jdb28QRtuYr">
                  Select Size
                  <div className="_2rtAWiVG4Kd2GuqZMhRBF_">
                     <div className="_334CJHb5qzNgnA_p0FkQYm">
                        Size guide
                        <div className="_3so0JbgPUCDHo8OQrv_L0Y"></div>
                     </div>
                  </div>
               </div>
                
               <div className="_1J51kDwqYIbo3rHfQx42H-">
   <div className="_2wLGY50Rx5iPE8jAer-0q6">
      <div className="KRLNaKF_JLLAKvXbqTY2a" style={{width: 'auto'}}>
         <div className="_1bhlTE9d7GniOkiRE3zXhJ _3q17wjzhwLXsM5sG9c7u6B">
            <div className="_3S5er6rKz1JBlb8agJfqwx _1MCuivdU_SXeL3K_iX4oGE" style={{fontSize: '14px' ,backgroundColor: this.state.productData.variantOptions ? this.state.productData.variantOptions[0].colorlink.colorHexCode : ''}}>{this.state.productData.variantOptions ? this.state.productData.variantOptions[0].sizelink.size : ''}</div>
         </div>
      </div>
   </div>
</div>
</div>
            </ElseIf>
            <ElseIf condition={rootCategory ==="Footwear"}>
               <div className="_3oRwIJ6pVP1wx9UGNapnwx">
            
               <div className="_2u3JmTCrjM5jdb28QRtuYr">
                  Select Length
                  <div className="_2rtAWiVG4Kd2GuqZMhRBF_">
                     <div className="_334CJHb5qzNgnA_p0FkQYm" >
                        Size guide
                        <div className="_3so0JbgPUCDHo8OQrv_L0Y"></div>
                     </div>
                  </div>
               </div>
                
              <div className="_1J51kDwqYIbo3rHfQx42H-" >
   <div className="_2wLGY50Rx5iPE8jAer-0q6">
   {this.state.productData.variantOptions ? 
   this.state.variantOptions.map(function(post, index){
          return (
      <div className="KRLNaKF_JLLAKvXbqTY2a" style={{width: 'auto'}} key={index+ Math.random()}>
         <div className="_3q17wjzhwLXsM5sG9c7u6B">
            <div className="_1MCuivdU_SXeL3K_iX4oGE" style={{fontSize: '14px'}}>{post.sizelink.size}</div>
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
<div className="_2L5iPUoio569b94o5soZ8x">
   <div className="_2SczkSKkqwS3c-Ltmylg7T">Click to enter pin code &amp; check delivery options</div>
   <div className="_3jXyuah8IIHl4_08nfbstu">
      <div className="_3P2lgIS5icVdsuqlqRSNnU">
         <div className="_334CJHb5qzNgnA_p0FkQYm" style={{color: 'rgb(255, 23, 68)'}}>
            Check Pincode
            <div className="_3so0JbgPUCDHo8OQrv_L0Y" style={{backgroundColor: 'rgb(255, 23, 68)'}}></div>
         </div>
      </div>
   </div>
</div>
<div className="_23-Tgx2nmZHhK2HaO9lyX6">
   <div className="lZdbwCURlFc_iYu03DdMM">
      <div className="ggHbHGzhiPiXrQ7aWf9SC">
         <div className="_3zShOyeGl08Zx3rshQSDBo">
            <div className="_17sxUv6H70YTgmmesYACQ8">
               <div className="_3MS696tz4Ii3vM5b6MwBkL" style={{width: '30px', height:'30px'}}>
                  <div className="_2VmboXpEND_dvkTUvRwISU" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/expressDelivery.1ea024e7.svg)',backgroundSize: 'contain'}}></div>
               </div>
            </div>
            <div className="_2ZvU8WK-DNmSVVwrHE0aQG">Express Delivery </div>
            <div className="_3HjOt_zDGnnoeGp3U8XzLk">{this.state.productData.deliveryModesATP ? this.state.productData.deliveryModesATP[1].value : ''}</div>
         </div>
      </div>
   </div>
   <div className="lZdbwCURlFc_iYu03DdMM">
      <div className="ggHbHGzhiPiXrQ7aWf9SC">
         <div className="_3zShOyeGl08Zx3rshQSDBo">
            <div className="_17sxUv6H70YTgmmesYACQ8">
               <div className="_3MS696tz4Ii3vM5b6MwBkL" style={{width: '30px', height:'30px'}}>
                  <div className="_2VmboXpEND_dvkTUvRwISU" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/homeDelivery.16bfffbf.svg)',backgroundSize: 'contain'}}></div>
               </div>
            </div>
            <div className="_2ZvU8WK-DNmSVVwrHE0aQG">Standard Delivery </div>
            <div className="_3HjOt_zDGnnoeGp3U8XzLk">{this.state.productData.deliveryModesATP ? this.state.productData.deliveryModesATP[0].value : ''}</div>
         </div>
      </div>
   </div>
   <div className="lZdbwCURlFc_iYu03DdMM">
      <div className="ggHbHGzhiPiXrQ7aWf9SC">
         <div className="_3zShOyeGl08Zx3rshQSDBo">
            <div className="_17sxUv6H70YTgmmesYACQ8">
               <div className="_3MS696tz4Ii3vM5b6MwBkL" style={{width: '30px', height:'30px'}}>
                  <div className="_2VmboXpEND_dvkTUvRwISU" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/collect.d4a40190.svg)',backgroundSize: 'contain'}}></div>
               </div>
            </div>
            <div className="_2ZvU8WK-DNmSVVwrHE0aQG">QUiQ PiQ </div>
         </div>
      </div>
   </div>
</div>

<div className="_2jCxm3bYFLbyq1yESu8dQs">
   <div className="_2DzWcMyPc8eVQxOwn_Qg6Y">
      <div className="FPtwZcVh4nIcbWBrpzwEz">Sold by <span className="_140bFniyr6rxSO0IXC1tkO">{this.state.productData.winningSellerName }</span></div>
   </div>
</div>
<div className="_3nEIAVs5PpLHjQeCmVTJ3h">
   <div className="_3D9Wu3JAmX0Im6d-FNTAtz" style={{padding: '0px'}}>
      <div className="_273qboblakntZlD2M6BaZC">
         <div className="_18JVwzy3Gn-PbuFl-XbUre" style={{fontSize: '16px'}}>
            <h3 className="_1JzHDKnDJ2H0HYd3P5-wxc">Product Description</h3>
            <div className="_23ivnsG-BuF1oW3GNvFACh" onClick={this.toggle} style={{ marginBottom: '1rem' }}></div>

         </div>
      </div>

         <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>{this.state.productData.productDescription}</CardBody>
          </Card>
        </Collapse>
      
   </div>
   <div className="_3D9Wu3JAmX0Im6d-FNTAtz" style={{padding: '0px'}}>
      <div className="_273qboblakntZlD2M6BaZC">
         <div className="_18JVwzy3Gn-PbuFl-XbUre" style={{fontSize: '16px'}}>
            <h3 className="_1JzHDKnDJ2H0HYd3P5-wxc">Product Details</h3>
            <div className="_23ivnsG-BuF1oW3GNvFACh" onClick={this.toggleone} style={{ marginBottom: '1rem' }} ></div>
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
   <div className="_3D9Wu3JAmX0Im6d-FNTAtz" style={{padding: '0px'}}>
      <div className="_273qboblakntZlD2M6BaZC">
         <div className="_18JVwzy3Gn-PbuFl-XbUre" style={{fontSize: '16px'}}>
            <h3 className="_1JzHDKnDJ2H0HYd3P5-wxc">Know More</h3>
            <div className="_23ivnsG-BuF1oW3GNvFACh" onClick={this.toggletwo} style={{ marginBottom: '1rem' }}></div>
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
   <div className="_3D9Wu3JAmX0Im6d-FNTAtz" style={{padding: '0px'}}>
      <div className="_273qboblakntZlD2M6BaZC">
         <div className="_18JVwzy3Gn-PbuFl-XbUre" style={{fontSize: '16px'}}>
            <h3 className="_1JzHDKnDJ2H0HYd3P5-wxc">Brand Info</h3>
            <div className="_23ivnsG-BuF1oW3GNvFACh" onClick={this.togglethree} style={{ marginBottom: '1rem' }}></div>
         </div>
      </div>
      <Collapse isOpen={this.state.collapsethree}>
          <Card>
            <CardBody>
      <div >
         <div className="ReactCollapse">
            <div className="_1uikvGKklo-Hu33u2viCrG">
               <div className="_3G2x7Exp27trbIzPhUSHI9">
                  <div className="_28QT6rdx-t5NZUMdoSsqtj">{this.state.productData.brandInfo}</div>
               </div>
            </div>
         </div>
      </div>
  
     </CardBody>
          </Card>
        </Collapse>
</div>

<div className="_2jCxm3bYFLbyq1yESu8dQs">
   <div className="_2DzWcMyPc8eVQxOwn_Qg6Y">
      <div className="_2X0yQ7JeGv89biWm0oahFk">
         <div className="_3MS696tz4Ii3vM5b6MwBkL" style={{width: '10px', height:'10px'}}>
            <div className="_2VmboXpEND_dvkTUvRwISU" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/down-arrow.9b5a45a2.svg)',backgroundSize: 'contain'}}></div>
         </div>
      </div>
      <div className="_1Z_yf0fx8TkPU6OEmmJR8r">
         <div className="_20Z5ZlW3goQC6S-qWQak3Z">
            <div className="tFBdL9aRvNTR30X8yTIQj">
               <div className="RyzFpxs9JBGCfNaJPkFXc">
                  <div className="_11febWfDOUuBydfJBReWdq">
                     <div className="_3MS696tz4Ii3vM5b6MwBkL" style={{width: '15px', height:'15px'}}>
                        <div className="_2VmboXpEND_dvkTUvRwISU" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/star-stroke.bcd1687c.svg)',backgroundSize: 'contain'}}></div>
                     </div>
                  </div>
                  <div className="_11febWfDOUuBydfJBReWdq">
                     <div className="_3MS696tz4Ii3vM5b6MwBkL" style={{width: '15px', height:'15px'}}>
                        <div className="_2VmboXpEND_dvkTUvRwISU" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/star-stroke.bcd1687c.svg)',backgroundSize: 'contain'}}></div>
                     </div>
                  </div>
                  <div className="_11febWfDOUuBydfJBReWdq">
                     <div className="_3MS696tz4Ii3vM5b6MwBkL" style={{width: '15px', height:'15px'}}>
                        <div className="_2VmboXpEND_dvkTUvRwISU" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/star-stroke.bcd1687c.svg)',backgroundSize: 'contain'}}></div>
                     </div>
                  </div>
                  <div className="_11febWfDOUuBydfJBReWdq">
                     <div className="_3MS696tz4Ii3vM5b6MwBkL" style={{width: '15px', height:'15px'}}>
                        <div className="_2VmboXpEND_dvkTUvRwISU" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/star-stroke.bcd1687c.svg)',backgroundSize: 'contain'}}></div>
                     </div>
                  </div>
                  <div className="_11febWfDOUuBydfJBReWdq">
                     <div className="_3MS696tz4Ii3vM5b6MwBkL" style={{width: '15px', height:'15px'}}>
                        <div className="_2VmboXpEND_dvkTUvRwISU" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/star-stroke.bcd1687c.svg)',backgroundSize: 'contain'}}></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="_3Je3BSMc0xcbUvWUgpSgOG">There are no reviews yet</div>
      </div>
   </div>
</div>
<div className="_2jCxm3bYFLbyq1yESu8dQs">
   <div className="_2DzWcMyPc8eVQxOwn_Qg6Y">
      <div className="FPtwZcVh4nIcbWBrpzwEz">Sold by <span className="_140bFniyr6rxSO0IXC1tkO">{this.state.productData.winningSellerName }</span></div>
   </div>
</div>
 
<div className="_3dU2wmr9IRw3X0zrjh5aL-">
   <div className="_1-GmUmGWFlzi_Q0J6iw4L_">
      <div className="FULkmRwxAcuYyQPV3rp8U" style={{borderRight: '1px solid rgb(236, 236, 236)'}}>
         <div className="_1XJnNTtSSyeDh-SuhBX9M9">
            <div className="_3MS696tz4Ii3vM5b6MwBkL" style={{width: '20px', height:'20px'}}>
               <div className="_2VmboXpEND_dvkTUvRwISU" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/download.868b22af.svg)',backgroundSize: 'contain'}}></div>
            </div>
         </div>
         <div 
         className="_1VveNY2Gd-DhAMcKuahqW1" 
         style={{color:'rgb(141, 141, 141)',fontsize:'14px',fontfamily:'semibold'}}>
         Save
         </div>
      </div>
   </div>

   
   <div className="_1-GmUmGWFlzi_Q0J6iw4L_">
      <div className="FULkmRwxAcuYyQPV3rp8U" style={{backgroundColor: 'rgb(255, 23, 68)'}}>
         <div className="_1XJnNTtSSyeDh-SuhBX9M9">
            <div className="_3MS696tz4Ii3vM5b6MwBkL" style={{width: '20px', height:'20px'}}>
               <div className="_2VmboXpEND_dvkTUvRwISU" style={{backgroundImage: 'url(https://pwassets.tatacliq.com/static/media/order-historyWhite.94d80599.svg)',backgroundSize: 'contain'}}></div>
            </div>
         </div>
         <div className="_1VveNY2Gd-DhAMcKuahqW1"  style={{color:' rgb(255, 255, 255)', fontsize: '14px', fontfamily: 'semibold'}}>Add to bag</div>
      </div>
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
