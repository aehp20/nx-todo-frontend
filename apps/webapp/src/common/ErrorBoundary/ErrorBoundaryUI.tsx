import {
  Button,
  Card,
  ErrorBoundaryUI as ErrorBoundaryUIDesignSystem,
  OpenSelectHandGestureIcon,
  Page,
} from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';

import { useNavigate } from 'react-router-dom';

type ErrorBoundaryProps = {
  error?: Error;
};

export default function ErrorBoundaryUI(props: Readonly<ErrorBoundaryProps>) {
  const { error } = props;

  const { _ } = useI18NContext();

  const navigate = useNavigate();

  return (
    <Page title={_('Error')}>
      <Card>
        <div className="flex flex-col text-center items-center gap-2">
          <div className="font-bold">{_('Whoops, something went wrong.')}</div>
          <div>
            {_('Please either refresh the page or return home to try again.')}
          </div>
          {error instanceof Error && (
            <ErrorBoundaryUIDesignSystem className="my-2" error={error} />
          )}
          <Button
            icon={<OpenSelectHandGestureIcon />}
            onClick={() => {
              navigate('/');
            }}
          >
            {_('Return to home')}
          </Button>
        </div>
      </Card>
    </Page>
  );
}
