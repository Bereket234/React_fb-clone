import React from 'react'
import {Avatar} from '@material-ui/core'
import './Story.css'

const Story = ({image, profileSrc, title})=> {
	return (
		<div style= {{background:"url({image})"}} className= 'story' >
			<Avatar src={require(`${image}`)} className="story__avatar"/>
			<h4>{title}</h4>
			
		</div>
	)
}
export default Story