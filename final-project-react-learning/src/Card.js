import React from "react";
import Body from "./Body";
import Header from "./Header";

function Card(props) {
  const { profileImg, username, comment } = props.commentObject;
  // I destructred above because I didn't want to have to write props.commentObject.key every time. I learned you can destructure 2 items deep like this!
  return (
    <div>
      <Header profileImg={profileImg} username={username} />
      <Body comment={comment} />
    </div>
  );
}
export default Card;
