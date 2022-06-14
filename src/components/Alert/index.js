import StyledAlert from "./index.styled";

function Alert({ children }) {
  return (
    <StyledAlert>
      <span className="error__message">{children}</span>
    </StyledAlert>
  );
}

export default Alert;
