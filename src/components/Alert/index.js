import styles from "./style.module.css";

function Alert(props) {
  const { children } = props;

  return (
    <div className={styles.wrapper__message}>
      <span className={styles.error__message}>{children}</span>
    </div>
  );
}

export default Alert;
