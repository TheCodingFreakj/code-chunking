import React from "react";
import { hot } from "react-hot-loader";
import "./css/index.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="content-wrapper">
          <div className="logo">Logo</div>
          <div>
            <input type="text" />
          </div>
        </div>
      </header>
    );
  }
}

// class Header extends Component {
//   //Implementing the chat functionality
//   state = {
//     title: "Enter your Query Above",
//     keywords: "",
//   };

//   userInputhandler() {
//     console.log("I was clicked");
//   }

//   //Shows what we type in search //use fat arrow function
//   userChangehandler = (event) => {
//     //when the user types change the state

//     this.setState({
//       keywords: event.target.value,
//     });
//   };

//   render() {
//     console.log(this.state.keywords);
//     return (
//       <header>
//         <div className="content-wrapper">
//           <div className="logo" onClick={this.userInputhandler}>
//             Logo
//           </div>
//           <div>
//             <input
//               type="text"
//               className="inputText"
//               onChange={this.userChangehandler}
//             ></input>
//           </div>
//         </div>

//         <div>
//           <h2>{this.state.title}</h2>
//           <p>{this.state.keywords}</p>
//         </div>
//       </header>
//     );
//   }
// }

export default hot(module)(Header);
