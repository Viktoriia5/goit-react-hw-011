import FriendListItem from "./FriendListItem/FriendListItem";
import "../FriendList/FriendList.css";

export default function FriendList({ friends }) {
  return (
    <ul className="friendList-list">
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}

/* <FriendListItem friend={friend.toString()} /> */
