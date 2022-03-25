import { Link } from "react-router-dom";
import styled from "styled-components";

export const Pokediv = styled.div`
padding: 8px;
margin: 10px 10px 10px 0px;
border: solid black 2px;
background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 48%, rgba(0,0,0,1) 50%, rgba(255,0,0,1) 52%);
display: flex;
flex-direction:column;
height:15em;
justify-content: space-between;
align-items: center;
flex-grow: 4;

`

export const RenderDiv = styled.div`
display: flex;
flex-wrap: wrap;
`

export const styledLink = styled(Link)`
textdecoration: none;

`