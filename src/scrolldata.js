import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class PLP extends Component {
     constructor(props) {
            super(props);
            this.state = {value: [], count: 1}; //initial you'll have one form
          }

          addMore(){
            this.setState({count: this.state.count+1})//on click add more forms
          }

          displayForm(){
             let forms = [];
             for(let i = 0; i < this.state.count; i++){
                       forms.push(
                       <div key={i}>
                           <EducationDetails value={this.state.value[i] || ''} />
                       </div>
                    )
             }
             return forms || null;
          }

          render() {
            return (
              <form >
                  {this.displayForm()}        
                  <input type='button' value='add more' onClick={this.addMore.bind(this)}/>
              </form>
            );
          }
        }
 class EducationDetails extends React.Component {
      constructor(props) {
        super(props);
      }

      render() {
        return (<div>
             <p>FirstName: <input type="text" value={this.props.value || ''} /></p>
               <p>LastName:  <input type="text" value={this.props.value || ''} /></p>
              </div>
        );
      }
    }