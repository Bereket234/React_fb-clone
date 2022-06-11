import React from 'react'
import Story from './Story'
import './StoryReel.css'

const StoryReel = ()=> {
	return (
		<div className= 'storyReel'>
			<Story 
				image="./vector.jpg"
				profileSrc= "https://api.flutter.dev/flutter/widgets/Image-class.html"
				title= "bek"
			/>
			<Story 
				image="./vector.jpg"
				profileSrc= "https://api.flutter.dev/flutter/widgets/Image-class.html"
				title= "bek"
			/>
			<Story 
				image="./vector.jpg"
				profileSrc= "https://api.flutter.dev/flutter/widgets/Image-class.html"
				title= "bek"
			/>
		</div>
	)
}
export default StoryReel