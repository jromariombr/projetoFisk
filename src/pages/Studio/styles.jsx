import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media(max-width: 320px) {
    gap: 0.75rem;
  }
`;

export const Info = styled.section`
  width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 20px;
  background-color: ${props => props.theme["gray-700"]};

  @media(max-width: 320px) {
    width: 16rem;
    gap: 0.5rem;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;

  span {
    color: ${props => props.theme.white};
  }

  @media(max-width: 320px) {
    margin-top: 0.5rem;

    span {
      font-size: 0.875rem;
    }
  }
`;

export const UserImg = styled.div`
  width: 4.125rem;
  height: 4.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme["red-200"]};
  border-radius: 9999px;
  position: relative;

  div {
    width: 2rem;
    height: 4.125rem;
    position: absolute;
    top: -2px;
    left: -10px;
    z-index: 0;
    background-color: ${props => props.theme["gray-700"]};
  }

  img {
    z-index: 1;
    width: 3.5rem;
    border-radius: 9999px;
  }

  @media(max-width: 320px) {
    width: 3.125rem;
    height: 3.125rem;

    div {
      height: 3rem;
      top: -2px;
      left: -20px;
    }

    img {
      width: 2.5rem;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media(max-width: 320px) {
    gap: 2rem;
  }
`;

export const From = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  color: ${props => props.theme.white};

  p {
    padding: 0.125rem 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    font-weight: 500;
    background-color: ${props => props.theme["red-200"]};
  }

  span {
    font-weight: 300;
  }

  @media(max-width: 320px) {
    gap: 0.125rem;

    p {
      font-size: 0.875rem;
    }

    span {
      font-size: 0.875rem;
    }
  }
`;

export const SocialMedia = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-block: 0.75rem;
  color: ${props => props.theme.white};
  border-end-end-radius: 20px;
  border-end-start-radius: 20px;
  background-color: ${props => props.theme["red-200"]};

  img {
    width: 18px;
  }

  @media(max-width: 320px) {
    gap: 0.75rem;

    img {
      width: 16px;
    }
  }
`;

export const Text = styled.section`
  text-align: center;
  color: ${props => props.theme["gray-700"]};

  p {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  span {
    display: block;
    font-weight: 400;
  }

  @media(max-width: 320px) {
    p {
      font-size: 0.875rem;
    }

    span {
      font-size: 0.875rem;
    }
  }
`;

export const ButtonArea = styled.section`
  display: flex;
  gap: 2rem;

  button {
    all: unset;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent;
    border-radius: 6px;
    background-color: ${props => props.theme["red-200"]};
    transition: all ease 0.3s;

    img {
      width: 22px;
    }

    &:hover {
      scale: 1.05;
    }
  }

  @media(max-width: 320px) {
    gap: 1.5rem;

    button {
      width: 2.5rem;
      height: 2.5rem;

      img {
        width: 18px;
      }
    }
  }
`;

export const ButtonRec = styled.button`
  all: unset;
  width: 13rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0px 4px 10px 0px #00000033;
  transition: all ease 0.3s;

  img {
    height: 24px;
  }

  .ruido {
    width: 70%;
  }

  &:hover {
    scale: 1.05;
  }

  @media(max-width: 320px) {
    width: 13rem;
    height: 3rem;

    img {
      width: 18px;
    }
  }
`;