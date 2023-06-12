import PropTypes from 'prop-types';
import { GlobalStyle } from "constants/GlobalStyles";
import { Container } from "./AppStyled";
import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import { FriendList } from "./FriendList";
import { TransactionsHistory } from "./TransactionHistory";
import user from "data/user.json";
import friends from 'data/friends.json'
import transactions from 'data/transactions.json'
import {data} from 'data/data'


export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Profile username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionsHistory transactions={transactions} />
    </Container>
  );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
}