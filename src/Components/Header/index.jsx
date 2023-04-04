import { AppBar, Container, Toolbar, Typography, Button, Box } from "@mui/material";
import { useSelector } from "react-redux";


const Header = () => {

  const { cart } = useSelector(state => state);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
        }}
      >
        <Container>
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "black",
              }}
            >Storefront</Typography>
            <Button>Cart ({cart.length})</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Header;