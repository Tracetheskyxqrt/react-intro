import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.content}>
                <img src='https://i.ytimg.com/vi/fnT5WyvD5Us/maxresdefault.jpg'></img>
                <div className={s.descriptionBlock}>
                    ava + description
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;