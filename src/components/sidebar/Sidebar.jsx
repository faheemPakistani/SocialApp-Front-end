import React from 'react'
import "./sidebar.css"
import 'material-icons/iconfont/material-icons.css';
import CloseFriend from '../closeFriend/CloseFriend';
import {Users} from "../../dummyData"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <span className="material-icons sidebarFeed">rss_feed</span>
                    <span className="sidebarListITemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                    <span className="material-icons sidebarChats">chat</span>
                    <span className="sidebarListITemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                    <span className="material-icons sidebarVideo">video_library</span>
                    <span className="sidebarListITemText">Video</span>
                    </li>
                    <li className="sidebarListItem">
                    <span className="material-icons sidebarGroups">group</span>
                    <span className="sidebarListITemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                    <span className="material-icons sidebarBookmarks">bookmark</span>
                    <span className="sidebarListITemText">Bookmarks</span>
                    </li> 
                    <li className="sidebarListItem">
                    <span className="material-icons-round sidebarQuestions">question_answer</span>
                    <span className="sidebarListITemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                    <span className="material-icons-round sidebarJobs">work</span>
                    <span className="sidebarListITemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                    <span className="material-icons sidebarEvent">event</span>
                    <span className="sidebarListITemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                    <span className="material-icons sidebarCourses">school</span>
                    <span className="sidebarListITemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show more</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    {Users.map(u=>{
                        return <CloseFriend key={u.id} user={u}/>
                    })}
                </ul>
            </div>
        </div>
    )
}
