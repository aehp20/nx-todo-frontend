import { useCallback, useEffect, useState } from 'react';

import {
  Button,
  Dropdown,
  Input,
  Label,
  Option,
} from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';
import { Todo, TodoCreate } from '@nx-todo-frontend/types';

type FormProps = {
  onSubmit: (todo: TodoCreate) => void;
  todo?: Todo;
};

export default function Form(props: FormProps) {
  const { onSubmit, todo } = props;

  const [name, setName] = useState(todo ? todo.name : '');
  const [isDone, setIsDone] = useState(todo ? todo.isDone : false);

  const { _ } = useI18NContext();

  const options = [
    { label: _('Done'), value: 'true' },
    { label: _('Todo'), value: 'false' },
  ];
  const selectedValue = options.find((item) => item.value === `${isDone}`);

  const handleChange = (option: Option) => {
    if (option) {
      setIsDone(option.value === 'true');
    }
  };

  const handleClick = useCallback(() => {
    onSubmit({ name, isDone });
  }, [onSubmit, name, isDone]);

  useEffect(() => {
    if (todo) {
      setName(todo.name);
      setIsDone(todo.isDone);
    }
  }, [todo]);

  return (
    <div className="flex flex-col gap-4 w-1/2">
      <div className="flex flex-col">
        <Label htmlFor="name">{_('Name')}</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={_('Enter a name')}
        />
      </div>
      <div className="flex flex-col">
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
