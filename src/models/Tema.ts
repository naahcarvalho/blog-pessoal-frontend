import type Postagem from './Postagem';

export default interface Tema {
  categoria: any;
  id: number;
  descricao: string;
  postagem?: Postagem[] | null;
}
