import styled from '@emotion/styled'
import { Button } from 'antd'

export const StyledButton = styled(Button)`
  background-color: #1890ff;
  border-radius: 2px;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  padding: 20px;
  &:hover {
    background-color: #40a9ff;
    box-shadow: 0 4px 8px rgba(24, 144, 255, 0.2);
  }

  &:focus {
    background-color: #096dd9;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`
