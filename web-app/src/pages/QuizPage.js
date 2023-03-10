import { StyledCard, StyledQuestionCard } from '../components';

export const QuizPage = () => {
  return (
    <StyledCard>
      <StyledQuestionCard
        category={'Geography'}
        question={'Hungary is the only country in the world beginning with H.'}
        questionNumber={1}
        to={'/'}
      />
    </StyledCard>
  );
};
