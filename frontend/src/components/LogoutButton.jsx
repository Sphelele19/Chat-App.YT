import { BiLogOut } from 'react-icons/bi';
import  useLogout  from '../hooks/useLogout';

const LogoutButton = () => {
  const { logout, loading } = useLogout();

  return (
    <div className="mt-auto">
      {!loading ? (
        <button 
          onClick={logout} 
          className="flex items-center gap-2 text-white hover:text-red-400 transition"
        >
          <BiLogOut className="w-6 h-6" />
          <span>Logout</span>
        </button>
      ) : (
        <span>Logging out...</span>
      )}
    </div>
  );
};

export default LogoutButton;
