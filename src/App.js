import React, { Component } from "react";
import { hot } from "react-hot-loader";

import JSON from "./../db.json";

//ComPonents Import
import Header from "./components/Header";
import NewsList from "./components/Newslist";

// const name = "React Basics";

// const user = {
//   name: "Pallavi",
//   prof: "Programmer",
// };

class App extends Component {
  state = {
    news: JSON,
  };
  render() {
    console.log(this.state.news);
    return (
      <div>
        <Header />
        <NewsLists news={this.state.news} />
      </div>
    );
  }
}

export default App;
