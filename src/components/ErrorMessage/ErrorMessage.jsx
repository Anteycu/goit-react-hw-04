import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return <p className={css.error}>{`Error appear: ${message}`}</p>;
};

export default ErrorMessage;
