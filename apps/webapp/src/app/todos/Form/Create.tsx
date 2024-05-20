import {
  BackLink,
  Error,
  Page,
  SpinnerIcon,
} from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';

import Form from '.';
import { useCreate } from './hooks/useCreate';

export default function Create() {
  const { _ } = useI18NContext();

  const { submitData, isSubmitting, errorOnSubmit } = useCreate();

  if (isSubmitting) {
    return (
      <div className="flex justify-center my-2">
        <SpinnerIcon /> {_('Saving...')}
      </div>
    );
  }

  if (errorOnSubmit) {
    return <Error error={errorOnSubmit.message} className="m-2" />;
  }

  return (
    <Page
      title={_('Create Todo')}
      backLink={<BackLink to="/todos" content={_('Back to Home page')} />}
    >
      <Form onSubmit={submitData} isNew />
    </Page>
  );
}
