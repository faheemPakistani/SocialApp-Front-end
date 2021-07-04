import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img alt=""
            className="birthdayImg"
            src="data:image/jpeg;base64,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"
          ></img>
          <span className="birthdayText">
            <b>Faheem</b> and <b>3 other friends</b> have birthday
          </span>
        </div>
        <img alt=""
          src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/images/media/images/persuasive-ads-coca-cola.jpg"
          className="rightbarAd"
        />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => {
            return <Online key={u.id} user={u} />;
          })}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Lahore</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Shorkot</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4>User friends</h4>
        <div className="rightbarFollowings">
        <div className="rightbarFollowing">
            <img
              src="/asstes/person/test.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Faheem</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/asstes/person/test.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Faheem</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/asstes/person/test.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Faheem</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/asstes/person/test.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Faheem</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/asstes/person/test.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Faheem</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/asstes/person/test.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Faheem</span>
          </div>
        </div>
        <img alt=""
          src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/images/media/images/persuasive-ads-coca-cola.jpg"
          className="rightbarAd"
        />
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar />: <HomeRightbar/>}
      </div>
    </div>
  );
}
