import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import type { User } from '../models/User';

/**
 * The `Register` component is a React functional component that renders a registration form for users.
 * 
 * The component uses the `useForm` hook from the `react-hook-form` library to manage the form state and validation.
 * It also uses the `useState` hook to manage the state of the confirm password field.
 * 
 * When the form is submitted, the component checks if the password and confirm password fields match. If they do, it sends a POST request to the `/users/register` endpoint with the form data.
 * 
 * The component renders a form with fields for email, username, password, and confirm password. It also includes validation messages for the username and password fields.
 * 
 * The component also includes a link to the login page for users who already have an account.
 */

export function Register() {
  const { register, handleSubmit, watch } = useForm<User>();

  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }
    console.log(data);
    await fetch('http://localhost:8080/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  });

  return (
    <div className="container max-w-xs mx-auto flex flex-col justify-center">
      <h1 className="text-3xl text-center font-custom text-amber-950 font-bold mb-8">
        Register
      </h1>
      <form className="flex flex-col gap-4 font-custom" onSubmit={onSubmit}>
        <div className="flex flex-col">
          <label htmlFor="username" className="hidden">
            Email:
          </label>
          <input
            required
            {...register('email')}
            type="email"
            placeholder="Email"
            className="bg-amber-200 border-2 border-amber-950 rounded-lg px-2 py-1  placeholder:text-amber-700"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="username" className="hidden">
            Username:
          </label>
          <input
            {...register('username')}
            type="text"
            placeholder="Username"
            className="bg-amber-200 border-2 border-amber-950 rounded-lg px-2 py-1  placeholder:text-amber-700"
          />
          {watch('username') && (
            <p className="text-red-500 text-sm">
              {watch('username').length < 3
                ? 'please, give me a bigger username'
                : ''}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="hidden">
            Password:
          </label>
          <input
            required
            {...register('password')}
            type="password"
            placeholder="Password"
            className="bg-amber-200 border-2 border-amber-950 rounded-lg px-2 py-1  placeholder:text-amber-700"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="hidden">
            Confirm Password:
          </label>
          <input
            required
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-amber-200 border-2 border-amber-950 rounded-lg px-2 py-1  placeholder:text-amber-700"
          />
          {watch('password') !== confirmPassword && (
            <p className="text-red-500 text-xs font-bold mt-1 italic">
              Passwords do not match
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-amber-800 hover:bg-amber-950 text-amber-50 w-1/2 mx-auto block py-1 rounded-lg"
        >
          Register
        </button>

        <hr className="border-amber-950 border-2 border-dotted" />
        <div>
          <p className="text-center text-amber-950">
            Already have an account?{' '}
            <Link to="/" className="underline font-semibold">
              Login here!
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
