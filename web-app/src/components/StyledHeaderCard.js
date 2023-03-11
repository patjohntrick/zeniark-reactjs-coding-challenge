import background from '../images/logo.png';
import '../styles/questionCard.scss';

export const StyledHeaderCard = ({
  category,
  questionNumber,
  resultHeaderText,
}) => {
  if (category !== undefined && questionNumber !== undefined) {
    return (
      <div className='question-card-container'>
        <div className='header'>
          <img src={background} alt='Zeniark Logo' className='question-logo' />
          <h4>{`Category: ${category && category}`}</h4>
        </div>
        <p className='question-counter'>{`${questionNumber + 1} of 10`}</p>
      </div>
    );
  }
  return (
    <div className='question-card-container'>
      <div className='header header-result'>
        <img src={background} alt='Zeniark Logo' className=' logo-result' />
      </div>
      <h3>{resultHeaderText}</h3>
      <p></p>
    </div>
  );
};
