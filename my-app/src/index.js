import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Remarkable from 'remarkable';
// //================================ FORM ==============================
// var ds1 = "Male";
// var ds2 = "Female";




// class Form extends React.Component{
//   render(){
//     return(
//         <div>
//           <div>
//             username: <input type="text" name="user" /><br /><br />
//           </div>

//           <div>
//             Gender:  
//             <select>
//               <option>{this.props.attDS1}</option>
//               <option>{this.props.attDS2}</option>
//             </select>
//           </div>
//           <br /><br />
//           <div>
//             <input type="submit" />
//           </div>
          
//         </div>
//     );
//   }
// };


// // ReactDOM.render(<App atttDS1={ds1} atttDS2={ds2} />, document.getElementById('root'));

// //================================ ON?OFF LIGHT ==============================
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     //goi this.setState de thay doi trang thai cua component
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <div onClick={this.handleClick}>
//           <img src={this.state.isToggleOn ? 'https://www.w3schools.com/js/pic_bulbon.gif' : 'https://www.w3schools.com/js/pic_bulboff.gif'} />
//           <button >
//             {this.state.isToggleOn ? 'ON' : 'OFF'}
//           </button>        
//         </div>
        
//       </div>
 
//     );
//   }
// }





// //=============================================

// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>SIGN UP</h1>
//         <Form attDS1= {this.props.atttDS1} attDS2= {this.props.atttDS2} />
//         <br /> <br /> ==================================================
//         <Toggle />
//       </div>
//     );
//   }
// };

// ReactDOM.render(
//   <App atttDS1={ds1} atttDS2={ds2}/>,
//   document.getElementById('root')
// );


//========================================
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
//========================================
// A Simple Component
//========================================
// var teo = "Teo"
// class HelloMessage extends React.Component{
//   render(){
//     return(
//       <div>
//         Hello, {this.props.teo1}
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//   <HelloMessage teo1= {teo}/>,
//   document.getElementById('root')
// );
//========================================
// A Stateful Component
//========================================
// class Timer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { seconds: 0 };
//   }

//   tick() {
//     this.setState(prevState => ({
//       seconds: prevState.seconds + 1
//     }));
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   render() {
//     return (
//       <div>
//         Seconds: {this.state.seconds}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Timer />, document.getElementById('root'));
//========================================
// An Application: ToDo
//========================================
// class TodoApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { items: [], text: '' };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   render() {
//     return (
//       <div>
//         <h3>TODO</h3>
//         <TodoList items={this.state.items} />
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="new-todo">
//             What needs to be done?
//           </label>
//           <input
//             id="new-todo"
//             onChange={this.handleChange}
//             value={this.state.text}
//           />
//           <button>
//             Add #{this.state.items.length + 1}
//           </button>
//         </form>
//       </div>
//     );
//   }

//   handleChange(e) {
//     this.setState({ text: e.target.value });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     if (this.state.text.length == 0) {
//       return;
//     }
//     const newItem = {
//       text: this.state.text,
//       id: Date.now()
//     };
//     this.setState(prevState => ({
//       items: prevState.items.concat(newItem),
//       text: ''
//     }));
//   }
// }

// class TodoList extends React.Component {
//   render() {
//     return (
//       <ul>
//         {this.props.items.map(item => (
//           <li key={item.id}>{item.text}</li>
//         ))}
//       </ul>
//     );
//   }
// }

// ReactDOM.render(<TodoApp />, document.getElementById('root'));
//========================================
// A Component Using External Plugins
//========================================
// class MarkdownEditor extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = { value: 'Hello, **world**!' };
//   }

//   handleChange(e) {
//     this.setState({ value: e.target.value });
//   }

//   getRawMarkup() {
//     const md = new Remarkable();
//     return { __html: md.render(this.state.value) };
//   }

//   render() {
//     return (
//       <div className="MarkdownEditor">
//         <h3>Input</h3>
//         <label htmlFor="markdown-content">
//           Enter text:      <br />
//         </label>
//         <textarea
//           id="markdown-content"
//           onChange={this.handleChange}
//           defaultValue={this.state.value}
//         />
//         <h3>Output</h3>
//         <div
//           className="content"
//           dangerouslySetInnerHTML={this.getRawMarkup()}
//         />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<MarkdownEditor />, document.getElementById('root'));
//========================================
// Tha tim
//========================================
// const stories = [
//   { name: "Didact introduction", url: "http://bit.ly/2pX7HNn" },
//   { name: "Rendering DOM elements ", url: "http://bit.ly/2qCOejH" },
//   { name: "Element creation and JSX", url: "http://bit.ly/2qGbw8S" },
//   { name: "Instances and reconciliation", url: "http://bit.ly/2q4A746" },
//   { name: "Components and state", url: "http://bit.ly/2rE16nh" }
// ];

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Didact Stories</h1>
//         <ul>
//           {this.props.stories.map(story => {
//             return <Story name={story.name} url={story.url} />;
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// class Story extends React.Component {
//   constructor(props) {
//     super(props);
//     //khoi tao 1 bien state: like
//     this.state = { likes: Math.ceil(Math.random() * 100) };
//   }

//   like() {
//     this.setState({
//       likes: this.state.likes + 1
//     });
//   }

//   render() {
//     const { name, url } = this.props;
//     const { likes } = this.state;
//     const likesElement = <span />;
//     return (
//       <li>
//         <button onClick={e => this.like()}>{likes}<b>❤️</b></button>
//         <a href={url}>{name}</a>
//       </li>
//     );
//   }
// }

// ReactDOM.render(<App stories={stories} />, document.getElementById("root"));
//========================================
// Dong Ho Bam Gio
//========================================
// const rootElement = document.getElementById('root');
// // Stopwatch Component
// class Stopwatch extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             timer:0,
//             running:false,
//             time:''
//         }
//     }
//     handelStart= ()=>{
//         const timeNow=Date.now()-this.state.timer;
//         if(this.state.running){
//             clearInterval(this.state.time);
//             this.setState({running:false});
//         }else{
//             this.setState({time:setInterval(()=>{this.setState({timer:Date.now()-timeNow})},0)});
//             this.setState({running:true });
//         }
//     }
//     handelClear= ()=>{
//         this.setState({timer:0, running:false});
//         clearInterval(this.state.time);
//     }
//     render(){
//         return(
//             <div className={"text-center"}>
//                 <label className={" px-4 py-4 text-center"}>{`${this.state.timer} ms`}</label> 
//                 <div className={"px-4 py-4 my-4 w-full text-center"}>
//                     <button onClick={this.handelStart} className={`rounded bg-${this.state.running?'red':'green'} px-4 py-2 mx-2 w-1/3`}>{this.state.running?'Stop':'Start'}</button>
//                     <button onClick={this.handelClear} className={"rounded bg-grey px-4 py-2 mx-2 w-1/3"}>{"Clear"}</button> 
//                 </div>                      
//             </div>
//         )
//     }
// }
// // App Component
// const App = ()=>{
//     return(
//         <div className={"bg-white rounded-lg mx-auto shadow-lg  max-w-sm my-6 px-6 py-4"}>
//             <Stopwatch/>
//         </div>
//     )   
// }

// ReactDOM.render(<App/>, rootElement);
//========================================
// 
//========================================
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data:
      [
        {
          "id": 1,
          "name": "Teo",
          "age": "20"
        },
        {
          "id": 2,
          "name": "Teohiho",
          "age": "21"
        },
        {
          "id": 3,
          "name": "Thu Hien",
          "age": "22"
        }
      ]
    }
  }
  render(){
    return(
      <div>
        <Header />
        <table>
          <tbody>
            {this.state.data.map(person => <TableRow  data = {person} />)}
          </tbody>
        </table>
      </div>
    );
  }
}
class Header extends React.Component{
  render(){
    return(
      <div>
        <h1>It's the Header</h1>
      </div>
    );
  }
}
class TableRow extends React.Component{
  render(){
    return(
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById("root"));