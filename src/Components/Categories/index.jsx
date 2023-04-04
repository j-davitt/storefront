import { useDispatch, useSelector } from "react-redux";
import { setCategory, reset } from "../../store/actions";
import { Button, ButtonGroup, Container } from "@mui/material";
import SimpleCart from "../SimpleCart";


const Categories = () => {

  const { categories } = useSelector(state => state);
  const dispatch = useDispatch();

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
