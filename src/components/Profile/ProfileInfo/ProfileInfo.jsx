import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader/>
        )
    }

    return (
        <div>
            <div className={s.content}>
                <img src='https://sun9-41.userapi.com/c639425/v639425184/dbe3/syccxyj07W4.jpg'></img>
                <div className={s.descriptionBlock}>
                    <div>
                        <img src={props.profile.photos.large}/>
                    </div>
                    ava + description
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;