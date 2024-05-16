import { Page } from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';

export default function Home() {
  const { _ } = useI18NContext();

  return (
    <Page title={_('Home')}>
      <div>{_('Home.')}</div>
    </Page>
  );
}
