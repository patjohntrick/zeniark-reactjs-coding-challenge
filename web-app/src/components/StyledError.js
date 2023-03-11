import { useContext } from 'react';

import { StyledCard } from './StyledCard';
import { StyledHeaderCard } from './StyledHeaderCard';
import { Strings } from '../constant';
import { StyledButton } from './StyledButton';
import { AppContext } from '../App';

export const StyledError = () => {
  const { setScore, setFinalTenQuestions, setUserAnswers } =
    useContext(AppContext);

  const handleReset = () => {
    setScore(0);
    setFinalTenQuestions([]);
    setUserAnswers([]);
  };

  return (
    <StyledCard>
      <StyledHeaderCard resultHeaderText={'Error'} />
      <p>{Strings.ERROR}</p>
      <StyledButton to={'/'} text={'BACK TO HOME'} onClick={handleReset} />
    </StyledCard>
  );
};
