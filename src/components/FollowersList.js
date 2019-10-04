import React from "react";
import styled from "styled-components";

export default function FollowersList(props) {
    return (
      <details>
        <summary>Followers List</summary>
       {props.children}
      </details>
    );
  
}

