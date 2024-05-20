import {
  BackLink,
  Error,
  Loading,
  Page,
  SpinnerIcon,
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
    // Throw an error to be catched by our ErrorBoundary component
    return <Error error={errorOnLoad.message} className="m-2" />;
  }

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
      title={_('Update Todo')}
      backLink={<BackLink to="/todos" content={_('Back to Home page')} />}
    >
      <div className="relative">
        {isLoading && <Loading />}
        <Form todo={todo} onSubmit={submitData} />
      </div>
    </Page>
  );
}
