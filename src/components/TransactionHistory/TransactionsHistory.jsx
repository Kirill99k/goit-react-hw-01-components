import PropTypes from "prop-types";
import { Table } from "./TransactionsStyled";
import { TransactionsItems } from "./TransactionsItems";



export const TransactionsHistory = ({ transactions }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                <TransactionsItems transactions={transactions} />
            </tbody>
        </Table>
    );
};


TransactionsHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape).isRequired,
};