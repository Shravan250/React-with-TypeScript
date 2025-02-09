import React from "react";
import { AdminTypes } from "./types";

interface AdminInfoProps {
  admin: AdminTypes;
}

const AdminInfo: React.FC<AdminInfoProps> = ({ admin }) => {
  return (
    <ul>
      <h1 className="text-2xl font-bold">Admin Info</h1>
      <li>Name: {admin.name}</li>
      <li>Age: {admin.age}</li>
      <li>Email: {admin.email}</li>
      <li>Role: {admin.role}</li>
      <li>Last Login: {admin.lastLogin.toLocaleString()}</li>
      <li>Privileges: {admin.privileges.join(", ")}</li>
    </ul>
  );
};

export default AdminInfo;
