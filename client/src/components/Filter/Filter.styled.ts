import styled from '@emotion/styled'
import { Flex, Input } from 'antd'

export const StyledInputContainer = styled(Flex)`
  .ant-select-selector {
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    padding: 8px 12px;
    font-size: 16px;
    transition: all 0.3s ease;
    box-shadow: none;
    display: flex;
    align-items: center;
    &:hover {
      border-color: #40a9ff;
    }
  }

  .ant-select-selection-placeholder {
    color: #bfbfbf;
  }

  .ant-select-arrow {
    color: #8c8c8c;
  }

  &.ant-select-focused .ant-select-selector {
    border-color: #1890ff;
    box-shadow: 0 0 4px rgba(24, 144, 255, 0.2);
  }
`

export const StyledInput = styled(Input)`
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  padding: 8px 12px;
  font-size: 16px;
  box-shadow: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: #40a9ff;
  }

  &:focus {
    border-color: #1890ff;
    box-shadow: 0 0 4px rgba(24, 144, 255, 0.2);
  }

  .ant-input-prefix {
    color: #8c8c8c;
    margin-right: 8px;
  }

  &::placeholder {
    color: #bfbfbf;
  }
`
