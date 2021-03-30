import styled from 'styled-components';

import { device } from '../../../constants/deviceSizes';
import mixins from '../../../assets/style/mixins';

export const StyledLogin = styled.div`
  padding: 1.75rem;
  ${mixins.flex('column', 'center', 'center')};
  width: 100%;
  margin: 5rem auto;
  @media ${device.laptop} {
    width: 100%;
    max-width: 500px;
  }
`;

export const ContainerLogin = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 5px;
  box-shadow: 0 0 15px -5px #bdbdbd;
  padding: 30px 40px 40px;
  @media ${device.laptop} {
    max-width: 450px;
  }
`;

export const TitleLogin = styled.div`
  padding-top: 1.25rem;
  padding-bottom: 3.25rem;
  h3 {
    line-height: 1.2;
    color: #181c32;
  }
`;
export const ButtonsLogin = styled.div`
  padding-top: 1.25rem;
  padding-bottom: 3.25rem;
  button {
    img.logo {
      width: 20px;
      height: 20px;
      margin-right: 0.5rem;
    }
    font-size: 1rem;
    font-weight: 600;
    padding: 14px 20px;
  }
  button[type='submit'] {
    margin-right: 1rem;
  }
  button.btn-light-primary {
    color: #3699ff;
    background-color: #e1f0ff;
    border-color: transparent;
  }
`;

export const StyledFormLogin = styled.form``;

export const StyledFormGroup = styled.div.attrs((props) => ({
  className: 'form-group',
}))`
  position: relative;
  margin-bottom: 1.75rem;
  label {
    font-weight: 600;
    color: #181c32;
    margin-bottom: 0.35rem;
  }
  input {
    padding: 1.5rem 1.2rem;
  }
  input.form-control-solid {
    border: none;
    background-color: #f3f6f9;
    border-color: #f3f6f9;
    color: #3f4254;
    background-image: none;
    transition: color 0.15s ease, background-color 0.15s ease,
      border-color 0.15s ease, box-shadow 0.15s ease,
      -webkit-box-shadow 0.15s ease;
  }
  .rounded {
    border-radius: 0.85rem;
  }
  a {
    text-decoration: underline !important; 
    cursor: pointer;
    color: #3699ff !important;
    font-weight: 600;
    line-height: 24px;
  }
`;
