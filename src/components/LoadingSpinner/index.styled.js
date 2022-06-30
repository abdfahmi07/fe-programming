import styled from "styled-components";

const StyledLoadingSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto;

  & {
    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 8px solid
        ${({ colorScheme, theme }) =>
          theme.colors[colorScheme]
            ? theme.colors[colorScheme]
            : colorScheme
            ? colorScheme
            : theme.colors.primary};
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: ${({ colorScheme, theme }) =>
          theme.colors[colorScheme]
            ? theme.colors[colorScheme]
            : colorScheme
            ? colorScheme
            : theme.colors.primary}
        transparent transparent transparent;

      &:nth-child(1) {
        animation-delay: -0.45s;
      }

      &:nth-child(2) {
        animation-delay: -0.3s;
      }

      &:nth-child(3) {
        animation-delay: -0.15s;
      }
    }
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default StyledLoadingSpinner;
