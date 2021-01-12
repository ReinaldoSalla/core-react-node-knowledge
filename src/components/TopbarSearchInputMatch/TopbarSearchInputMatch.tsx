import React, { useContext, FunctionComponent } from 'react';
import { MatchLink, Text } from './TopbarSearchInputMatch.styles';
import { getLink, getMatch } from './TopbarSearchInputMatch.utils';
import { ModalsDispatch } from '../../shared/context/ModalsContext';

const TopbarSearchInputMatch: FunctionComponent<any> = ({
  text
}): JSX.Element => {
  const dispatch = useContext(ModalsDispatch);

  const toggleTopbarSearch = (): void => {
    dispatch({ type: 'TOGGLE_TOPBAR_SEARCH' });
  };

  const match = getMatch(text);

  return (
    match ? (
      <MatchLink
        onClick={toggleTopbarSearch}
        to={`/${getLink(match)}`}
      >
        {match.replace('#', '')}
      </MatchLink>
    ) : (
      <Text>
        &quot;
        {text}
        &quot; not found
      </Text>
    )
  );
};

export default TopbarSearchInputMatch;