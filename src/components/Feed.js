import React from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

const Feed =()=> {
	return (
		<div className= "feed">
			<StoryReel/>
			<MessageSender/>
			<Post
				profilePic= "Untitled.png"
				message= "hry"
				timestamp ="time"
				imgName= "bek"
				username= "bek"/>
			{/*
				postData.map((entry)={
					<Post 
						profilePic= {entry.avatar}
						message= {entry.text}
						timestamp ={entry.timestamp}
						imgName= {entry.imgName}
						username= {entry.user}
				})
			*/}
			
		</div>
	)
}
export default Feed;