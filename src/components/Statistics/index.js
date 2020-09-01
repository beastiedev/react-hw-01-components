import React from 'react';
import PropTypes from 'prop-types';
import StatisticItem from '../StatisticItem';

const Statistics = ({ title, stats }) => {
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>

            <ul className="stat-list">
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
