import "./FriendListItem.css";
export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <>
      <div className="friendList-item">
        <img src={avatar} alt="Avatar" width="48" />
        <p className="friendList-item_name">{name}</p>
        <p className={isOnline ? "online" : "offline"}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </>
  );
}
