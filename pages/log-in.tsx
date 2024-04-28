import { useRouter } from 'next/router';
import Layout from '../components/layout';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import useMutation from '../libs/client/useMutation';
import Input from '../components/input';
import Button from '../components/button';
import useUser from '../libs/client/useUser';

interface LoginForm {
  email: string;
  password: string;
}

interface MutationResult {
  ok: boolean;
  message?: string;
}

const Login = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<LoginForm>();
  const [login, { loading, data }] =
    useMutation<MutationResult>('/api/users/login');
  const [errorMessage, setErrorMessage] = useState('');

  const onValid = (vaildForm: LoginForm) => {
    if (loading) return;
    login(vaildForm);
  };

  const { user } = useUser();
  useEffect(() => {
    if (!data?.ok) {
      setErrorMessage(data?.message!);
    } else {
      router.push('/');
    }
  }, [data, router, user]);

  return (
    <Layout title='Login'>
      <div className='px-4 pt-4 space-y-4 w-full'>
        <form
          className='space-y-4'
          onSubmit={handleSubmit(onValid)}
        >
          <Input
            label='이메일'
            name='email'
            kind='email'
            type='email'
            required={true}
            register={register('email')}
          />
          <Input
            label='비밀번호'
            name='password'
            kind='password'
            type='password'
            required={true}
            register={register('password', {
              required: true,
            })}
          />
          {errorMessage && errorMessage !== '' ? (
            <p className='pt-4 text-center text-blue-700 font-medium'>
              {errorMessage}
            </p>
          ) : null}
          <div className='pt-4'>
            <Button text='Login' large={true} />
          </div>
        </form>
        <div className='relative pt-4'>
          <div className='absolute w-full border-t border-blue-100' />
          <div className="mt-5">
            <Button
              text={'Join'}
              large={true}
              transparentBg={true}
              onClick={() => router.push('/create-account')}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
