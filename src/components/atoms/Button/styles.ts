import Image from 'next/image'

import styled from 'styled-components'
import { css } from 'styled-components'

import { ButtonProps } from '.'

export const IconContainer = styled('div')`
  display: flex;
  align-items: center;
  margin-top: 2px;
`

export const RayIcon = styled(Image)`
  width: 10px;
  height: 20px;
`

export const ButtonContainer = styled('button')<ButtonProps>`
  ${({ theme, variant = 'primary', full = false }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    /* max-width: 310px; */
    min-width: 130px;
    padding: 12px 16px;
    border: none;
    border-radius: ${theme.border.radius.small};
    transition: all 0.1s ease-in;

    ${variant == 'primary' &&
    css`
      background-color: ${theme.colors.green_300};

      ${IconContainer}, p {
        color: ${theme.colors.white};
      }

      &:hover {
        opacity: 0.8;
      }
    `}

    ${variant == 'secondary' &&
    css`
      background-color: ${theme.colors.green_100};

      ${IconContainer}, p {
        color: ${theme.colors.green_300};
      }

      &:hover {
        opacity: 0.8;
      }
    `}

    ${variant == 'charge' &&
    css`
      background-color: ${theme.colors.green_100};
      padding: 8px 12px;

      ${IconContainer}, p {
        color: ${theme.colors.white};
      }

      &:hover {
        opacity: 0.8;
      }
    `}

    ${variant == 'booking' &&
    css`
      background-color: ${theme.colors.green_100};
      padding: 12px 0px;

      ${IconContainer}, p {
        color: ${theme.colors.white};
      }

      &:hover {
        opacity: 0.8;
      }
    `}

    ${full &&
    css`
      width: 100%;
    `}
  `}
`
