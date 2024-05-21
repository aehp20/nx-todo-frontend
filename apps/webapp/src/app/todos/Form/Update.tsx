import {
  BackLink,
  Error,
  Loading,
  Page,
} from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';

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
    // TODO
    console.log('errorOnLoad', errorOnLoad);
    // Throw an error to be catched by our ErrorBoundary component
    return <Error error={errorOnLoad.message} className="m-2" />;
  }

  if (errorOnSubmit) {
    // TODO
    console.log('errorOnSubmit', errorOnSubmit);
    // Throw an error to be catched by our ErrorBoundary component
    return <Error error={errorOnSubmit.message} className="m-2" />;
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
