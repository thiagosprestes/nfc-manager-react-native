import React from 'react';
import { Container } from './styles';
import { WriteOptions, WriteTagSteps } from '../../../../types';
import { Options } from '../components/Options';
import { Content } from '../components/Content';
import { Write } from '../components/Write';
import { Success } from '../components/Success';

interface WriteTagProps {
  onFinish: () => void;
  onNext: () => void;
  onSelectOption: (option: WriteOptions) => void;
  selectedOption?: WriteOptions;
  step: WriteTagSteps;
}

const WriteTag = ({
  onNext,
  onFinish,
  onSelectOption,
  selectedOption,
  step,
}: WriteTagProps) => {
  const WriteOptions = <Options onSelectOption={onSelectOption} />;

  const InsertContent = (
    <Content onNext={onNext} selectedOption={selectedOption} />
  );

  const WriteTag = <Write onNext={onNext} />;

  const WriteSuccess = <Success onNext={onFinish} />;

  return (
    <Container>
      {
        {
          [WriteTagSteps.options]: WriteOptions,
          [WriteTagSteps.content]: InsertContent,
          [WriteTagSteps.write]: WriteTag,
          [WriteTagSteps.success]: WriteSuccess,
        }[step]
      }
    </Container>
  );
};

export { WriteTag };
