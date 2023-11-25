import { Stack, Paper, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const SignIn = () => {
  const form = useForm();
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log({ data });
    reset();
  };
  return (
    <Paper
      elevation={4}
      className="flex flex-col max-w-[450px] sm:max-w-[550px] md:max-w-[600px] w-full mx-auto my-10 md:my-20 p-5 sm:p-10 md:px-16"
    >
      <h2 className="text-2xl font-bold pb-5 text-center">Sign In</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <Stack spacing={3}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            size="small"
            color="secondary"
            placeholder="Enter your Email Address"
            {...register("email", {
              required: "Email required",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email format",
              },
            })}
            required
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            id="password"
            variant="outlined"
            color="secondary"
            size="small"
            label="Password"
            type="password"
            placeholder="Enter your Password"
            {...register("password", {
              required: "Password is required",
            })}
            required
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Button variant="contained" type="submit" color="secondary">
            Sign In
          </Button>

          <div className="flex justify-between flex-col md:flex-row lg:flex-row ">
            <Link
              className="text-orange-700 hover:underline"
              to="/lost-password"
            >
              Forget Password ?
            </Link>
            <Link className="text-orange-700 hover:underline" to="/sign-up">
              Do not have an account ? Sign Up.
            </Link>
          </div>
        </Stack>
      </form>
    </Paper>
  );
};

export default SignIn;
