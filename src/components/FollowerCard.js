import React from 'react';
import styled from "styled-components";

const Style = styled.div`
  cursor: pointer; 
`

export default function FollowerCard(props){
  return (
  <Style>
    {props.follower.login}
  </Style>
  )
}