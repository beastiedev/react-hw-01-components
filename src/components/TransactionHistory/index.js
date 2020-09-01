import React from 'react';
import TransactionHistoryItem from '../TransactionHistoryItem';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => <TransactionHistoryItem key={item.id} item={item} />)}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        })
    )
}

export default TransactionHistory;