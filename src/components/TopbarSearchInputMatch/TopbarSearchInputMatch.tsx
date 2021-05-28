import React, { useContext, FunctionComponent } from 'react';
import { MatchLink, Highlight, Text } from './TopbarSearchInputMatch.styles';
import {
  getLink,
  getMatch,
  formatResult
} from './TopbarSearchInputMatch.utils';
import { ModalsDispatch } from '../../shared/context/ModalsContext';

const TopbarSearchInputMatch: FunctionComponent<any> = ({
  text
}): JSX.Element => {
  const dispatch = useContext(ModalsDispatch);

  const toggleTopbarSearch = (): void => {
    dispatch({ type: 'TOGGLE_TOPBAR_SEARCH' });
  };

  const match = getMatch(text);

  if (match) {
    const [currentText, remainingMatch] = formatResult(text, match);
    return (
      <MatchLink onClick={toggleTopbarSearch} to={`/${getLink(match)}`}>
        <Highlight>{currentText}</Highlight>
        {remainingMatch}
      </MatchLink>
    );
  }

  return (
    <Text>
      &quot;
      {text}
      &quot; not found
    </Text>
  );
};

export default TopbarSearchInputMatch;
