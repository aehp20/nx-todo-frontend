import { Page } from '@nx-todo-frontend/design-system';
import { useTodos } from '@nx-todo-frontend/query';
import { useMutation, useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';

const useTodos2 = () => {
  // const {
  //   data: todos,
  //   error,
  //   isLoading,
  // } = useQuery({
  //   queryFn: () =>
  //     fetch("http://localhost:3000/api/todo").then(
  //       (res) => res.json()
  //     ),
  //   queryKey: ['key-getTodos'],
  // });
  // return {todos, error, isLoading};
};

export default function List() {
  const { data: todos, error, isLoading } = useTodos();

  const navigate = useNavigate();

  // const mutation = useMutation((id: number) =>
  //   fetch(`http://localhost:3000/api/todo/${id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  // );

  // if (isLoading) return <div>Fetching todos...</div>;
  // if (error) return <div>An error occurred: {error.message}</div>;

  const handleClick = (id: number) => {
    const result = window.confirm('Do you really want to delete this todo?');
    // if (result) {
    //   mutation.mutate(id, {
    //     onSuccess: (data) => {
    //       // ADD A TOAST HERE
    //       navigate("/");
    //     }
    //   });
    // }
  };

  if (isLoading) {
    return <div>Fetching todos...</div>;
  }
  if (error) {
    return <div>An error occurred: {JSON.stringify(error)}</div>;
  }

  return (
    <Page title="Todo">
      {todos.map((todo) => (
        <div key={todo.id} className="flex gap-1">
          <Link to={`/update/${todo.id}`}>
            {todo.name} - {todo.isDone ? 'DONE' : 'TODO'}
          </Link>
          <button onClick={() => handleClick(todo.id)}>Delete</button>
        </div>
      ))}
    </Page>
  );
}
