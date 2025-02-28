import { createContext, type ReactNode } from "react";
import { useForm, type UseFormRegister } from "react-hook-form";
import type { UserLogin } from "../models/UserLogin";
import { useNavigate } from "react-router-dom";



interface UserContextProps {
  onSubmit: () => Promise<void>,
  register: UseFormRegister<UserLogin>
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextProps);

export function UserProvider({children}: UserProviderProps) {
  
  const {
    register,
    handleSubmit,
  } = useForm<UserLogin>();
  
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      const request = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const response = await request.json();
      console.log(response.token);
      localStorage.setItem('token', response.token);
      localStorage.setItem('userId', response.id);

    } catch (error) {
      console.log(error);
    }
  });

  return (
    <UserContext.Provider value={{ onSubmit, register }}>
        {children}
    </UserContext.Provider>
)
}