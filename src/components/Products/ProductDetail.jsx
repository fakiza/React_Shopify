import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Box,
  Button,
  Rating,
  Snackbar,
  Stack,
  Tab,
  TextField,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import StarIcon from "@mui/icons-material/Star";
import { useParams } from "react-router-dom";
import useApiData from "../CustumHook/useApiData";
import { useCart } from "../routes/Cart/CartContext";
import DisplayProducts from "./displayProduct";
const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useApiData('/db.json');
  const product = products?.find((product) => product.id === Number(id));
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("1");
  const [rate, setRate] = useState(0);
  const { addToCart} =
    useCart();

  // const currentQuantity = product
  //   ? cartItems.find((item) => item.product.id === product.id)?.quantity || 0
  //   : 0;
  const [item,setItem]= useState(1);
  
  const handleClose = (event, reason) => {
    if (reason == "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleAddToCart = () => {
    addToCart({ ...product, quantity: item });
    setOpen(true);
    // You can optionally provide feedback to the user, like showing a success message.
  };

  const handleIncrementQuantity = () => {
    // incrementQuantity(products);
    setItem((item)=>item+1);
  };

  const handleDecrementQuantity = () => {
    // decrementQuantity(products);
    item>1 && setItem((item)=>item-1);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeRating = (event, newValue) => {
    setRate(newValue);
  };
  return (
    product && (
      <>
        <div className="container  mx-auto my-5">
          <div className="flex">
            <div className="w-1/2 pr-6">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#000",
                  "--swiper-pagination-color": "#000",
                }}
                pagination={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="productSwiper"
              >
                {product.thumbnail &&
                  product.thumbnail.map((slider, index) => (
                    <SwiperSlide key={index}>
                      <img src={slider} alt="image" />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
            <div className="w-1/2">
              <h2 className="text-3xl pb-2">{product.name}</h2>
              <p className="text-2xl font-bold pb-2">
                ${product.price}{" "}
                <span className="text-xl font-normal">+Free Shipping</span>
              </p>
              <p className="pb-2">{product.description}</p>
              <div className="flex space-x-4 my-4">
                {/* {!!currentQuantity && ( */}
                  <div className="flex">
                    <div
                      className="px-4 py-1 border cursor-pointer"
                      onClick={handleIncrementQuantity}
                    >
                      +
                    </div>
                    <input
                      type="text"
                      className="px-4 py-1 border border-x-0 w-10"
                      value={item}
                      readOnly
                    />
                    <div
                      className="px-4 py-1 border cursor-pointer"
                      onClick={handleDecrementQuantity}
                    >
                      -
                    </div>
                  </div>
                {/* )} */}

                <div>
                  <Button
                    variant="contained"
                    color="secondary"
                    type="button"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
              <Rating
                value={product.rating}
                icon={<StarIcon fontSize="inherit" />}
                readOnly
              />
            </div>
          </div>
          <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
            message="Added to Cart"
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          />
        </div>

        <div>
          <Box>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="Tabs example"
                  textColor="secondary"
                  indicatorColor="secondary"
                  centered
                >
                  <Tab label="Description" value="1" />
                  <Tab label={`Reviews (${product.rating})`} value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">{product.description}</TabPanel>
              <TabPanel value="2">
                <div className="product_review">
                  <div className="py-4 text-center">
                    <h1>There are no reviews yet. </h1>
                  </div>
                  <div className="border p-4">
                    <div>
                      <h1 className="flex items-center text-2xl ">
                        Be the First to review <p>"{product.name}"</p>
                      </h1>
                      <p>
                        Your Email address will not be published, required
                        feilds are marked
                      </p>
                    </div>
                    <div className="my-4">
                      <form noValidate>
                        <Stack spacing={2}>
                          <div className="flex  space-x-2">
                            <label htmlFor="rating">Your Rating</label>
                            <Rating
                              id="rating"
                              value={rate}
                              icon={<StarIcon fontSize="inherit" />}
                              onChange={handleChangeRating}
                            />
                          </div>
                          <TextField
                            id="review"
                            name="review"
                            variant="outlined"
                            label="Your Review"
                            multiline
                            color="secondary"
                            minRows={3}
                            maxRows={10}
                            fullWidth
                            required
                          />
                          <div className="flex space-x-3 ">
                            <TextField
                              id="name"
                              name="name"
                              variant="outlined"
                              label="Name"
                              color="secondary"
                              fullWidth
                              required
                            />
                            <TextField
                              id="email"
                              name="email"
                              variant="outlined"
                              label="Email"
                              color="secondary"
                              fullWidth
                              required
                            />
                          </div>
                          <div>
                            <Button
                              type="submit"
                              size="large"
                              variant="contained"
                              color="secondary"
                            >
                              Submit
                            </Button>
                          </div>
                        </Stack>
                      </form>
                    </div>
                  </div>
                </div>
                {product.rating != 0 && (
                  <div className="border p-4  ">
                    <div className="flex space-x-2 ">
                      <h1>Product Rating : </h1>
                      <Rating
                        id="rating"
                        value={product.rating}
                        icon={<StarIcon fontSize="inherit" />}
                        readOnly
                      />
                    </div>
                    <div className="py-2">
                      <h1>Product Reviews</h1>
                      <div className="py-2">
                        <h2>User Name : abc</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Excepturi est iusto facere quaerat at impedit ad
                          harum ratione nobis modi magni placeat optio pariatur
                          ipsam, eius, deserunt doloremque ullam dolorem.
                        </p>
                        <Rating
                          id="rating"
                          value={product.rating}
                          icon={<StarIcon fontSize="inherit" />}
                          readOnly
                        />
                      </div>
                      <div className="py-2">
                        <h2>User Name : xyz</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Excepturi est iusto facere quaerat at impedit ad
                          harum ratione nobis modi magni placeat optio pariatur
                          ipsam, eius, deserunt doloremque ullam dolorem.
                        </p>
                        <Rating
                          id="rating"
                          value={product.rating}
                          icon={<StarIcon fontSize="inherit" />}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                )}
              </TabPanel>
            </TabContext>
          </Box>
        </div>
        <div className="container mx-auto related_products my-10">
          <div className="pb-10 ">
            <h1 className="text-4xl ">Related Products</h1>
          </div>
          <DisplayProducts display="sale" />
        </div>
      </>
    )
  );
};

export default ProductDetail;
