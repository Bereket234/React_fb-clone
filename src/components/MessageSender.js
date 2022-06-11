import React,{useState} from 'react'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import './MessageSender.css'
import {Avatar} from '@material-ui/core'

const MessageSender= ()=>{
	const [input,setInput]= useState('')
	const [image,setImage]= useState(null)
	
	const handleChange=(e)=>{
		if(e.target.files(0)){
		setImage(e.target.files(0))
		}
	}
	const handleSubmit=()=>{
		console.log("submitted")
	}
	return (
		<div className= "messageSender">
			<div className="messageSender__top">
				<Avatar src=""/>
				<form>
					<input
						type= "text"
						placeholder= "whats in ur mind"
						className= "messageSender__input"
						value= {input}
						onChange= {(e)=> {setInput(e.target.value)}}/>
					<input
						type= "file"
						className="messageSender__fileSelect"
						onChange= {handleChange}/>
					<button 
						onClick={handleSubmit} type= "Submit">submit</button>
				</form>
			</div>
			<div className= "messageSender__bottom">
				<div className= "messageSender__option">
					<VideocamIcon style= {{color:'red'}}/>
					<h3>Live video</h3>
				</div>
				<div className= "messageSender__option">
					<PhotoLibraryIcon style= {{color:'green'}}/>
					<h3>Photo/Video</h3>
				</div>
				<div className= "messageSender__option">
					<InsertEmoticonIcon style= {{color:'red'}}/>
					<h3>Feeling/Activity</h3>
				</div>
				
			</div>
			
		</div>
	)
}
export default MessageSender;