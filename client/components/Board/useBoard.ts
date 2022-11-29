import { useReducer } from 'react';

type ActionPick = {
  inX: number;
  inY: number;
  picked: string | null;
  moving: boolean;
};

type ActionMove = {
  x: number;
  y: number;
  moving: boolean;
};

type Action = ActionPick | ActionMove;

type State = ActionPick & ActionMove;

export const useBoard = () => {
  const DELTA = 6;
  const initialState: State = {
    inX: 0,
    inY: 0,
    picked: null,

    x: 0,
    y: 0,
    moving: false,
  };

  const reducer = (state: State, action: Action) => {
    return { ...state, ...action };
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const pick = (e: MouseEvent) => {
    if (!state.picked) {
      dispatch({
        inX: e.pageX,
        inY: e.pageY,
        picked: (e.target as HTMLImageElement).alt,
        moving: false,
      });
    } else {
      // make click move
    }

    stop(e);
  };

  const move = (e: MouseEvent) => {
    if (!state.picked) {
      return;
    }
    const deltaX = state.inX - e.pageX;
    const deltaY = state.inY - e.pageY;
    dispatch({
      x: deltaX,
      y: deltaY,
      moving: Math.abs(deltaX) > DELTA || Math.abs(deltaY) > DELTA,
    });
    stop(e);
  };

  const drop = (e: MouseEvent) => {
    const alt = (e.target as HTMLImageElement).alt;
    if (state.moving && alt !== state.picked) {
      // make drag move
      dispatch({
        inX: 0,
        inY: 0,
        picked: null,
        moving: false,
      });
    }
    stop(e);
  };

  const stop = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return {
    pick,
    move,
    drop,
    ...state,
  };
};
