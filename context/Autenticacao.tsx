import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

type AutenticacaoContextType = {
  usuario: User | null;
  estaLogado: boolean;
  sair: () => Promise<void>;
};

const AutenticacaoContext = createContext<AutenticacaoContextType>({} as AutenticacaoContextType);

export function ProvedorAutenticacao({ children }: { children: React.ReactNode }) {
  const [usuario, setUsuario] = useState<User | null>(null);

  // Aqui é onde quem entra e quem sai
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userFirebase) => {
      setUsuario(userFirebase);
    });
    return () => unsubscribe();
  }, []);

  const sair = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  };

  return (
    <AutenticacaoContext.Provider value={{
      usuario,
      estaLogado: !!usuario,
      sair
    }}>
      {children}
    </AutenticacaoContext.Provider>
  );
}

export const usarAutenticacao = () => useContext(AutenticacaoContext);