import { Stack, Paper, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log({ data });
  };
  return (
    <Paper
      elevation={4}
      className="flex flex-col max-w-[450px] sm:max-w-[550px] md:max-w-[600px] w-full mx-auto my-10 md:my-20 p-5 sm:p-8 md:p-10"
    >
      <h2 className="text-2xl font-bold pb-5">Forgot Password</h2>
      <p className="text-sm md:text-lg pb-5">
        Lost your password? Please enter your email address. You will receive a
        link to create a new password via email.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <Stack spacing={3} className="">
          <TextField
            label="Email"
            type="text"
            variant="outlined"
            size="small"
            color="secondary"
            placeholder="Enter your Email Address"
            {...register("email", {
              required: "Email is required",
            })}
            required
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <Button
            variant="contained"
            type="submit"
            color="secondary"
            sx={{ width: "200px" }}
          >
            Reset Password
          </Button>

          <div className="flex justify-between">
            <Link className="text-orange-700 hover:underline" to="/sign-in">
              Remember Password ?
            </Link>
          </div>
        </Stack>
      </form>
    </Paper>
  );
};

export default ForgotPassword;
