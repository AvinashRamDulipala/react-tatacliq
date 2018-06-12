import React, { Component } from 'react';
import './App.css';
import {Row,Col} from 'react-bootstrap';
//import PLP  from './PLP';

class Search extends Component {
	 searchOpen() {
     document.getElementById("searchDiv").style.display = "block";
     document.getElementById("homeDiv").style.display = "none";

 }
  searchClose() {
  		document.getElementById("searchDiv").style.display = "none";
     document.getElementById("homeDiv").style.display = "block";
 }	
 render() {
return (
<div>
       <section>
   <div id="homeDiv" >
      <div className="_2BbVWa0BDWyQTZCASn8e-g">
         <div className="_2H6PuybUDcxxbCi5TSCswS">
            <div className="_3kQp_SmZR8CRxkXTMOzTzY _3bjYJ7JDx3fShbxgMOV8Up">
               <div className="_2AZ_4Z841izKOp9wiFDhvs">
                  <div className="_3MS696tz4Ii3vM5b6MwBkL" style={{width: '16px', height:'16px'}}>
                  <div className="_2VmboXpEND_dvkTUvRwISU" style={{backgroundImage: 'url(https://p2.tatacliq.com/static/media/arrowBack.1607a455.svg)',backgroundSize: 'contain'}}>
               </div>
            </div>
         </div>
         <div className="_3sCHM6kLD8umeSiXjoBl4U _3EDRi1uE__ZEDHo22ng4Xc">
            <div className="_3MS696tz4Ii3vM5b6MwBkL" style={{width: '35px', height:'35px'}}>
            <div className="_2VmboXpEND_dvkTUvRwISU" style={{backgroundImage: 'url(https://p2.tatacliq.com/static/media/group.ccb1a969.svg)', backgroundSize: 'contain'}}>
         </div>
      </div>
   </div>
   <div className="_22yhFw8bwvKGcr_ZRYohjG">
      <div className="_3MS696tz4Ii3vM5b6MwBkL" style={{width: '16px', height:'16px'}}>
      <div className="_2VmboXpEND_dvkTUvRwISU" onClick={this.searchOpen} style={{backgroundImage: 'url(https://p2.tatacliq.com/static/media/search.a4309640.svg)', backgroundSize: 'contain'}}>
   </div>
   </div>
   </div>
   <div className="_2Js86rXK14mnf3FiLqHsYz">
      <h1 className="_1uY5iNEcVA5zrN7bdJBN4S">Search results</h1>
   </div>
   </div>
   </div>
   </div>
   </div>
   <div id="searchDiv">
      <div className="_3NW0CEkydSg1ZjVWF3KlaZ">
         <div className="_1IRjiBTmTwIl-Ch86RbGHb">
            <div className="_2BbVWa0BDWyQTZCASn8e-g">
               <div className="_2H6PuybUDcxxbCi5TSCswS">
                  <div className="_3kQp_SmZR8CRxkXTMOzTzY _3bjYJ7JDx3fShbxgMOV8Up">
                     <div className="_22yhFw8bwvKGcr_ZRYohjG">
                        <div className="_3MS696tz4Ii3vM5b6MwBkL"style={{width: '16px', height:'16px'}}>
                        <div className="_2VmboXpEND_dvkTUvRwISU" onClick={this.searchClose} style={{backgroundImage: 'url(https://p2.tatacliq.com/static/media/cancel.fea9f12f.svg)', backgroundSize: 'contain'}}>
                     </div>
                  </div>
               </div>
               <div className="_1LvhPBco7xVNOKdmJiumkP">
                  <div className="afv4MIi5WXKZVND7ana-Y">
                     <div className="_3MS696tz4Ii3vM5b6MwBkL" style={{width: '16px', height:'16px'}}>
                     <div className="_2VmboXpEND_dvkTUvRwISU" style={{backgroundImage: 'url(https://p2.tatacliq.com/static/media/searchwhite.8af840bd.svg)', backgroundSize: 'contain'}}>
                  </div>
               </div>
            </div>
            <div className="_3yuH_eOdVkdvMytHE7skUP">
               <div className="_3u8YVuMWyxlvTfpUskxgWP _2eE3GFJFXoYzYDxLJSiQHk">
                  <div className="_3mea28tfjUv_NmX170tAcH _2eE3GFJFXoYzYDxLJSiQHk">
                     <div className="_26te1Kp4kxwtlBGHe9K-j1 uRnUoWUuRtEeKI0UJ4fVl" style={{height:'30px',borderColor:'rgb(33, 33, 33)', borderBottomWidth: '0px', borderBottomStyle:'solid'}}>
                     <input type="text" onKeyPress={this.onKeyPress} placeholder="What are you looking for?" name="searchtext" value={this.props.search} 
                        onChange={this.inputChange}  className="_2wBdAJ6BFwpXejbzsJBPO0" style={{fontSize:'14px'}} />
                     <button style={{display:'none'}} onClick={this.searchSubmit}>Search</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   </div>
   </div>
   <div className="_1i-ijabO05IBAulSclJ-Qd"></div>
   </div>
   </div>
   </div>
   </section>
   <div className="container" id="container">
   <section>
<div className="_2lv-5paG6l6Tjr0UDiRhSD">
   <div className="_9op4ogkynMw7Ld9FJgchg">43543 Products</div>
   <div className="_1IdtqDj85ND6_T6BOtageq">
      <div className="_3MS696tz4Ii3vM5b6MwBkL" style={{width: '20px', height:'20px'}}>
         <div className="_2VmboXpEND_dvkTUvRwISU" style={{backgroundImage: 'url(https://p2.tatacliq.com/static/media/list.341c3565.svg)', backgroundSize: 'contain'}}></div>
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
</div>
</div>
);
}
}
export default Search;