import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import Flex from '../../components/Flex'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import Text from '../../components/Text'
import { api } from '../../services/api'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup
  .object()
  .shape({
    nome: yup.string().required('Nome completo é obrigatório'),
    email: yup
      .string()
      .email('E-mail inválido')
      .required('E-mail é obrigatório'),
    senha: yup.string().required('Senha é obrigatório'),
  })
  .required()

const SignUp = () => {
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
    resolver: yupResolver(schema),
  })

  const showGenericError = () => {
    alert('Erro no cadastro. Tente novamente mais tarde.')
  }

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.post('/users', {
        ...formData,
      })

      if (data.id) {
        navigate('/feed')
        return
      }

      showGenericError()
    } catch (e) {
      showGenericError()
    }
  }

  return (
    <>
      <Header />
      <Flex flexDirection="row" justifyContent="center">
        <Flex
          maxW="80%"
          mt="7.5rem"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Flex flex={1}>
            <Flex maxW="70%">
              <Text typography="h2">
                A plataforma para você aprender com experts, dominar as
                principais tecnologias e entrar mais rápido nas empresas mais
                desejadas.
              </Text>
            </Flex>
          </Flex>
          <Flex flex={1} justifyContent="end" maxW={'23rem'}>
            <Flex mb="0.5rem">
              <Text typography="h2">Comece agora grátis</Text>
            </Flex>
            <Text typography="h5">Crie sua conta e make the change._</Text>
            <Flex mt="2.188rem" maxW="17rem">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  placeholder="Nome completo"
                  leftIcon={<MdPerson color="#8647AD" />}
                  name="nome"
                  control={control}
                  error={errors.nome?.message}
                />
                <Input
                  placeholder="E-mail"
                  leftIcon={<MdEmail color="#8647AD" />}
                  name="email"
                  control={control}
                  error={errors.email?.message}
                />
                <Input
                  type="password"
                  placeholder="Senha"
                  leftIcon={<MdLock color="#8647AD" />}
                  name="senha"
                  control={control}
                  error={errors.senha?.message}
                />
                <Flex mt="2.5rem">
                  <Button
                    title="Criar minha conta"
                    variant="secondary"
                    type="submit"
                  />
                </Flex>
              </form>
            </Flex>
            <Flex mt="1.7rem">
              <Text typography="h5">
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </Text>
            </Flex>
            <Flex mt="0.7rem" flexDirection="row">
              <Text weight="700">Já tenho conta.</Text>
              <Text
                weight="700"
                color="#23DD7A"
                onClick={() => navigate('/login')}
              >
                &nbsp;Fazer login
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export { SignUp }
