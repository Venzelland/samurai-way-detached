import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div className={s.content}>
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt=""/>
        <div className={s.profileInfo}>
            ava + description
        </div>
    </div>
}

export default ProfileInfo