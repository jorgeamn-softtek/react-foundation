import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";

export const LoginPage = () => {
  const authStatus = useAuthStore((state) => state.status);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    setTimeout(() => {
      logout();
    }, 1500);
  });

  if (authStatus === "checking") {
    return <h2>Loading</h2>;
  }

  return (
    <>
      <h3>Login page</h3>
      {authStatus === "authenticated" ? (
        <div>Autenticado como: {JSON.stringify(user, null, 2)}</div>
      ) : (
        <div>No autenticado</div>
      )}

      {authStatus === "authenticated" ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <button onClick={() => login("jorge@me.com", "pass")}>Login</button>
      )}
    </>
  );
};
