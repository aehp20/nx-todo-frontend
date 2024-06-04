import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { NavArrowLeftIcon } from '../icons';
import Title from '../title/Title';

export type BackLinkProps = {
  to: string;
  content: ReactNode;
};

export default function BackLink(props: BackLinkProps) {
  const { to, content } = props;

  return (
    <Link to={to}>
      <div className="flex items-center">
        <NavArrowLeftIcon /> <Title>{content}</Title>
      </div>
    </Link>
  );
}
