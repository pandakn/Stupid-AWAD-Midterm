import { IUser } from 'src/app/services/users/users.model';

const mockUsers: IUser[] = [
  {
    studentId: 'B1234567',
    title: 'Mr',
    name: 'John Doe',
    sex: 'Male',
    email: 'john.doe@example.com',
    address: {
      street: '123 Main St',
      zip: '12345',
    },
    aliases: ['JD', 'Johnny'],
  },
  {
    studentId: 'B9876543',
    title: 'Mrs',
    name: 'Jane Smith',
    sex: 'Female',
    email: 'jane.smith@example.com',
    address: {
      street: '456 Elm St',
      zip: '67890',
    },
    aliases: ['JS'],
  },
  {
    studentId: 'B5555555',
    title: 'Miss',
    name: 'Alice Johnson',
    sex: 'Female',
    email: 'alice.johnson@example.com',
    address: {
      street: '789 Oak Ave',
      zip: '54321',
    },
    aliases: ['AJ'],
  },
  {
    studentId: 'B7777777',
    title: 'Mr',
    name: 'Bob Brown',
    sex: 'Male',
    email: 'bob.brown@example.com',
    address: {
      street: '101 Pine Rd',
      zip: '98765',
    },
    aliases: ['BB'],
  },
  {
    studentId: 'B9999999',
    title: 'Miss',
    name: 'Eva Williams',
    sex: 'Female',
    email: 'eva.williams@example.com',
    address: {
      street: '222 Cedar Ln',
      zip: '24680',
    },
    aliases: ['EW'],
  },
];

export default mockUsers;
