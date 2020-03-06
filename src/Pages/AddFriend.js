import React from "react";
import Header from "../Components/Header";
import FriendForm from "../Components/FriendForm"

function AddFriend() {
  return (
    <>
      <Header>
        Add Friend
        </Header>

      <FriendForm />
    </>
  )
}


// function AddFriend(props) {
//   function addFriend(event) {
//     console.log(event);
//     event.preventDefault();


//     var input = document.getElementById("input")
//     console.dir(input.value)

//   }





// }

export default AddFriend;
