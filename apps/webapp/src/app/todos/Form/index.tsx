import {
  Button,
  Dropdown,
  Input,
  Label,
  Option,
  Title,
} from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';
import { Todo } from '@nx-todo-frontend/models';

import { useCallback, useEffect, useState } from 'react';

import { Summary } from './components/Summary';

type FormProps = {
  onSubmit: (todo: Todo) => void;
  todo?: Todo;
  isNew?: boolean;
};

export default function Form(props: FormProps) {
  const { onSubmit, todo, isNew } = props;

  const [name, setName] = useState(todo ? todo.name : '');
  const [isDone, setIsDone] = useState(todo ? todo.isDone : undefined);

  const { _ } = useI18NContext();

  const options = [
    { label: _('Done'), value: 'true' },
    { label: _('To do'), value: 'false' },
  ];
  const selectedValue = options.find((item) => item.value === `${isDone}`);

  const handleChange = (option: Option) => {
    if (option) {
      setIsDone(option.value === 'true');
    }
  };

  const handleClick = useCallback(() => {
    onSubmit(new Todo({ name, isDone }));
  }, [onSubmit, name, isDone]);

  useEffect(() => {
    if (todo) {
      setName(todo.name);
      setIsDone(todo.isDone);
    }
  }, [todo]);

  return (
    <div className="flex flex-col gap-4 w-full">
      <Title>{_('Todo')}</Title>
      {!isNew && (
        <div className="flex w-full md:w-1/2">
          <Summary todo={todo} />
        </div>
      )}
      <div className="flex flex-col w-full md:w-1/2">
        <Label htmlFor="name">{_('Name')}</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={_('Enter a name')}
          autoFocus
        />
      </div>
      <div className="flex flex-col w-full md:w-1/2">
        <Label htmlFor="isDone">{_('Is Done?')}</Label>
        <Dropdown
          inputId="isDone"
          value={selectedValue}
          options={options}
          onChange={handleChange}
          placeholder={_('Select an element')}
        />
      </div>
      <div>
        <Button onClick={handleClick}>{_('Save')}</Button>
      </div>
    </div>
  );
}
