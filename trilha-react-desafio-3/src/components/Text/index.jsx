import * as Styles from './styles'

const Text = ({ ...props }) => {
  const { typography = 'label', color, type = 'label', weight, style } = props
  const { fontSize, fontWeight } = {
    ...Styles[typography],
  }
  const { size = fontSize.slice(0, -3) } = props

  return (
    <Styles.Element
      {...props}
      style={{ ...Styles[typography], ...style }}
      color={color}
      weight={weight}
      fontWeight={fontWeight}
      size={size}
      as={type}
    />
  )
}

export default Text
