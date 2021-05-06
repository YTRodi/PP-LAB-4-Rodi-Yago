import { Actor } from './actor';

export interface Movie {
  id?: string;
  name: string;
  type: 'Terror' | 'Comedia' | 'Amor' | 'Otros';
  releaseDate: Date;
  amountPublic: number;
  image: string;
  actor: Actor;
}
