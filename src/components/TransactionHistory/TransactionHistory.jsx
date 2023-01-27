import PropTypes from 'prop-types';
import {
  Head,
  Line,
  Td,
  TransactionTable,
  Type,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <Head>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </Head>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Line key={id}>
            <Type>{type}</Type>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </Line>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
