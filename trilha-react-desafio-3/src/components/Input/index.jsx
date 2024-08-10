import React from 'react'
import { Controller } from 'react-hook-form'
import Flex from '../Flex'
import Text from '../Text'
import { IconContainer, InputContainer, InputText } from './styles'

const Input = ({ leftIcon, name, control, error, ...rest }) => {
  return (
    <Flex mb="1.25rem">
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      {error && (
        <Text size="0.7" color="#E4105D">
          {error}
        </Text>
      )}
    </Flex>
  )
}

export { Input }
