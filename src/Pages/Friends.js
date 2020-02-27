import React from "react";
import Header from "../Components/Header"
import RoundedLink from "../Components/RoundedLink";

function Friends(props) {
  return (
    <Header title="yo" id="uyytt" style={{position: "relative"}}>
        Friends
        <RoundedLink style= {{position: "absolute", right: 0, bottom: 0}} to="/friends-add">+</RoundedLink>
       
    </Header>
  );
}

export default Friends;
