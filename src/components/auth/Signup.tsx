import Auth from './Auth';
import { Link } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';

const Signup = () => {
  return (
    <Auth submitLabel="Signup" onSubmit={async () => {}}>
      <Link to={'/login'} style={{ alignSelf: 'center' }}>
        <MUILink>LOGIN</MUILink>
      </Link>
    </Auth>
  );
};

export default Signup;
