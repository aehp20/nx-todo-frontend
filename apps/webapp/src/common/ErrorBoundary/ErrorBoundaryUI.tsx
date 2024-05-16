import {
  Button,
  Card,
  OpenSelectHandGestureIcon,
  Page,
} from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';

import { useNavigate } from 'react-router-dom';

export default function ErrorBoundaryUI() {
  const { _ } = useI18NContext();

  const navigate = useNavigate();

  return (
    <Page title={_('Error')}>
      <Card>
        <div className="flex flex-col text-center gap-2">
          <div className="font-bold">{_('Whoops, something went wrong.')}</div>
          <div>
            {_('Please either refresh the page or return home to try again.')}
          </div>
          <div>
            <Button
              icon={<OpenSelectHandGestureIcon />}
              onClick={() => {
                navigate('/');
              }}
            >
              {_('Return to home')}
            </Button>
          </div>
        </div>
      </Card>
    </Page>
  );
}
