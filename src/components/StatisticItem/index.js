import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const StatisticItem = ({ label, percentage }) => {
    return (
        <li className={styles.item}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
        </li>
    );
};

StatisticItem.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,
}

export default StatisticItem;