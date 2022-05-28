import styled, { css } from "styled-components";

const Button = styled.button`
  font-family: "Poppins", sans-serif;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  border: none;

  /* Access props variant */
  background-color: ${({ variant, theme }) =>
    theme.colors[variant] || theme.colors.primary};

  ${({ full }) =>
    full &&
    css`
      display: "block";
      width: 100%;
    `}

  ${({ size, theme }) =>
    theme.sizes[size]
      ? css`
          font-size: ${theme.sizes[size].fontSize};
          padding: ${theme.sizes[size].padding};
        `
      : css`
          font-size: ${theme.sizes.md.fontSize};
          padding: ${theme.sizes.md.padding};
        `}
`;

export default Button;
