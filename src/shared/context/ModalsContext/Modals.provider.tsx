import React, {
  useReducer,
  createContext,
  Dispatch,
  FunctionComponent,
} from 'react';
import reducer from './Modals.reducer';
import initialState from './Modals.initialState';
import { State, Action, ModalsProviderProps } from './Modals.types';

const ModalsState = createContext<State>(null!);
const ModalsDispatch = createContext<Dispatch<Action>>(null!);

const ModalsProvider: FunctionComponent<ModalsProviderProps> = ({
  children,
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
  ModalsProvider,
};