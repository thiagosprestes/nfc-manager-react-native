import React from 'react';
import { Container } from './styles';
import { ComponentStates, ErrorType } from '../../../../types';
import { Error } from '../../../../components/Error';
import Reading from '../../../../components/Reading';

interface ReadTagProps {
  componentStates: ComponentStates;
  errorType: ErrorType;
  onRetryRead: () => void;
}

const ReadTag = ({ componentStates, errorType, onRetryRead }: ReadTagProps) => {
  const DefaultState = <Reading />;

  return (
    <Container>
      {
        {
          [ComponentStates.default]: DefaultState,
          [ComponentStates.loading]: <></>,
          [ComponentStates.error]: (
            <Error type={errorType} onRetry={onRetryRead} />
          ),
        }[componentStates]
      }
    </Container>
  );
};

export { ReadTag };
