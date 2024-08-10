import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  ${(prop) => (prop.flex ? `flex: ${prop.flex}` : null)};
  ${(prop) =>
    prop.alignContent ? `align-content: ${prop.alignContent}` : null};
  ${(prop) => (prop.alignItems ? `align-items:  ${prop.alignItems}` : null)};
  ${(prop) => (prop.alignSelf ? `align-self:  ${prop.alignSelf}` : null)};
  ${(prop) => (prop.flexBasis ? `flex-basis:  ${prop.flexBasis}` : null)};
  ${(prop) =>
    prop.flexDirection
      ? `flex-direction:  ${prop.flexDirection}`
      : 'flex-direction: column'};
  ${(prop) => (prop.flexFlow ? `flex-flow:  ${prop.flexFlow}` : null)};
  ${(prop) => (prop.flexGrow ? `flex-grow:  ${prop.flexGrow}` : null)};
  ${(prop) => (prop.gap ? `gap:  ${prop.gap}` : null)};
  ${(prop) => (prop.flexShrink ? `flex-shrink:  ${prop.flexShrink}` : null)};
  ${(prop) => (prop.flexWrap ? `flex-wrap:  ${prop.flexWrap}` : null)};
  ${(prop) =>
    prop.justifyContent ? `justify-content:  ${prop.justifyContent}` : null};
  ${(prop) => (prop.mt ? `margin-top:  ${prop.mt}` : null)};
  ${(prop) => (prop.mb ? `margin-bottom:  ${prop.mb}` : null)};
  ${(prop) => (prop.ml ? `margin-left:  ${prop.ml}` : null)};
  ${(prop) => (prop.mr ? `margin-right:  ${prop.mr}` : null)};
  ${(prop) => (prop.pt ? `padding-top:  ${prop.pt}` : null)};
  ${(prop) => (prop.pb ? `padding-bottom:  ${prop.pb}` : null)};
  ${(prop) => (prop.pl ? `padding-left:  ${prop.pl}` : null)};
  ${(prop) => (prop.pr ? `padding-right:  ${prop.pr}` : null)};
  ${(prop) => (prop.maxW ? `max-width:  ${prop.maxW}` : null)};
`

export default Flex
