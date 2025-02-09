import React from "react";
import { UserTypes } from "./types";

interface UserInfoProps {
  user: UserTypes;
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <ul>
      <h1 className="text-2xl font-bold">User Info</h1>
      <li>Name: {user.name}</li>
      <li>Age: {user.age}</li>
      <li>Email: {user.email}</li>
    </ul>
  );
};

export default UserInfo;
