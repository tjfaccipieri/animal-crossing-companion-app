import { createContext, type ReactNode } from "react";
import type { User } from "../models/User";
import { useQuery } from "@tanstack/react-query";


interface UserContextProps {
  user: User
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextProps);

export function UserProvider({children}: UserProviderProps) {

  const userId = localStorage.getItem('userId')
  console.log(userId);

  const { data } = useQuery<User>({
    queryKey: ['user'],
    queryFn: async () => {
      const resp = await fetch(`http://localhost:8080/users/${userId}`, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      });
      const data = resp.json();
      return data;
    },
    staleTime: 1000 * 60 * 60 * 24, // 1 dia completo, em milissegundos
  });

  if (!data) return null

  console.log(data);

  const user = data

  return (
    <UserContext.Provider value={{ user }}>
        {children}
    </UserContext.Provider>
)
}