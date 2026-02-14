
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DashboardCard = ({ icon: Icon, label, count, to }) => {
  return (
    <Link to={to} className="group">
      <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-2xl shadow-sm transition-shadow duration-300 hover:shadow-lg h-full">
        <Icon className="w-10 h-10 mb-4 text-gray-700 transition-colors duration-300 group-hover:text-blue-500" />
        <h3 className="text-lg font-semibold text-gray-800 text-center">{label}</h3>
        {count !== null && (
          <p className="text-2xl font-bold text-gray-900 mt-2">{count}</p>
        )}
      </div>
    </Link>
  );
};

DashboardCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  count: PropTypes.number,
  to: PropTypes.string.isRequired,
};

DashboardCard.defaultProps = {
    count: null,
};

export default DashboardCard;
