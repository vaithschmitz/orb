import React, {useState} from 'react'
import './Post.css'
import chevronUp from './chevron-up.svg'
import chevronDown from './chevron-down.svg'

export default function Post(props){

    const [isExpanded, setIsExpanded] = useState(false)

    return(
        <div className='Post-container' onClick={() => setIsExpanded(!isExpanded)}>
            <div className='Post-title'>{props.title}<img className='chevron' src={isExpanded ? chevronUp : chevronDown} alt='chevron'></img></div>
            <div className={isExpanded ? 'Post-content' : 'Post-content-hidden'}>{props.content}</div>
            <div className={isExpanded ? 'Post-reference' : 'Post-reference-hidden'}>Reference Number: {props.reference}</div>
        </div>
    )
}