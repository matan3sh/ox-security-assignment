import styled from '@emotion/styled'

export const StyledEmployeeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 275px;
  padding: 16px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
  transition: box-shadow 0.2s ease-in-out;
  :hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`

export const StyledEmployeeImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 12px;
`

export const StyledEmplyeeName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 2px;
`
