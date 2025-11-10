import { useAuthStore } from "../store/auth.store";

export const LoginPage = () => {
  const authStatus = useAuthStore((state) => state.status);

  return <h2>Login status {authStatus}</h2>;
};
