import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

export default function Create() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const mutation = useMutation((newTodo) =>
    fetch('http://localhost:3000/api/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
  );

  const submitData = () => {
    mutation.mutate({ name, isDone: false }, {
      onSuccess: (data) => {
        // ADD A TOAST HERE
        navigate("/");
      }
    });
  };

  if (mutation.isLoading) {
    return <span>Submitting...</span>;
  }

  if (mutation.isError) {
    return <span>Error: {mutation.error.message}</span>;
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <button onClick={submitData}>Submit</button>
    </div>
  );
}
