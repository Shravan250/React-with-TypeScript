import React from "react";
import { UserTypes, AdminTypes } from "./types";
import UserInfo from "./UserInfo";
import AdminInfo from "./AdminInfo";

const Main = () => {
  const User: UserTypes = {
    name: "John Doe",
    age: 30,
    email: "john@gmail.com",
  };
  const Admin: AdminTypes = {
    name: "Admin User",
    age: 45,
    email: "admin@gmail.com",
    role: "admin",
    lastLogin: new Date(),
    privileges: ["edit", "delete"],
  };

  return (
    <div>
      <UserInfo user={User} />
      <AdminInfo admin={Admin} />
    </div>
  );
};

export default Main;
