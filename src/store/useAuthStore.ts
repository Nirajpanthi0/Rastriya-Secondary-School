import create from 'zustand';

interface AuthState {
  token: string | null;
  admin: boolean;
}

interface AuthStore extends AuthState {
  setToken: (token: string | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  token: null,
  admin: false,
  setToken: (token: string | null) => {
    set((state: AuthState) => ({
      ...state,
      token,
      admin: !!token,
    }));
  },
}));
