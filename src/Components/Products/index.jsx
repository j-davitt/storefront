import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Products = () => {

  const { products } = useSelector(state => state.categories);

  return (
    <>
      <h1>Products</h1>
      <Box sx={{ width: '100%' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
          products.map((product, idx) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={`product-${idx}`}>
                
                  <Card
                    variant="outlined"
                    sx={{
                      margin: "1rem",
                    }}
                  >
                    <CardContent>
                      <Typography>Name: {product.name}</Typography>
                      <Typography>Price: {product.price}</Typography>
                      <Typography>In-Stock: {product.inStock}</Typography>
                    </CardContent>
                  </Card>
                
              </Grid>
            )
          })
        }
      </Grid>
      </Box>
    </>
  )
}

// const mapStateToProps = ({ categories }) => {
//   return {
//     categories: categories.categories,
//     activeCategory: categories.activeCategory,
//     products: categories.products,
//   };
// }

// const mapDispatchToProps = {};

export default Products;
