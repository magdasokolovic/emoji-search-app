import React from 'react'
import EmojiItem from './EmojiItem'

export default function EmojiContainer(props) {

    /// props - data you pass from parent to a child component
    return (
            <ul style={{width:"80vw", margin:"0 auto", display:"flex", flexWrap:"wrap"}}>
                {props.emojiData.map((emoji)=>{
                    return (
                        <EmojiItem key={emoji.title} symbol={emoji.symbol}/>
                    )
                })}
            </ul>
    )
}
