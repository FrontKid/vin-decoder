import { ERouteEndpoints } from '@/entities/decodeVin';
import { Link, useLocation, useParams } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  const { variableId } = useParams();

  const isPageHome = pathname === '/';
  const isPageDetails = Boolean(variableId);

  const navigateTo = isPageHome
    ? ERouteEndpoints.VARIABLE_LIST
    : ERouteEndpoints.HOME;

  return (
    <header className="bg-gray-800 text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-xl font-semibold mb-4 sm:mb-0">VIN decoder</h1>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            to={navigateTo}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
          >
            {isPageHome ? 'Get all vehicle variables' : 'Go to home'}
          </Link>

          {isPageDetails && (
            <Link
              to={ERouteEndpoints.VARIABLE_LIST}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
            >
              Back
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export { Header };
