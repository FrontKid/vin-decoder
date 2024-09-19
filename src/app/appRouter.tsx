import { RouteObject, createHashRouter as Router } from 'react-router-dom';
import { baseLayout } from './layout/baseLayout';

import { HomePage } from '@/pages/home';
import { VariablePage } from '@/pages/variableList';
import { VariableDetailsPage } from '@/pages/variableDetails';
import { ERouteEndpoints } from '@/entities/decodeVin';

const routes: RouteObject[] = [
  {
    element: baseLayout,
    path: ERouteEndpoints.HOME,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ERouteEndpoints.VARIABLE_LIST,
        element: <VariablePage />,
      },
      {
        path: `${ERouteEndpoints.VARIABLE_DETAILS}/${ERouteEndpoints.VARIABLE_DETAILS}`,
        element: <VariableDetailsPage />,
      },
      {
        path: '*',
        element: <h1>404 - Page Not Found</h1>,
      },
    ],
  },
];

const appRouter = () => Router(routes);

export { appRouter };
