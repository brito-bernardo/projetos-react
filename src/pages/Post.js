import React, { useState } from 'react';
import '../styles/Post.css'
import CommentBox from '../components/Commentbox'
import '../styles/Commentbox.css'
import { Postlist } from "../helpers/Postlist"
import PostItem from '../components/PostItem';


function Post() {

  return (
    <div className='post'> 
      <h1 className='postTitle'>HABILIDADES QUE ASPIRO</h1>
      <div className='postList'>{Postlist.map((postItem, key)=>{
        return <PostItem key={key} name={postItem.name} text={postItem.text} image={postItem.image}/>;
      }
      
      )}</div>
      <div className='commentbox'>
        <CommentBox/>
      </div>
      
    </div>
    
  );
}
export default Post;
