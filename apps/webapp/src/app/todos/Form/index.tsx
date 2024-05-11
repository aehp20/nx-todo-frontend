import { Todo } from '@nx-todo-frontend/api';
import {
  Button,
  Dropdown,
  Input,
  Label,
  Option,
} from '@nx-todo-frontend/design-system';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OnChangeValue } from 'react-select';

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

  const options = [
    { label: 'Done', value: 'true' },
    { label: 'Todo', value: 'false' },
  ];
  const selectedValue = options.find((item) => item.value === `${isDone}`);

  const handleChange = (option: OnChangeValue<Option, false>) => {
    if (option) {
      setIsDone(option.value === 'true');
    }
  };

  return (
    <div className="flex flex-col gap-4 w-1/2">
      <div className="flex flex-col">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a name"
        />
      </div>
      {todo && (
        <div className="flex flex-col">
          <Label>Is Done?</Label>
          <Dropdown
            value={selectedValue}
            options={options}
            onChange={handleChange}
          />
        </div>
      )}
      <Button onClick={submitData}>Submit</Button>
    </div>
  );
}
