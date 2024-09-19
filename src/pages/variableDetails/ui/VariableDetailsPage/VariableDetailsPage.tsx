import { useParams } from 'react-router-dom';

import { useGetVehicleVariablesQuery } from '@/entities/decodeVin';

import { removeTagPFromDesc } from '../../utils/removeTagPFromDesc';
import { getVariablesDetails } from '../../utils/getVariablesDetails';

const VariableDetailsPage = () => {
  const { data: vehicleVariables, isLoading } = useGetVehicleVariablesQuery();
  const { variableId } = useParams();
  const validId = +(variableId || 0);

  const variableDetails = getVariablesDetails(vehicleVariables, validId);

  return (
    <section className="mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Variable Details</h2>

      <div className="bg-white shadow-lg rounded-lg p-6">
        {isLoading && (
          <p className="text-center text-lg text-gray-500">Loading...</p>
        )}
        {!isLoading && (
          <ul>
            <li className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">ID</h2>
              <p className="text-lg">{variableDetails?.ID}</p>
            </li>
            <li className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Name</h2>
              <p className="text-lg">{variableDetails?.Name}</p>
            </li>
            <li className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Description</h2>
              <p className="text-lg">
                {removeTagPFromDesc(variableDetails?.Description)}
              </p>
            </li>
            <li className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Group Name</h2>
              <p className="text-lg">{variableDetails?.GroupName}</p>
            </li>
            <li className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Data Type</h2>
              <p className="text-lg">{variableDetails?.DataType}</p>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
};

export { VariableDetailsPage };
