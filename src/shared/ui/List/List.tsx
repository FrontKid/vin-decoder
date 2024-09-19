import { FC, ReactNode } from 'react';

type TListProps = {
  className?: string;
  children: ReactNode;
  label?: string;
};

const List: FC<TListProps> = ({ children, className, label }) => {
  return (
    <div className={className}>
      {label && <h3 className="text-2xl font-semibold mb-4">{label}</h3>}
      <ul className="space-y-2">{children}</ul>
    </div>
  );
};

export { List };
