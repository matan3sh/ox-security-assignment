import styled from '@emotion/styled'

export const StyledDot = styled.div<{ color: string }>`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  border: 3px solid;
  border-color: ${(props) => props.color};
`
