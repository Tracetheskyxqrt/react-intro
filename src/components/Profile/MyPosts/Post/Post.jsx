import React from 'react';
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src='https://yt3.ggpht.com/a/AATXAJysXCddqJe0OjTESEJeSnocTeujGRelYH2210MpQA=s900-c-k-c0xffffffff-no-rj-mo'></img>
                    post 1
                </div>
            <div>
                <span>like</span>
            </div>
        </div>
        )
}

export default Post;