import React, { useState, useEffect } from 'react';
import { Container, Text, Spinner } from './ContentSuspense.styles';

const ContentSuspense = (): JSX.Element => {
  const [isTimeoutFinished, setIsTimeoutFinished] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsTimeoutFinished(true);
    }, 500);
    return (): void => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {isTimeoutFinished && (
        <Container>
          <Text>Loading</Text>
          <Spinner />
        </Container>
      )}
    </>
  );
};

export default ContentSuspense;
