import { Stack, Paper, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const SignUp = () => {
  const form = useForm();
  const { register, handleSubmit, formState, watch } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log({ data });
  };
  return (
    <Paper
      elevation={4}
      className="flex flex-col max-w-[450px] sm:max-w-[550px] md:max-w-[600px] w-full mx-auto my-10 md:my-15 p-5 sm:p-10 md:px-16"
    >
      <h2 className="text-2xl font-bold pb-5 text-center ">Sign Up</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={3}>
          <TextField
            label="Username"
            type="text"
            variant="outlined"
            size="small"
            color="secondary"
            id="username"
            placeholder="Enter your Username"
            {...register("username", {
              required: "Username is required",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Enter only charecter",
              },
              minLength: {
                value: 4,
                message: "Minimum charecter should be 4 ",
              },
            })}
            required
            error={!!errors.username}
            helperText={errors.username?.message}
          />

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
              validate: {
                notAdmin: (feildValue) => {
                  return (
                    feildValue !== "admin@example.com" ||
                    "Enter a differet Email address "
                  );
                },
                notBlackListed: (feildValue) => {
                  return (
                    !feildValue.endsWith("baddomain.com") ||
                    "This domain is not supported "
                  );
                },
                emailAvailable: async (feildValue) => {
                  const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users?email=${feildValue}`
                  );
                  const data = await response.json();
                  return data.length == 0 || "This Eفmail already exists";
                },
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
          <TextField
            variant="outlined"
            color="secondary"
            size="small"
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            placeholder="Please Confirm Password"
            {...register("confirmPassword", {
              required: "Repeat the password",
              validate: {
                matchPrevious: (value) =>
                  value === watch("password") || "The passwords do not match",
              },
            })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />

          <Button variant="contained" type="submit" color="secondary">
            Sign Up
          </Button>

          <div className="flex justify-between">
            <Link className="text-orange-700 hover:underline" to="/sign-in">
              Already have an account ? Sign In.
            </Link>
          </div>
        </Stack>
      </form>
    </Paper>
  );
};

export default SignUp;
