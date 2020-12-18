import React, {
  useReducer,
  createContext,
  FunctionComponent,
} from 'react';
import reducer from './Modals.reducer';
import initialState from './Modals.initialState';
import { State, ModalsProviderProps } from './Modals.types';

const ModalsState = createContext<State>(initialState);
const ModalsDispatch = createContext<any>(null);

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