import React from 'react';
import PropTypes from 'prop-types';

const TransactionHistoryItem = ({ item }) => {
    return (
        <tr>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
        </tr>
    );
};

TransactionHistoryItem.propTypes = {
    item: PropTypes.shape({
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
    })
}

export default TransactionHistoryItem;