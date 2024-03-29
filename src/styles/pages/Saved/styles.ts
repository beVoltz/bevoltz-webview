import styled, { css } from 'styled-components'

export const SavedContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 13%;
  gap: 30px;
`

export const SavedStationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: scroll;
  height: 70vh;
`

export const SavedStationItem = styled('div')`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.gray_50};
    border-radius: 10px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    button {
      margin-top: 10px;
    }
  `}
`
