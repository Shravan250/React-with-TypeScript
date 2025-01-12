import React from "react";
import styles from "./Button.module.css";

interface Props {
  value: string;
  onButtonClick: () => void;
}

const Button: React.FC<Props> = (props) => {
  const buttonClasses = `
    ${styles.root}
    ${props.value === "X" && styles.cross}
    ${props.value === "O" && styles.circle}
  `;

  return (
    <>
      <button onClick={props.onButtonClick} className={buttonClasses}>
        {props.value}
      </button>
    </>
  );
};

export default Button;
