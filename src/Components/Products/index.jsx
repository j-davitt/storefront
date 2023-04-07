import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateProductAPI } from "../../store/actions";
import { addToCart } from "../../store/cart";
import { Link } from "react-router-dom";

const Products = () => {

  const { products, categories } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleClick = (product) => {
    dispatch(addToCart(product));
    dispatch(updateProductAPI(product));
  }

  return (
    <>
      {
        categories.activeCategory === ''
          ? null
          : <Box sx={{ width: '100%' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {
                products.map((product, idx) => {
                  return (
                    <Grid item xs={2} sm={4} md={4} key={`product-${idx}`}>
                      <Card
                        // variant="outlined"
                        sx={{
                          maxWidth: 345
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={`https://source.unsplash.com/random?${product.name}`}
                          title={product.name}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">{product.name}</Typography>
                          <Typography>Price: {product.price}</Typography>
                          <Typography>In-Stock: {product.inStock}</Typography>
                        </CardContent>
                        <CardActions>
                          <Button onClick={() => handleClick(product)} size="small">Add to Cart</Button>
                          <Button component={Link} to={`/product/${product._id}`} size="small">Learn More</Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  )
                })
              }
            </Grid>
          </Box>
      }
    </>
  )
}

export default Products;
