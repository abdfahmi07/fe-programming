import styled from "styled-components";

const StyledDetailMovie = styled.div`
  // Mobile Screen
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
  }

  h2 {
    font-size: 2.44rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    font-size: 1.59rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    text-align: justify;
    margin-bottom: 2rem;
    color: #64748b;
  }

  // Tablet
  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;

    .poster {
      flex-basis: 30%;
    }

    .info {
      flex-basis: 60%;
    }
  }

  // Laptop
  @media screen and (min-width: 992px) {
  }
`;

export default StyledDetailMovie;
