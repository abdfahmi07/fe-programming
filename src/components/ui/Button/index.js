import styled, { css } from "styled-components";

const Button = styled.button`
  display: inline-block;
  font-family: "Poppins", sans-serif;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;

  ${({ colorSchema, variant, theme }) =>
    variant === "outline"
      ? css`
          background-color: transparent;
          border: 1px solid ${theme.colors[colorSchema] || theme.colors.primary};
          color: ${theme.colors[colorSchema] || theme.colors.primary};
        `
      : css`
          background-color: ${theme.colors[colorSchema] ||
          theme.colors.primary};
          border: none;
        `}

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
