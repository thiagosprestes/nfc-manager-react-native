import React from 'react';
import { Container } from './styles';
import { ErrorType } from '../../../../../types';
import { NfcState } from '../../../../../hooks/useNfc';
import Reading from '../../../../../components/Reading';
import { Error } from '../../../../../components/Error';

interface WriteTagProps {
  onWrite: () => void;
  writeState: NfcState;
}

const WriteTag = ({ onWrite, writeState }: WriteTagProps) => {
  const defaultState = <Reading />;

  const errorState = <Error type={ErrorType.notFound} onRetry={onWrite} />;

  return (
    <Container>
      {
        {
          [NfcState.default]: defaultState,
          [NfcState.error]: errorState,
        }[writeState]
      }
    </Container>
  );
};

export { WriteTag };
