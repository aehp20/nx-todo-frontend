import { Todo } from '@nx-todo-frontend/api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type FormProps = {
  todo?: Todo;
  mutation: any;
  isLoading?: boolean;
  error?: unknown;
};

export default function Form(props: FormProps) {
  const { todo, mutation, isLoading = false, error } = props;

  const navigate = useNavigate();

  const [name, setName] = useState(todo ? todo.name : '');
  const [isDone, setIsDone] = useState(todo ? todo.isDone : false);

  useEffect(() => {
    if (todo) {
      setName(todo.name);
      setIsDone(todo.isDone);
    }
  }, [todo]);

  if (isLoading) return <div>Fetching todo...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  const submitData = () => {
    mutation.mutate(
      { id: todo?.id, name, isDone },
      {
        onSuccess: (data) => {
          console.log('onSuccess data:', data);
          // ADD A TOAST HERE
          navigate('/');
        },
      },
    );
  };

  if (mutation.isLoading) {
    return <span>Submitting...</span>;
  }

  if (mutation.isError) {
    return <span>Error: {mutation.error.message}</span>;
  }

  const handleChange = (event) => {
    setIsDone(event.target.value === 'true');
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      {todo && (
        <select value={isDone ? 'true' : 'false'} onChange={handleChange}>
          <option value="true">Done</option>
          <option value="false">Todo</option>
        </select>
      )}
      <button onClick={submitData}>Submit</button>
    </div>
  );
}
