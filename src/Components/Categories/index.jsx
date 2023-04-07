import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProducts } from "../../store/actions";
import { Button, ButtonGroup, Container } from "@mui/material";
import SimpleCart from "../SimpleCart";
import { useEffect } from "react";
import { setCategory } from "../../store/categories";
import { setProducts } from "../../store/products";


const Categories = () => {

  const { categories } = useSelector(state => state);
  const dispatch = useDispatch();

  // added useEffect
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, []);

  const handleClick = (category) => {
    dispatch(setCategory(category));
    dispatch(setProducts(category));
  }

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}

      >
        <Container>
          <h2>Browse our Categories</h2>

          <ButtonGroup variant="text" aria-label="text button group">
            {
              categories.categories.map((category, idx) => {
                return (
                  <Button
                    key={`category-${idx}`}
                    onClick={() => {
                      handleClick(category);
                    }}
                  >
                    {category.name}
                  </Button>
                )
              })
            }

          </ButtonGroup>
        </Container>


        <SimpleCart />


      </Container>
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
