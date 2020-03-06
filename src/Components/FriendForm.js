import React, { useState } from "react";
import Header from "../Components/Header";

// class FriendForm extends React.Component {
//     state = {
//         name: "yo"
//     }
//     addFriend = (event) => {
//         // alert('hello')
//         event.preventDefault();
//         console.log(this.state)

//         console.log({ fullName: this.state.name })

//     }

//     handleOnChange = (event) => {
//         console.dir(event.target)
//         this.setState(event.target.value)
//     }

//     render() {

//         // if (this.state) {
//         //   console.log(this.state.name)

//         // }
//         // const value = this.state && this.state.name //guarding against value assignment
//         // console.log(value)

//     }
// }

function FriendForm() {
    const [name, setName] = useState("");
    function addFriend(event) {
        // alert('hello')
        event.preventDefault();
        console.log(name)
        fetch("http://localhost:3001/friend", {
            method: "POST",
            body: name
        }).then(function (response) {
            console.log(response)
        })
        // console.log({ fullName: this.state.name })

    }
    return (
        <>
            {name && (
                <div style={{ padding: 20, backgroundColor: "red" }}>{name}</div>
            )}
            <form>
                <input
                    id="input"
                    placeholder="Name"
                    onChange={event => setName(event.target.value)}
                    value={name}
                />
                {/* add an addition input for email address */}
                {/* add a checkbox for if someone can lead climb */}

                <button onClick={addFriend}>Save</button>
            </form>
        </>
    );
}

export default FriendForm;
