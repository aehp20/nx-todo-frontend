import { Card, Page, Title } from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';

import { Link } from 'react-router-dom';

export default function NoMatch() {
  const { _ } = useI18NContext();

  const title = _('Page does not exist');

  return (
    <Page title={title} headerContent={<Title>{title}</Title>}>
      <Card>
        <div className="flex flex-col text-center gap-2">
          <div className="font-bold">{_('Nothing to see here!')}</div>
          <p>
            <Link to="/">{_('Click here to go the Home page')}</Link>
          </p>
        </div>
      </Card>
    </Page>
  );
}
