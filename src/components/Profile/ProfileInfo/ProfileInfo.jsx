import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.content}>
                <img src='https://sun9-41.userapi.com/c639425/v639425184/dbe3/syccxyj07W4.jpg'></img>
                <div className={s.descriptionBlock}>
                    ava + description
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;