import PropTypes from "prop-types";

export const TransactionsItems = ({ transactions }) => {
    return transactions.map(({ id, type, amount, currency }) => (
        <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    ));
};


TransactionsItems.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    ),
};