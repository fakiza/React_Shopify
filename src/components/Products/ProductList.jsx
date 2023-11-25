import "./Product.css";
import useApiData from "../CustumHook/useApiData";
import { useEffect, useState } from "react";
import ProductFilter from "./productFilter";
import Products from "./Products";
import { useParams } from "react-router-dom";
import QuickView from "../Modal/QuickView";
import { useCart } from "../routes/Cart/CartContext";
import { useQuickView } from "../Modal/QuickViewContext";

const ProductsList = () => {
  const {products,loading,error,} = useApiData("/db.json");
  const {quickViewData, openQuickView,closeQuickView } = useQuickView();
  const { addToCart } = useCart();
  const [category, setCategory] = useState("All");
  const [sortType, setSortType] = useState("lowToHigh");
  const [priceRange, setPriceRange] = useState("100");
  const { categoryParam } = useParams();
  
  useEffect(() => {
    // Set the categoryName state based on the route parameter
    setCategory(categoryParam);
  }, [categoryParam]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange(Number(e.target.value));
  };

  const filteredProducts = (products || [])
    .filter((product) => {
      // Check if categoryParam is 'all' or undefined to display all products
      const categoryFilter =
        category === "all" || !category || product.category === category;
      const pricefilter = product.price <= priceRange;
      return categoryFilter && pricefilter;
    })
    .sort((a, b) => {
      // Sort by price - toggle between low to high and high to low based on the state
      return sortType === "lowToHigh"
        ? a.price - b.price
        : sortType === "highToLow"
        ? b.price - a.price
        : null;
    });

  return (
    <div className="flex flex-col md:flex-row my-20">
      <div className="flex flex-col items-center px-10 my-10 md:my-0">
        <ProductFilter
          selectedCategory={category}
          onCategoryChange={handleCategoryChange}
          selectedPriceRange={priceRange}
          onPriceRangeChange={handlePriceRangeChange}
          selectedSortType={sortType}
          onSortTypeChange={handleSortChange}
        />
      </div>
      <div className="container mx-10">
        <div className="product-list grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 ">
          {filteredProducts &&
            filteredProducts.map((product) => (
              <Products
                key={product.id}
                products={product}
                loading={loading}
                error={error}
                onQuickViewClick={openQuickView}
                addToCart={addToCart}
              />
            ))}
        </div>
        {quickViewData && (
          <QuickView
            products={quickViewData.products}
            onCloseClick={closeQuickView}
          />
        )}
      </div>
    </div>
  );
};

export default ProductsList;
