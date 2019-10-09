import React from 'react';
import styled from "styled-components";

const Style = styled.div`
  cursor: pointer; 
  img {
    height: 50px;
    margin-right: 1rem;
  }
`

export default function FollowerCard(props){
  return (
  <Style onClick={props.onClick}>
    <img src={props.follower.avatar_url} alt="avatar" />
    {props.follower.login}
  </Style>
  )
}