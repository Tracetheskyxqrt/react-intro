import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

const Profile = () => {
    return <div className={s.content}>
        <img src='https://i.ytimg.com/vi/fnT5WyvD5Us/maxresdefault.jpg'></img>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
}

export default Profile;