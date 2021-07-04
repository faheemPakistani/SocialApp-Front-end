import React from 'react'
import "./topbar.css"
// import {Person, Search} from '@material-ui/icons'
import 'material-icons/iconfont/material-icons.css';
import {Link} from 'react-router-dom'

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">SocialApp</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                   <span className="material-icons searchIcon">search</span>
                    <input placeholder="search anything" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">TimeLine</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                    <span className ="material-icons">person</span>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                    <span className="material-icons">chat</span>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                    <span className="material-icons">notifications</span>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src = "/asstes/person/test.jpg" alt="" className="topbarImg" />
            </div>
        </div>
    )
}
