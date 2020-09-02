import React from 'react';
import PropTypes from 'prop-types';
import StatisticItem from '../StatisticItem';
import styles from './styles.module.scss';

const Statistics = ({ title, stats }) => {
    return (
        <section className={['widget-cont', styles.statistics].join(' ')}>
            <h2 className={styles.title}>{title}</h2>

            <ul className={styles.statList}>
                {stats.map(
                    (stat) => <StatisticItem key={stat.id} label={stat.label} percentage={stat.percentage} />
                )}
            </ul>
        </section >
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        })
    )
}

export default Statistics;
