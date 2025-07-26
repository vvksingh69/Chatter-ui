import { gql, useMutation } from '@apollo/client';
import { User } from '../models/User';

interface CreateUserInput {
  createUserInput: {
    email: string;
    password: string;
  };
}

const CREATE_USER = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
    }
  }
`;

const useCreateUser = () => {
  //User - the first generic type refers to the data type of the data that we expect to get back from the mutation call.
  //CreateUserInput - the second generic type refers to the data type ofthe data that is being passed on as input here. ,
  return useMutation<User, CreateUserInput>(CREATE_USER);
};

export { useCreateUser };
