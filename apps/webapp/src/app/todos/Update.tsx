import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

const useTodo = (id: number) => {
  const {
    data: todo,
    error,
    isLoading,
  } = useQuery({
    queryFn: () =>
      fetch(`http://localhost:3000/api/todo/${id}`).then(
        (res) => res.json()
      ),
    queryKey: ['key-getTodos', id],
    enabled: !!id,
  });

  return {todo, error, isLoading};
};


export default function Update() {
  const { id } = useParams();

  const navigate = useNavigate();

  const mutation = useMutation((updateTodo) =>
    fetch(`http://localhost:3000/api/todo/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateTodo)
    })
  );

  const [name, setName] = useState("");
  const [isDone, setIsDone] = useState(false);

  const {todo, error, isLoading} = useTodo(id ? Number.parseInt(id, 10) : 0);

  useEffect(() => {
    if (todo) {
      setName(todo.name);
      setIsDone(todo.isDone);
    }
  }, [todo]);

  if (isLoading) return <div>Fetching todo...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  const submitData = () => {
    mutation.mutate({ name, isDone }, {
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

  const handleChange = (event) => {
    setIsDone(event.target.value === "true");
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <select value={isDone ? "true" : "false"} onChange={handleChange}>
        <option value="true">Done</option>
        <option value="false">Todo</option>
      </select>
      <button onClick={submitData}>Submit</button>
    </div>
  );
}
