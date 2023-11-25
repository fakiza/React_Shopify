import useApiData from "../CustumHook/useApiData";

const ProductFilter = ({
  selectedCategory,
  onCategoryChange,
  selectedPriceRange,
  onPriceRangeChange,
  selectedSortType,
  onSortTypeChange,
}) => {
  const { categories:data } = useApiData();

  return (
    <div>
      <div className="flex flex-col items-start mb-5">
        <label htmlFor="category">Filter by Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={onCategoryChange}
        >
          {data &&
            data.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
        </select>
      </div>

      <div className="flex flex-col items-start mb-5">
        <label htmlFor="priceRange">Filter by Price Range:</label>
        <input
          type="range"
          id="priceRange"
          min="30"
          max="100"
          step="1"
          value={selectedPriceRange}
          onChange={onPriceRangeChange}
        />
        <span className="text-orange-700">{selectedPriceRange}</span>
      </div>

      <div className="flex flex-col items-start mb-5">
        <label htmlFor="sortPrice">Sort by Price:</label>
        <select
          id="sortType"
          value={selectedSortType}
          onChange={onSortTypeChange}
        >
          <option value="lowToHigh">Low to Hight</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
