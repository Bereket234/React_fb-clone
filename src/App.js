import React from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Wedget from './components/Wedget'


function App (){
	return (
		<div className= 'app'>
		<Header/>
			<div className= "app__body">
				<Sidebar/>
				<Feed/>
				<Wedget/>
			</div>
		</div> 
		
	)
}
export default App;