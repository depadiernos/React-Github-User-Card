import React from "react";
import styled from "styled-components";

const Style = styled.div`
  border: 1px black solid;
  border-radius: 10px;
  padding: 2rem;
  & > div {
    display: flex;
    & > img {
      margin-left: 1rem;
      border-radius: 50%;
      height: 150px;
    }
  }
`;

export default function UserCard(props) {
  return (
    <Style>
      {props.user && (
        <div>
          <span>
            <h1>{props.user.name}</h1>
            <p>Username: {props.user.login}</p>
            <p>Location: {props.user.location}</p>
            {props.children}
          </span>
          <img src={props.user.avatar_url} alt="avatar" />
        </div>
      )}
    </Style>
  );
}
