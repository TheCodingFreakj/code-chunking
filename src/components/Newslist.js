import React from "react";

//Component IMport

//import indvItem from "./IndvItem";

//Functional component

const NewsList = (props) => {
  //Loop through the props

  const newsItems = props.news.map((item) => {
    return (
      <div>
        <h3>{item.title}</h3>
        <div>{item.feed}</div>
      </div>
    );
  });
  //display what's looped
  return <div>{newsItems}</div>;
};

//export default NewsList;
