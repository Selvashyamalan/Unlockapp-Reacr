// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vh;
  background-size: cover;
  background-image: linear-gradient(to top, #3c2940, #0b0c1e);
`

export const Image = styled.img`
  height: 80px;
  width: 80px;
`

export const Description = styled.p`
  color: #e2e8f0;
  font-family: 'Roboto';
  font-size: 20px;
`

export const Button = styled.button`
  margin-top: 100px;
  background-color: #06b6d4;
  border-radius: 12px;
  border-style: none;
  height: 40px;
  width: 100px;
  padding: 10px;
  color: #ffffff;
`
