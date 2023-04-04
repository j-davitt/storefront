import { useDispatch, useSelector } from "react-redux";
import { setCategory, reset } from "../../store/categories";
import { Button, ButtonGroup } from "@mui/material";


const Categories = () => {

  const { categories } = useSelector(state => state.categories);
  const dispatch = useDispatch();

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
                dispatch(setCategory(category));
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

// const mapStateToProps = ({ categories }) => {
//   return {
//     categories: categories.categories,
//     activeCategory: categories.activeCategory,
//     products: categories.products,
//   };
// }

// const mapDispatchToProps = { setCategory, reset };

export default Categories;
