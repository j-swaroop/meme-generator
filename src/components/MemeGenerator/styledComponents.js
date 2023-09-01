// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-color: #ffffff;
  padding-top: 25px;
  padding-bottom: 25px;
`

export const ResponsiveContainer = styled.div`
  width: 90%;
  max-width: 1140px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding-top: 25px;
  padding-bottom: 25px;
  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
`
export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Roboto';
  font-size: 32px;
`
export const Label = styled.label`
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 14px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 350px;
  height: 38px;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  border-color: #7e858e;
  color: #7e858e;
  padding-left: 10px;
  outline: none;
  margin-bottom: 20px;
  @media (max-width: 576px) {
    width: 95%;
  }
`

export const Select = styled(Input)``

export const Option = styled.option``

export const Button = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  background-color: #0b69ff;
  border-width: 0;
  border-radius: 8px;
  padding: 10px;
  width: 100px;
  cursor: pointer;
`

export const Image = styled.div`
  background-image: url(${props => props.bgImage});
  width: 100%;
  height: 50vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  margin-top: 25px;
  @media (min-width: 576px) {
    margin-left: 25px;
  }
`

export const Text = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: ${props => props.textSize}px;
`
