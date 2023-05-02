import React from "react";
import profilePic from "../../assets/images/profile.svg";
import { NameDiv, ProfileCont } from "./Profile.styles";

interface ProfileProps {
  name: string;
}

const Profile = (props: ProfileProps) => {
  return (
    <ProfileCont>
      <img src={profilePic} alt="profile-pic"></img>
      <NameDiv>{props.name}</NameDiv>
    </ProfileCont>
  );
};

export default Profile;
