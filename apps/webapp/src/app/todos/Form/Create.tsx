import { BackLink, Page } from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';

import { throwError } from 'apps/webapp/src/common/throwError';
import Form from '.';
import { useCreate } from './hooks/useCreate';

export default function Create() {
  const { _ } = useI18NContext();

  const { submitData, isSubmitting, errorOnSubmit } = useCreate();

  if (errorOnSubmit) {
    throwError(errorOnSubmit);
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
