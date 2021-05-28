import React, {
  useReducer,
  createContext,
  FunctionComponent
} from 'react';
import reducer from './Modals.reducer';
import initialState from './Modals.initialState';
import { State, Action, ModalsProviderProps } from './Modals.types';

type Dispatch = (action: Action) => void;

const ModalsState = createContext<State>(initialState);
const ModalsDispatch = createContext<Dispatch>(null!);

const ModalsProvider: FunctionComponent<ModalsProviderProps> = ({
  children
}): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ModalsState.Provider value={state}>
      <ModalsDispatch.Provider value={dispatch}>
        {children}
      </ModalsDispatch.Provider>
    </ModalsState.Provider>
  );
};

export {
  ModalsState,
  ModalsDispatch,
  ModalsProvider
};
