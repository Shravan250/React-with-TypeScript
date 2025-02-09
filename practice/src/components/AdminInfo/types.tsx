type UserTypes = {
  name: string;
  age: number;
  email: string;
};

type AdminTypes = UserTypes & {
  role: string;
  lastLogin: Date;
  privileges: string[];
};

export { type UserTypes, type AdminTypes };
