import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


var ds1 = "Male";
var ds2 = "Female";

class Form extends React.Component{
  render(){
    return(
        <div>
          <div>
            username: <input type="text" name="user" /><br /><br />
          </div>

          <div>
            address: <input type="text" name="addr" /><br /><br />
          </div>

          <div>
            Gender:  
            <select>
              <option>{this.props.attDS1}</option>
              <option>{this.props.attDS2}</option>
            </select>
          </div>
          <br /><br />
          <div>
            <input type="submit" />
          </div>
          
        </div>
    );
  }
};

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>SIGN UP</h1>
        <Form attDS1= {this.props.atttDS1} attDS2= {this.props.atttDS2} />
      </div>
    );
  }
};

ReactDOM.render(<App atttDS1={ds1} atttDS2={ds2} />, document.getElementById('root'));