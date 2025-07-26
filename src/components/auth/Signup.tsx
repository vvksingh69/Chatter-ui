import Auth from './Auth';
import { Link } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';
import { useCreateUser } from '../../hooks/useCreateUser';

const Signup = () => {
  const [createUser] = useCreateUser();

  return (
    <Auth
      submitLabel="Signup"
      onSubmit={async ({ email, password }) => {
        await createUser({
          variables: {
            createUserInput: {
              email,
              password,
            },
          },
        });
      }}
    >
      <Link to={'/login'} style={{ alignSelf: 'center' }}>
        <MUILink>LOGIN</MUILink>
      </Link>
    </Auth>
  );
};

export default Signup;
