import { useForm } from "react-hook-form";

export const FormsPage = () => {
  type FormData = {
    email: string;
    password: string;
  };

  const { register } = useForm<FormData>({
    defaultValues: {
      email: "jorge@jorge.com",
      password: "password",
    },
  });

  return (
    <>
      <form>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input type="text" placeholder="Email" {...register("email")} />
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};
