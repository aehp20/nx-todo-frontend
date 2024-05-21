import { BackLink, Error, Page } from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';

import Form from '.';
import { useCreate } from './hooks/useCreate';

export default function Create() {
  const { _ } = useI18NContext();

  const { submitData, isSubmitting, errorOnSubmit } = useCreate();

  if (errorOnSubmit) {
    return <Error error={errorOnSubmit.message} className="m-2" />;
  }

  return (
    <Page
      title={_('Create Todo')}
      backLink={<BackLink to="/todos" content={_('Back to Home page')} />}
    >
      <Form onSubmit={submitData} isSubmitting={isSubmitting} isNew />
    </Page>
  );
}
