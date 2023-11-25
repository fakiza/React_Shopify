import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./QuickView.css";
import CloseIcon from "@mui/icons-material/Close";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
const QuickView = ({ products, onCloseClick }) => {
  return (
    <div className="">
      <div className=" hidden fixed inset-0 sm:flex items-center justify-center z-50">
        <div className="modal-overlay" onClick={onCloseClick}></div>
        <div className="modal-container ">
          <div className="modal-content mx-auto p-6 bg-white rounded-lg shadow-lg">
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
                  className="QuickImage"
                >
                  {products?.thumbnail &&
                    products?.thumbnail.map((slider, index) => (
                      <SwiperSlide key={index}>
                        <img src={slider} alt="image" />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
              <div className="w-1/2">
                <h2 className="text-2xl pb-2">{products.name}</h2>
                <p>{products.description}</p>
                {products.sale ? (
                  <p>
                    <span className="line-through text-gray-500 pr-4 font-bold py-2">
                      {" "}
                      ${products.price}{" "}
                    </span>{" "}
                    <span className="font-bold">${products.salePrice}</span>
                  </p>
                ) : (
                  <p className="font-bold py-2">${products.price}</p>
                )}
                <Rating
                  value={products.rating}
                  icon={<StarIcon fontSize="inherit" />}
                  readOnly
                />
              </div>
            </div>
            <div className="modal-close-btn" onClick={onCloseClick}>
              <CloseIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
