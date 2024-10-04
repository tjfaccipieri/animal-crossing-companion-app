import { createContext, type ReactNode } from "react";
import type { User } from "../models/User";
import { useQuery } from "@tanstack/react-query";
import construction from '/gyroid.webp';

interface UserContextProps {
  data: User
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextProps);

export function UserProvider({children}: UserProviderProps) {

  const { data, isLoading } = useQuery<User>({
    queryKey: ['home'],
    queryFn: async () => {
      const resp = await fetch('http://localhost:8080/users/1');
      const data = resp.json();
      return data;
    },
    staleTime: 1000 * 60 * 60 * 24, // 1 dia completo, em milissegundos
  });

  if (!data) {
    return null
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-8 mt-8">
        <p className="font-bold text-center text-2xl text-amber-950">
          This page is under construction and awaiting donations from our
          residents. Please use the navbar so our Dodos can take you somewhere
          more useful.
        </p>
        <img src={construction} alt="" />
      </div>
    );
  }

  return (
    <UserContext.Provider value={{ data }}>
        {children}
    </UserContext.Provider>
)
}