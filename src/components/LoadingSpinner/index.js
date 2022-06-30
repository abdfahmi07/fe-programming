import StyledLoadingSpinner from "./index.styled";

const LoadingSpinner = ({ colorScheme }) => {
  return (
    <StyledLoadingSpinner colorScheme={colorScheme}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledLoadingSpinner>
  );
};

export default LoadingSpinner;
