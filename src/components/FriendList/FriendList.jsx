import PropTypes from "prop-types";
import { Friends } from "./FriendListStyled";
import { FriendListItem } from "./FriendListItem";


export const FriendList = ({ friends }) => {
    return (
        <Friends>
            <FriendListItem friends={friends} />
        </Friends>
    )
};


FriendListItem.propTypes = {
    friends: PropTypes.string.isRequired,
};