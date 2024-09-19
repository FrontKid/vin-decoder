import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

type TLayoutProps = {
  header?: ReactNode;
};

const Layout: FC<TLayoutProps> = ({ header }) => {
  return (
    <>
      {header}
      <main className="max-w-screen-xl m-auto">{<Outlet />}</main>
    </>
  );
};

export { Layout };
