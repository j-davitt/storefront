import { connect } from "react-redux";
import { setCategory, filterProducts, reset } from "../../store/categories";
import { Button, ButtonGroup } from "@mui/material";


const Categories = ({ setCategory, filterProducts, categories, reset, activeCategory, products }) => {
  return (
    <>
      <h2>Browse our Categories</h2>

      <ButtonGroup variant="text" aria-label="text button group">
      {
        categories.map((category, idx) => {
          return (
            <Button
              key={`category-${idx}`}
              onClick={() => {
                setCategory(category);
                filterProducts();
              }}
            >
              {category.displayName}
            </Button>
          )
        })
      }
      <Button 
      onClick={() => reset()}
      >RESET
      </Button>
      </ButtonGroup>
    </>
  )
};

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.categories,
    activeCategory: categories.activeCategory,
    products: categories.products,
  };
}

const mapDispatchToProps = { setCategory, filterProducts, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
