import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media(max-width: 360px) {
    margin-top: 2rem;
  }

  @media(max-width: 320px) {
    margin-top: 0.5rem;
    gap: 0.75rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  padding: 1rem 1.875rem;
  background-color: ${props => props.theme["gray-100"]};

  label {
    font-size: 1.25rem;
    line-height: 1.7;
    color: ${props => props.theme["gray-700"]};
  }

  @media(max-width: 360px) {
    label {
      line-height: 1.6;
      padding-inline: 1.5rem;
    }
  }

  @media(max-width: 320px) {
    margin-top: 0.5rem;
    gap: 1rem;

    label {
      font-size: 1rem;
    }
  }
`;

export const Select = styled.select`
  border: none;
  border-radius: 6px;
  height: 1.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  box-shadow: 0px 4px 10px 0px #00000033;

  @media(max-width: 320px) {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    height: 1.375rem;
  }

  option {
    font-weight: 500;
    border: 0;
  }
`;