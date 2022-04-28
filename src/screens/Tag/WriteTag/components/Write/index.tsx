import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { NfcState, useNfc } from '../../../../../hooks/useNfc';
import { Error } from '../../../../../components/Error';
import { ErrorType, WriteOptions } from '../../../../../types';
import { unregisterNfcEvent } from '../../../../../utils/nativeModules/nfcManager';
import Reading from '../../../../../components/Reading';

interface WriteProps {
  onNext: (tagInfo: string) => void;
  selectedOption?: WriteOptions;
  text: string;
}

const Write = ({ onNext, selectedOption, text }: WriteProps) => {
  const { nfcState, tag, writeNfc, writeWithSuccess } = useNfc();

  const [writeState, setWriteState] = useState(nfcState);

  const handleOnWrite = () => {
    writeNfc(text, selectedOption === WriteOptions.text ? 'text' : 'url');
    setWriteState(NfcState.default);
  };

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

  useEffect(() => {
    handleOnWrite();
  }, []);

  useEffect(() => {
    if (writeWithSuccess) {
      onNext(tag!);
    }
  }, [writeWithSuccess]);

  const defaultState = <Reading />;

  const errorState = (
    <Error type={ErrorType.notFound} onRetry={handleOnWrite} />
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
