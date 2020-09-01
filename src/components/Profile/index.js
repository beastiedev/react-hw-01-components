import React from 'react';
import ProfileDescription from '../ProfileDescription';
import ProfileStats from '../ProfileStats';
import styles from './styles.module.scss';

const Profile = ({ name, tag, location, avatar, stats }) => {
    return (
        <div className={styles.profile}>
            <ProfileDescription
                name={name}
                tag={tag}
                location={location}
                avatar={avatar} />
            <ProfileStats
                stats={stats} />
        </div>
    )
}

export default Profile;