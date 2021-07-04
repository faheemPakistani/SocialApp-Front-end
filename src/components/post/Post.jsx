import {React, useEffect, useState} from 'react'
import './post.css'
import 'material-icons/iconfont/material-icons.css';
// import {Users} from "../../dummyData"
import axios from 'axios'
import { Users } from '../../dummyData';

export default function Post({post}) {
    // console.log(post);
    
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [like, setlike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setuser] = useState({})
    // console.log(post[0]);

    // useEffect( () => {
    //     const fetchUser=async ()=>{
    //         const res = await axios.get(`users/${post[0].userId}`)
    //         // console.log(res);

    //         setuser(res.data)
    //     }
    //     fetchUser();
    // }, [])

    const likeHandler=()=>{
        setlike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img alt="" className="postProfileImg"src ={Users.profilePicture || PF+"person/noAvatar.png"}></img>
                        <span className="postUsername">{Users.username}</span>
                        <span className="postDate">{Users?.date}</span>
                    </div>
                    <div className="postTopRight">
                        <span className="material-icons">more_vert</span>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{}</span>
                    <img alt="" className="postImg" src={PF + "person/test.jpg"}></img>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/asstes/like.jpg" alt="" onClick={likeHandler}></img>
                        <img className="likeIcon" src="/asstes/heart.jpg" alt="" onClick={likeHandler}></img>
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentsText">{} comments</span>
                    </div>
                </div>
            </div> 
        </div>
    )
}
