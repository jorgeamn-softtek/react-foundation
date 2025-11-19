import { useForm } from "react-hook-form";

export const FormsPage = () => {
  type FormData = {
    email: string;
    password: string;
  };

  const { register, handleSubmit, formState, watch } = useForm<FormData>({
    defaultValues: {
      email: "jorge@jorge.com",
      password: "password",
    },
  });

  const onSubmit = (form: FormData) => {
    console.log(form);
  };

  console.log(watch("email"));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <button type="submit">Login</button>
        </div>
      </form>

      <pre>{JSON.stringify(formState, null)}</pre>
    </>
  );
};
