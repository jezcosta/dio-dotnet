import styled from 'styled-components'

const fontFamily = 'Open Sans'

export const label = {
  fontFamily,
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: '1.25rem',
  letterSpacing: 0,
  margin: 0,
}

export const h1 = {
  fontFamily,
  fontSize: '2rem',
  fontWeight: 700,
  lineHeight: '2rem',
  letterSpacing: 0,
  margin: 0,
}

export const h2 = {
  fontFamily,
  fontSize: '2rem',
  fontWeight: 700,
  lineHeight: '2.75rem',
  letterSpacing: 0,
  margin: 0,
}

export const h3 = {
  fontFamily,
  fontSize: '1.5rem',
  fontWeight: 700,
  lineHeight: '1.5rem',
  letterSpacing: 0,
  margin: 0,
}

export const h4 = {
  fontFamily,
  fontSize: '1.125rem',
  fontWeight: 400,
  lineHeight: '1.125rem',
  letterSpacing: 0,
  margin: 0,
}

export const h5 = {
  fontFamily,
  fontSize: '1.125rem',
  fontWeight: 400,
  lineHeight: '1.563rem',
  letterSpacing: 0,
  margin: 0,
}

export const p = {
  fontFamily,
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: '1.25rem',
  letterSpacing: 0,
  margin: 0,
}

export const Element = styled.label`
  color: ${(props) => props.color} !important;
  font-size: ${(props) => props.size}rem !important;
  font-weight: ${(props) => props.weight} !important;
`
