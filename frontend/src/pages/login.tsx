import { useForm } from 'react-hook-form';
import type { UserLogin } from '../models/UserLogin';
import { Link } from 'react-router-dom';

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<UserLogin>();
  const onSubmit = (data: UserLogin) => {
    console.log(data);
  };

  return (
    <div className="container max-w-xs mx-auto flex flex-col justify-center">
      <h1 className="text-3xl text-center font-custom text-amber-950 font-bold mb-8">
        Login
      </h1>
      <form className="flex flex-col gap-4 font-custom">
        <div className="flex flex-col">
          <label htmlFor="username" className="hidden">
            Username:
          </label>
          <input
            required
            type="text"
            placeholder="Username"
            className="bg-amber-200 border-2 border-amber-950 rounded-lg px-2 py-1  placeholder:text-amber-700"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="hidden">
            Password:
          </label>
          <input
            required
            type="password"
            placeholder="Password"
            className="bg-amber-200 border-2 border-amber-950 rounded-lg px-2 py-1  placeholder:text-amber-700"
          />
        </div>
        <button
          type="submit"
          className="bg-amber-800 hover:bg-amber-950 text-amber-50 w-1/2 mx-auto block py-1 rounded-lg"
        >
          Login
        </button>
      <hr className='border-amber-950 border-2 border-dotted' />
      <div>
        <p className='text-center text-amber-950'>Don't have an account? <Link to='/register' className='underline font-semibold'>Register here!</Link></p>
      </div>
      </form>
    </div>
  );
}
