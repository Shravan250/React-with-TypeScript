import React, { FormEvent, useRef, useState } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
  //   handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form = () => {
  const [submittedData, setSubmittedData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLFormElement>(null);
  const email = useRef<HTMLFormElement>(null);
  const password = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: FormData = {
      name: name.current!.value,
      email: email.current!.value,
      password: password.current!.value,
    };

    setSubmittedData(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" ref={name} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" ref={email} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" ref={password} />

        <button type="submit">Submit</button>
      </form>

      <section>
        <h2>Submitted Data:</h2>
        <p>Name: {submittedData.name}</p>
        <p>Email: {submittedData.email}</p>
        <p>Password: {submittedData.password}</p>
      </section>
    </div>
  );
};

export default Form;
