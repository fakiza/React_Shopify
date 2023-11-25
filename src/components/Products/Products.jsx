import "./Product.css";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Tooltip, Rating, Chip, Snackbar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import { useState } from "react";

const Products = ({ products, loading, error, onQuickViewClick, addToCart,}) => {
  const [open, setOpen] = useState(false);
  if (!products) {
    // Handle the case where products is null or undefined
    return null; 
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching data.</div>;
  }
  const handleClose = () => {
    setOpen(false);
  };
  const { id, sale, image, name, price, salePrice, rating } = products;

  return (
    <Link key={id} to={`/productDetails/${id}`} className="mb-5 md:mb-10">
      <div className="product-item relative  overflow-hidden transition duration-300 ease-in ">
        <div
          className="product-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        {sale && (
          <div className="absolute top-5 left-5">
            <Chip label="Sale!" size="small" sx={{ bgcolor: "white" }} />
          </div>
        )}
        <div className="icons hidden absolute top-5 right-5 transform  ">
          <div className="flex flex-col space-y-2">
            <Tooltip
              title="Add to Cart"
              placement="left"
              arrow
              enterDelay={100}
              leaveDelay={200}
            >
              <ShoppingCartOutlinedIcon
                sx={{
                  fontSize: 30,
                  color: "gray",
                  "&:hover": { color: "black" },
                }}
                className="p-1 rounded-full bg-white  transition duration-300 ease-in cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(products);
                  setOpen(true);
                }}
              />
            </Tooltip>

            <Tooltip
              title="Quick View"
              placement="left"
              arrow
              enterDelay={100}
              leaveDelay={200}
              sx={{ bgcolor: "black" }}
            >
              <RemoveRedEyeOutlinedIcon
                sx={{
                  fontSize: 30,
                  color: "gray",
                  "&:hover": { color: "black" },
                }}
                className="none p-1 rounded-full bg-white transition duration-300 ease-in cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  onQuickViewClick(products);
                }}
              />
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="mx-2">
        <h4>{name}</h4>
        {sale ? (
          <p>
            <span className="line-through text-gray-500 pr-4"> ${price} </span>{" "}
            <span>${salePrice}</span>
          </p>
        ) : (
          <p>${price}</p>
        )}

        <Rating
          value={rating}
          icon={<StarIcon fontSize="inherit" />}
          readOnly
        />
      </div>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message="Added to Cart"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Link>
  );
};

export default Products;
