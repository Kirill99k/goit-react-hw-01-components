import PropTypes from "prop-types";
import { Friends } from "./FriendListStyled";
import { FriendListItem } from "./FriendListItem";


export const FriendList = ({ friends }) => {
    return (
        <Friends>
        {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendListItem
           key={id}
           avatar={avatar}
           name={name}
           isOnline={isOnline}></FriendListItem>
            ))}
            </Friends>
    )
};


FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number.isRequired
      }))
  }