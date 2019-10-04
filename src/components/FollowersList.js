import React from "react";
import styled from "styled-components";

const Style = styled.details`
  *:focus{
    outline: none;
  }
`

export default function FollowersList(props) {
    return (
      <Style>
        <summary>Followers List</summary>
       {props.children}
      </Style>
    );
  
}

