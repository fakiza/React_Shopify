import { Stack, Paper, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const ResetPassword = () => {
  const form = useForm();
  const { register, handleSubmit, formState, reset, watch } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log({ data });
    reset();
  };
  return (
    <Paper
      elevation={4}
      className="flex flex-col max-w-[450px] sm:max-w-[550px] md:max-w-[600px] w-full mx-auto my-10 md:my-20 p-5 sm:p-8 md:p-10"
    >
      <h2 className="text-2xl font-bold pb-5">Reset Password</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={3} sx={{ width: "500px" }}>
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

export default ResetPassword;
