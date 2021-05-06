import { Country } from './country';

export interface Repartidor {
  dni: string;
  nombre: string;
  edad: number;
  capacidadTransporte: number;
  paisOrigen: Country;
  unidadPropia: boolean;
}
