import { useNavigate } from 'react-router-dom';
import classes from './Button.module.scss';

const Button = () => {
  const navigate = useNavigate();
  return (
    <>
      <button className={classes.back_btn} onClick={() => navigate(-1)}>
        Voltar
      </button>
    </>
  );
};

export default Button;
