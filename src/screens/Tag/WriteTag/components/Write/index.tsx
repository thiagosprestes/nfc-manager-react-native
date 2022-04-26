import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { NfcState, useNfc } from '../../../../../hooks/useNfc';
import { Error } from '../../../../../components/Error';
import { ErrorType } from '../../../../../types';
import { unregisterNfcEvent } from '../../../../../utils/nativeModules/nfcManager';
import Reading from '../../../../../components/Reading';

interface WriteProps {
  onNext: (tagInfo: string) => void;
  text: string;
}

const Write = ({ onNext, text }: WriteProps) => {
  const { nfcState, tag, writeNfc, writeWithSuccess } = useNfc();

  const [writeState, setWriteState] = useState(nfcState);

  useEffect(() => {
    if (nfcState === NfcState.error) {
      unregisterNfcEvent();
      setWriteState(NfcState.error);
    }
  }, [nfcState]);

  useEffect(() => {
    if (tag) {
      onNext(tag!);
    }
  }, [tag]);

  const handleOnRetry = () => {
    writeNfc(text);
    setWriteState(NfcState.default);
  };

  useEffect(() => {
    writeNfc(text);
  }, []);

  useEffect(() => {
    if (writeWithSuccess) {
      onNext(tag!);
    }
  }, [writeWithSuccess]);

  const defaultState = <Reading />;

  const errorState = (
    <Error type={ErrorType.notFound} onRetry={handleOnRetry} />
  );

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

export { Write };
