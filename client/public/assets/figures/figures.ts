import { Piece } from 'models/game';

// import b from './bb.svg';
// import B from './bw.svg';
// import e from './empty.svg';
// import k from './kb.svg';
// import K from './kw.svg';
// import n from './nb.svg';
// import N from './nw.svg';
// import p from './pb.svg';
// import P from './pw.svg';
// import q from './qb.svg';
// import Q from './qw.svg';
// import r from './rb.svg';
// import R from './rw.svg';

const figures: Record<Piece, string> = {
  b: '/assets/figures/bb.svg',
  B: '/assets/figures/bw.svg',
  k: '/assets/figures/kb.svg',
  K: '/assets/figures/kw.svg',
  n: '/assets/figures/nb.svg',
  N: '/assets/figures/nw.svg',
  p: '/assets/figures/pb.svg',
  P: '/assets/figures/pw.svg',
  q: '/assets/figures/qb.svg',
  Q: '/assets/figures/qw.svg',
  r: '/assets/figures/rb.svg',
  R: '/assets/figures/rw.svg',
  '.': '/assets/figures/empty.svg',
};

export default figures;
