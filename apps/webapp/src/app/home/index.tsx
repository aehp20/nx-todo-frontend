import { Page } from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';

export default function Home() {
  const { _ } = useI18NContext();

  return (
    <Page title={_('Home')}>
      <div className="flex flex-col gap-4">
        <div>
          {_(
            'Welcome to our Todo List application using React! React, a JavaScript library developed by Facebook, is widely recognized for its efficiency and flexibility when it comes to building interactive user interfaces. In this application, we use essential React concepts, including components, state management, props, event handling, and styling.',
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold">
            {_('The importance of a Todo List application')}
          </div>
          <div>
            {_(
              'A Todo List app serves as an ideal project to grasp the fundamentals of a new programming language or framework quickly. It provides a practical context for learning essential concepts while working towards a tangible outcome.',
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold">{_('The objective')}</div>
          <div>
            {_(
              'The goal is to create a simple Todo List application with features.',
            )}
          </div>
          <div>{_("Here's what we'll be aiming for:")}</div>
          <div>
            -{' '}
            {_('Adding New Todos: Enable users to add new tasks to the list.')}
          </div>
          <div>
            -{' '}
            {_(
              'Editing and Deleting Todos: Provide functionality to modify or remove existing tasks.',
            )}
          </div>
          <div>
            -{' '}
            {_(
              'Marking Todos as Completed: Allow users to indicate when tasks are finished.',
            )}
          </div>
        </div>
      </div>
    </Page>
  );
}
