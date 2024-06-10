import { Page, Title } from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';

export default function Home() {
  const { _ } = useI18NContext();

  const title = _('Home');

  return (
    <Page
      title={title}
      headerContent={<Title>{title}</Title>}
      mainClassName="flex flex-col gap-4"
    >
      <section>
        {_(
          'Welcome to our Todo List application using React! React, a JavaScript library developed by Facebook, is widely recognized for its efficiency and flexibility when it comes to building interactive user interfaces. In this application, we use essential React concepts, including components, state management, props, event handling, and styling.',
        )}
      </section>
      <section className="flex flex-col gap-2">
        <dl>
          <dt className="font-bold">
            {_('The importance of a Todo List application')}
          </dt>
          <dd>
            {_(
              'A Todo List app serves as an ideal project to grasp the fundamentals of a new programming language or framework quickly. It provides a practical context for learning essential concepts while working towards a tangible outcome.',
            )}
          </dd>
        </dl>
      </section>
      <section className="flex flex-col gap-2">
        <dl>
          <dt className="font-bold">{_('The objective')}</dt>
          <dd>
            {_(
              'The goal is to create a simple Todo List application with features.',
            )}
          </dd>
        </dl>
      </section>
      <section>
        <dl>
          <dt className="font-bold">{_("Here's what we'll be aiming for:")}</dt>
          <dd>
            -{' '}
            {_('Adding New Todos: Enable users to add new tasks to the list.')}
          </dd>
          <dd>
            -{' '}
            {_(
              'Editing and Deleting Todos: Provide functionality to modify or remove existing tasks.',
            )}
          </dd>
          <dd>
            -{' '}
            {_(
              'Marking Todos as Completed: Allow users to indicate when tasks are finished.',
            )}
          </dd>
        </dl>
      </section>
    </Page>
  );
}
