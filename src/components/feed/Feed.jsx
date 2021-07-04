import React, { useEffect, useState } from 'react'
import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import {Posts} from "../../dummyData"
import axios from "axios"

export default function Feed() {
    const [posts, setposts] = useState([])
    // const [text, settext] = useState("")
    // useEffect( () => {
    //     const fetchPosts=async ()=>{
    //         const res = await axios.get("posts/timeline/60db4273fcd64d35243ad89e")
    //         console.log(res);
    //         setposts([res.data])
            // console.log(posts)
            
    // console.log(posts)
    //     }
    //     fetchPosts();
    // }, [])
    

    return (
        
        <div className="feed">
            <div className="feedWrapper">
               <Share/> 
               {Posts.map((p) =>{
                   
                return <Post key = {p.id} post={p}/>

               })}
            </div>
        </div>
    )
}
