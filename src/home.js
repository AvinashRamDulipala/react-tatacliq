import React, { Component } from 'react';
import './App.css';
import {Grid,Row,Col} from 'react-bootstrap';

class App extends Component {
	constructor(props) {
    super(props);


    this.state = {
      searchText : "",
      searchData : {}
    };

    this.inputChange = this.inputChange.bind(this);
    this.searchSubmit = this.searchSubmit.bind(this);
  }  

  inputChange(e) {
    this.setState({searchText : e.target.value});
  }

  searchSubmit(event) {
    var products = [];
    //alert('A name was submitted: ' + this.state.searchText);
    fetch('https://p2.tatacliq.com/marketplacewebservices/v2/mpl/products/searchProducts/?searchText='+this.state.searchText+'&isTextSearch=false&isFilter=false&page=0&isPwa=true&pageSize=20&typeID=all').then(function (response) {
       return response.json();
      }).then(function (result) {
        products = result.searchresult;
        console.log(result);

      });

      this.setState({searchData : products});
  }




  searchOpen() {
     document.getElementById("open-show").style.display = "block";
      document.getElementById("open-show").style.position = "absolute";
      document.getElementById("open-show").style.right = "-2px";
 }
 
  searchClose() {
     document.getElementById("open-show").style.display = "none";
 }	
  render() {

  	
    return (
    	<div id="body" style={{marginTop:'60px'}}>
	    <Grid>
          <Row className="show-grid mar-t-20 bg-search">
            <Col xs={12}>
             <div style={{height: '50%'}}>
              <div className="search-hide">
               <div style={{float: 'left', width: 'auto', height: 'auto',position: 'absolute', left: '0px'}}>
                <div className="white"><i className="fa fa-arrow-left"></i></div>
               </div>
               <div style={{float: 'left',backgroundSize:'contain'}}>
                <div className="text-mar"><img alt="LOGO" src="https://p2.tatacliq.com/static/media/group.ccb1a969.svg" /></div>
               </div>
                <div style={{float: 'left',backgroundSize:'contain',color:'#fff'}}>
                <div style={{    marginLeft:'50px'}}>Search Results</div>
               </div>
               <div style={{float: 'right'}}>
                <div className="search-click white" onClick={this.searchOpen}><i className="fa fa-search"></i> </div>
               </div>
              </div>
              <div id="open-show" className="searchBox" style={{display: 'none'}}>
                  
                    <i className="fa fa-close"></i>
                  
                  
                   <input  />
                  
                   <i className="fa fa-close" style={{fontSize: '20px'}}></i>
                  
              </div>
             </div>
            </Col> 
            
            </Row>
           </Grid>
  		
  		</div>
  		
    );
  }
}

export default App;
