import StyledAlert from "./index.styled";

function Alert(props) {
  const { children } = props;

  return (
    <StyledAlert>
      <span className="error__message">{children}</span>
    </StyledAlert>
  );
}

export default Alert;
