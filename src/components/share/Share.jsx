import React from 'react'
import 'material-icons/iconfont/material-icons.css';

import"./share.css"
export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img  alt="" className="shareProfileImg" src="/asstes/person/test.jpg"></img>
                    <input placeholder="what's in your mind" className="shareInput"></input>
                </div>
                <hr className="shareHr"></hr>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <span style={{color:"tomato"}} className="material-icons shareIcon">perm_media</span>
                            <span className="shareOptionText">Photo or video</span>
                        </div>
                        <div className="shareOption">
                            <span style={{color:"blue"}} className="material-icons shareIcon">label</span>
                            <span className="shareOptionText">Photo or video</span>
                        </div>
                        <div className="shareOption">
                            <span style={{color:"green"}} className="material-icons shareIcon">room</span>
                            <span className="shareOptionText">Photo or video</span>
                        </div>
                        <div className="shareOption">
                            <span style={{color:"goldenrod"}} className="material-icons shareIcon">emoji_emotions</span>
                            <span className="shareOptionText">Photo or video</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
