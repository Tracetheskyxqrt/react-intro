import React from 'react'
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return (
            <Preloader/>
        )
    }

    return (
        <div>
            <div className={styles.content}>
                {/*<img src='https://sun9-41.userapi.com/c639425/v639425184/dbe3/syccxyj07W4.jpg'></img>*/}
                <div className={styles.descriptionBlock}>
                    <div>
                        <img src={profile.photos.large}/>
                    </div>
                    <ProfileStatus status={status}
                                   updateStatus={updateStatus}/>
                    <div className={styles.description}>
                        <span>{profile.aboutMe}</span>
                        <div>
                            Contacts:
                        </div>
                        <div>
                            <img src='https://github.githubassets.com/favicons/favicon.svg'/>
                            {profile.contacts.github}
                        </div>
                        <div>
                            <img src='https://yoga-in.ru/bl-content/uploads/pages/6dfaad2d69cd98f4250de4013f5c15f4/VK.com_100px.png'/>
                            {profile.contacts.vk}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;