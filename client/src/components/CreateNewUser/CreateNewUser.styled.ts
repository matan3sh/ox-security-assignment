import styled from '@emotion/styled'
import { Button } from 'antd'

export const StyledButton = styled(Button)`
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
    box-shadow: 0 4px 8px rgba(24, 144, 255, 0.2);
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`
