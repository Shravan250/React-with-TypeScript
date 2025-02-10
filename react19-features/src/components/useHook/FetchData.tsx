import React, { use } from "react";

interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data: Data = await response.json();
  return data;
};

const FetchData = () => {
  const data = use(fetchData());

  return (
    <div>
      {data && (
        <div>
          <h1>{data.title}</h1>
          <p>Completed: {data.completed.toString()}</p>
        </div>
      )}
    </div>
  );
};

export default FetchData;
