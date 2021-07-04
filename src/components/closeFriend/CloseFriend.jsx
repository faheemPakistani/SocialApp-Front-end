import React from 'react'
import "./closeFriend.css"
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function CloseFriend({user}) {
    return (
        <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src={PF + "person/train.jpg"} alt=""></img>
                        <span className="sidebarFriendName">{user.username}</span>
                    </li>
    )
}
