import PropTypes from "prop-types";
import { Avatar, FriendItem, Offline, Online, UserName } from "./FriendListStyled";



export const FriendListItem = ({ avatar, name, isOnline  }) => {
	return (
		<FriendItem>
			{isOnline ? <Online /> : <Offline />}
			<Avatar src={avatar} alt="User avatar" width="48" />
			<UserName>{name}</UserName>
		</FriendItem>
	);
};


FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,  
};
