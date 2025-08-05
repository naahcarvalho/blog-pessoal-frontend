import type Usuario from './Usuario';
import type Tema from './Tema';

export default interface Postagem {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  Tema: Tema | null;
  usuario: Usuario | null;
}
