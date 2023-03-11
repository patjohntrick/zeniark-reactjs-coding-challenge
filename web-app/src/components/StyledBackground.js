import '../styles/background.scss';
import background from '../images/background-logo.png';

export const StyledBackground = ({ children }) => {
  return (
    <div className='container'>
      <img className='img-style' src={background} alt='Zeniark Logo' />
      <div className='background-inner-container'>{children}</div>
    </div>
  );
};
