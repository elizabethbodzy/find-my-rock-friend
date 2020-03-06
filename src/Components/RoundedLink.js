import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

// function RoundedLink(props) {
//     console.log(props)
//     return(
//         <Link {...props} />
//     )
// }

const RoundedLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  background: white;
  text-decoration: none;
`;

export default RoundedLink;
