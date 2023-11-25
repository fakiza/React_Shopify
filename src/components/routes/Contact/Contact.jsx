import { Button, Grid, TextField } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const form = useForm();
  const { register, reset, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log({ data });
    reset();
  };
  return (
    <div className="container md:mx-auto px-3 my-10 ">
      <div className="my-10 text-center">
        <span>Get In Touch</span>
        <h1 className="text-3xl  font-bold mb-4">Contact Us</h1>
      </div>
      <hr className="my-10" />
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <div className="">
            <h2 className="text-xl font-bold mb-4">Contact Details</h2>
            <p className="mb-4">
              <strong>Email:</strong> example@email.com
            </p>
            <p className="mb-4">
              <strong>Phone:</strong> +1234567890
            </p>
            <h2 className="font-bold mb-4">Address</h2>
            <p>
              123 Main Street, Anytown, USA <br />
            </p>
            <div className="lg:mt-5">
              <h1 className="text-xl font-bold mb-4">Follow Us</h1>
              <div className="flex space-x-4 text-gray-500">
                <FacebookOutlinedIcon className="hover:text-orange-700 cursor-pointer" />
                <LinkedInIcon className="hover:text-orange-700 cursor-pointer" />
                <InstagramIcon className="hover:text-orange-700 cursor-pointer" />
                <TwitterIcon className="hover:text-orange-700 cursor-pointer" />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className=" rounded pb-8 mb-4"
          >
            <div className=" flex space-x-2 mb-4">
              <TextField
                label="User Name"
                id="username"
                type="text"
                size="small"
                color="secondary"
                placeholder="Your Name"
                fullWidth
                {...register("username", {
                  required: "Username is Required",
                })}
                error={!!errors.username}
                helperText={errors.username?.message}
              />

              <TextField
                label="Email"
                id="email"
                type="email"
                size="small"
                color="secondary"
                placeholder="Your Email"
                fullWidth
                {...register("email", {
                  required: "email is Required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email format",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </div>
            <div className="mb-6">
              <TextField
                label="Message"
                id="message"
                placeholder="Your Message"
                size="small"
                color="secondary"
                multiline
                rows={4}
                fullWidth
                {...register("message", {
                  required: "message is Required",
                })}
                error={!!errors.message}
                helperText={errors.message?.message}
              />
            </div>
            <Button variant="contained" color="secondary" submit type="">
              Send Message
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactUs;
