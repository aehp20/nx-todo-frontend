import { Link, Page, Title } from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';

export default function About() {
  const { _ } = useI18NContext();

  const title = _('Aron Elias HERRERA PONTE');

  return (
    <Page title={title} headerContent={<Title>{title}</Title>}>
      <div>
        {_(
          "Lead developer with over 10 years' experience, specializing in frontend development with ReactJS: Web and Mobile.",
        )}
      </div>
      <br />
      <div>
        {_(
          'As a senior developer my main objective is to design, develop and maintain web applications. Implement new web technologies that will make the product even more powerful. Find elegant solutions to usability problems. Build fast, intuitive and powerful user interfaces and experiences by solving complex underlying technical challenges.',
        )}
      </div>
      <br />
      <div>
        <span className="font-bold">{_('Coordinates')}</span>
        <ul>
          <li>aronherrera2009@gmail.com</li>
          <li>{_('Paris - France')}</li>
        </ul>
      </div>
      <br />
      <div>
        <span className="font-bold">{_('Full LinkedIn profile')}</span>
        <ul>
          <li>
            <Link
              href="https://www.linkedin.com/in/aronherreraponte/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.linkedin.com/in/aronherreraponte/
            </Link>
          </li>
        </ul>
      </div>
      <br />
      <div>
        <span className="font-bold">{_('Social networks')}</span>
        <ul>
          <li>
            <Link
              href="https://github.com/aehp20?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/aehp20
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/aehp20"
              target="_blank"
              rel="noreferrer"
            >
              https://twitter.com/aehp20
            </Link>
          </li>
        </ul>
      </div>
    </Page>
  );
}
