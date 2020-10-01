import React from 'react';
import s from './Post.module.css'

const Post = (props) => {


    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src='https://yt3.ggpht.com/a/AATXAJysXCddqJe0OjTESEJeSnocTeujGRelYH2210MpQA=s900-c-k-c0xffffffff-no-rj-mo'></img>
                    { props.message }
                </div>
            <div>
                <span>like: {props.likesCount}</span>
            </div>
        </div>
        )
}

export default Post;