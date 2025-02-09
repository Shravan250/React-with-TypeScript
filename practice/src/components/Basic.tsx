import React, { ReactNode } from "react";

// type Props = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

// interface Props {
//   name: string;
//   age: number;
//   isStudent: boolean;
// }

// const Basic: React.FC<Props> = ({ name, age, isStudent }) => {
//   return (
//     <div>
//       <p>{name}</p>
//       <p>{age}</p>
//       <p>{isStudent}</p>
//     </div>
//   );
// };

interface UserShape {
  children: ReactNode;
}

const Basic = ({ children }: UserShape) => {
  return <div>{children}</div>;
};

export default Basic;
