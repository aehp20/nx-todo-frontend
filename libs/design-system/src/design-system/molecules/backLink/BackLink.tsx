import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { NavArrowLeftIcon } from '../../atoms/icons';
import Title from '../../atoms/title/Title';

import '../../../styles.css';

export type BackLinkProps = {
  to: string;
  content: ReactNode;
};

export default function BackLink(props: Readonly<BackLinkProps>) {
  const { to, content } = props;

  return (
    <Link to={to}>
      <div className="flex items-center">
        <NavArrowLeftIcon /> <Title>{content}</Title>
      </div>
    </Link>
  );
}
