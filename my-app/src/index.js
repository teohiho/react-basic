import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//================================ FORM ==============================
var ds1 = "Male";
var ds2 = "Female";


function Success(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

class Form extends React.Component{
  render(){
    return(
        <div>
          <div>
            username: <input type="text" name="user" /><br /><br />
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


// ReactDOM.render(<App atttDS1={ds1} atttDS2={ds2} />, document.getElementById('root'));

//================================ ON?OFF LIGHT ==============================
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //goi this.setState de thay doi trang thai cua component
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <div onClick={this.handleClick}>
          <img src={this.state.isToggleOn ? 'https://www.w3schools.com/js/pic_bulbon.gif' : 'https://www.w3schools.com/js/pic_bulboff.gif'} />
          <button >
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>        
        </div>
        
      </div>
 
    );
  }
}





//=============================================

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>SIGN UP</h1>
        <Form attDS1= {this.props.atttDS1} attDS2= {this.props.atttDS2} />
        <br /> <br /> ==================================================
        <Toggle />
      </div>
    );
  }
};

ReactDOM.render(
  <App atttDS1={ds1} atttDS2={ds2}/>,
  document.getElementById('root')
);


//========================================


// function UserGreeting(props) {
//   return <h1>Welcome User!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn2 = props.isLoggedIn;
//   if (isLoggedIn2 == 'user') {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// ReactDOM.render(
//   // Try changing to isLoggedIn={true}:
//   <Greeting isLoggedIn={'user'} />,
//   document.getElementById('root')
// );