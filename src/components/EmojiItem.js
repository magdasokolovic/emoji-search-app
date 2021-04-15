import React from 'react'

export default function EmojiItem(props) {
    return (
        <li style={{listStyleType:"none", width: "200px", height:"200px", textAlign:"center", lineHeight:"200px", fontSize:"50px", backgroundColor:"white", boxShadow:"3px 3px 5px gray", borderRadius:"20px", margin:"1rem"}} key={props.symbol}>
            {props.symbol}
        </li>
    )
}
