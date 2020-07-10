//import Loadable from "react-loadable";
import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Header from "./components/Header";
const path = require("path");

//Try Lazy Loading tommorq https://reactjs.org/docs/code-splitting.html

// function MyLoadingComponent({ error }) {
//   if (error) {
//     return <div>Error!</div>;
//   } else {
//     return <div>Loading...</div>;
//   }
// }

// const LoadableHeader = Loadable({
//   loader: () =>
//     import(
//       path.resolve(__dirname, "src") +
//         "/components/Header.js" /* webpackChunkName: "Header" */
//     ),
//   LoadingComponent: MyLoadingComponent,
// });

// class App extends Component {
//   render() {
//     return <LoadableHeader />;
//   }
// }

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
export default hot(module)(App);
// import JSON from "./../db.json";

// //ComPonents Import
// import Header from "./components/Header";
// import NewsList from "./components/Newslist";

// // const name = "React Basics";

// // const user = {
// //   name: "Pallavi",
// //   prof: "Programmer",
// // };

// class App extends Component {
//   state = {
//     news: JSON,
//   };
//   render() {
//     console.log(this.state.news);
//     return (
//       <div>
//         <Header />
//         <NewsLists news={this.state.news} />
//       </div>
//     );
//   }
// }
