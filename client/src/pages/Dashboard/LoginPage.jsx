import { useForm } from 'react-hook-form';
import { useAuth } from '@context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(data => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated]);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="w-full max-w-md rounded-md bg-zinc-800 p-10">
        {loginErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-center text-white" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-3xl font-bold">Login</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="username"
            className="my-2 w-full rounded-md bg-zinc-700 px-4 py-2 text-white"
            {...register('username', { required: true })}
          />
          {errors.username && (
            <p className="text-red-500">Username is required</p>
          )}
          <input
            type="password"
            placeholder="password"
            className="my-2 w-full rounded-md bg-zinc-700 px-4 py-2 text-white"
            {...register('password', { required: true })}
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
