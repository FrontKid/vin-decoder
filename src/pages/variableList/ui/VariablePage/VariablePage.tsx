import { Link } from 'react-router-dom';

import {
  ERouteEndpoints,
  useGetVehicleVariablesQuery,
} from '@/entities/decodeVin';

import { List } from '@/shared/ui';

const VariablePage = () => {
  const { data: vehicleVariables, isLoading } = useGetVehicleVariablesQuery();

  if (isLoading) {
    return <h3 className="text-center text-xl">Loading...</h3>;
  }

  if (!vehicleVariables) {
    return <h3 className="text-center text-xl">No Data</h3>;
  }

  return (
    <section className="mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Variables list</h2>
      <List className="space-y-4">
        {vehicleVariables.map(variable => (
          <li key={variable.ID}>
            <Link
              to={`${ERouteEndpoints.VARIABLE_LIST}/${variable.ID}`}
              className="block border cursor-pointer p-4 rounded bg-gray-100 text-xl font-semibold hover:bg-green-200 transition-colors duration-300"
            >
              {variable.Name}
            </Link>
          </li>
        ))}
      </List>
    </section>
  );
};

export { VariablePage };
