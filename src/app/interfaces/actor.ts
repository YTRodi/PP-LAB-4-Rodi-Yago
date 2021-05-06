import { Country } from './country';

export interface Actor {
  id?: string;
  name: string;
  lastName: string;
  age: number;
  email: string;
  phone: number;
  nacionality: Country;
}
