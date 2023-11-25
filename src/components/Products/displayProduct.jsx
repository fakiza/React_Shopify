import useApiData from "../CustumHook/useApiData";
import Products from "./Products";
import QuickView from "../Modal/QuickView";
import { useQuickView } from "../Modal/QuickViewContext";
import { useCart } from "../routes/Cart/CartContext";

const DisplayProducts = ({ display }) => {
  const { quickViewData, openQuickView, closeQuickView } = useQuickView();
  const { addToCart } = useCart();
  const {products ,loading,error,} = useApiData("/db.json");

  if (!products) {
    return <div>Loading...</div>; // Or handle the loading state in your preferred way
  }
  const pro = display === "sale"? products.filter((product) => product.sale === true): products;
  const displayPoducts = pro.slice(0, 4);
  return (
    <div className="product-list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
      {displayPoducts &&
        displayPoducts.map((product) => (
          <Products
            products={product}
            loading={loading}
            error={error}
            onQuickViewClick={openQuickView}
            addToCart={addToCart}
          />
        ))}

      {quickViewData && (
        <QuickView
          products={quickViewData.products}
          onCloseClick={closeQuickView}
        />
      )}
    </div>
  );
};

export default DisplayProducts;
