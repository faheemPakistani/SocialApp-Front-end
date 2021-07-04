import React from 'react'
import "./online.css"
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Online({user}) {
    return (
        <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
            <img alt="" src={PF + "person/train.jpg"} className="rightbarProfileImg"></img>
            <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
    </li>
    )
}
