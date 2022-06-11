import React from 'react'

import './sidebar.css'
import SidebarRow from './SidebarRow'

import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'

 

const Sidebar = ()=> {
	return (
		<div className= "sidebar">
			<SidebarRow src = "index.png" title= "bek"/>
			<SidebarRow Icon = {LocalHospitalIcon} title= "COVID-19 information center"/>
			<SidebarRow Icon = {EmojiFlagsIcon} title= "Pages"/>
			<SidebarRow Icon = {PeopleIcon} title= "Friends"/>
			<SidebarRow Icon = {ChatIcon} title= "Messanger"/>
			<SidebarRow Icon = {StorefrontIcon} title= "Marketolaces"/>
			<SidebarRow Icon = {VideoLibraryIcon} title= "Videos"/>
			<SidebarRow Icon = {ExpandMoreOutlined} title= "More"/>
		</div>
	)
}
export default Sidebar;