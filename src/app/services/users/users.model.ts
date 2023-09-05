type Sex = 'Female' | 'Male';

interface IAddress {
  street: string;
  zip: string;
}

export interface IUser {
  title: string;
  studentId: string;
  name: string;
  sex: Sex;
  email: string;
  address: IAddress;
  aliases: string[];
}
