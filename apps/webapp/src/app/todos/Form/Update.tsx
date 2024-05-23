import { BackLink, Loading, Page } from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';

import { throwError } from 'apps/webapp/src/common/throwError';
import Form from '.';
import { useUpdate } from './hooks/useUpdate';

export default function Update() {
  const { _ } = useI18NContext();

  const {
    todo,
    errorOnLoad,
    isLoading,
    isSubmitting,
    errorOnSubmit,
    submitData,
  } = useUpdate();

  if (errorOnLoad) {
    throwError(errorOnLoad);
  }

  if (errorOnSubmit) {
    throwError(errorOnSubmit);
  }

  return (
    <Page
      title={_('Update Todo')}
      backLink={<BackLink to="/todos" content={_('Back to Home page')} />}
    >
      <div className="relative">
        {isLoading && <Loading />}
        <Form todo={todo} onSubmit={submitData} isSubmitting={isSubmitting} />
      </div>
    </Page>
  );
}
