import { useState } from 'react'
import { Box, LinearProgress, Stack, Typography, TextField, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types/form'
import { useAuthDispatch } from '../components/context/AuthContext'
import { PostSignOut } from '../lib/auth'

type LoginInputs = {
  id: string
  password: string
}

const Login = () => {
  const [isLoading, setLoading] = useState(false)
  const { handleSubmit, setError, register, formState: { errors } } = useForm<LoginInputs>()
  const dispatch = useAuthDispatch()

  const handleSignIn: SubmitHandler<LoginInputs> = async (data) => {
    try {
      setLoading(true)
      const loginResponse: PostSignOut = {
        token: 'response token',
        user: {
          id: 0,
          name: 'USER',
        }
      } // TODO: API 호출의 response로 교체 필요
      dispatch(loginResponse)
    } catch (err) {
      setLoading(false)
      if (err instanceof Error) {
        if (err.message) {
          setError('id', {})
          setError(
            'password',
            {
              message: err?.message,
            },
            { shouldFocus: true },
          )
        } else {
          alert('예상치 못한 에러가 발생했습니다.')
        }
      }
    }
  }


  return (
    <form onSubmit={handleSubmit(handleSignIn)}>
      <Stack justifyContent="flex-start" height="100vh" pb="20px">
        <Typography variant="h4" fontWeight="bold" textAlign="center" mt={15} mb={10}>
          로그인
        </Typography>
        <TextField
          {...register('id', { required: true })}
          defaultValue=""
          label="아이디"
          disabled={isLoading}
          tabIndex={0}
          placeholder="ID"
          error={!!errors.id}
          helperText={!!errors.id && "아이디를 입력하세요."}
        />
        <TextField
          {...register('password', { required: true })}
          type="password"
          defaultValue=""
          label="비밀번호"
          disabled={isLoading}
          tabIndex={1}
          placeholder="Password"
          sx={{
            marginTop: '50px',
          }}
          error={!!errors.password}
          helperText={!!errors.password && "비밀번호를 입력하세요."}
        />
        <Button type="submit" color="primary" variant="contained" disabled={isLoading} sx={{ marginTop: 'auto' }}>
          로그인
        </Button>
        {isLoading && (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        )}
      </Stack>
    </form>
  )
}

export default Login