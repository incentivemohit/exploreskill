import React, { useState, useEffect } from "react";
import "./NewPost.css";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AdminPanelSidebar from "../AdminPanelSidebar/AdminPanelSidebar";
import axios from "axios";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function NewPost() {
  const [Seller, setSeller] = useState("");
  const [ProductName, setProductName] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [image, setImage] = useState("");
  const [fileName, setFileName] = useState("");

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   loadCategory();
  // });

  // const loadCategory = async () => {
  //   await axios.get("/addnewCategory").then((res) => {
  //     setGetCategory(res.data);
  //   });
  // };

  const saveFile = (e) => {
    setImage(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const PostData = new FormData();
    PostData.append("Seller", Seller);
    PostData.append("ProductName", ProductName);
    PostData.append("ProductPrice", ProductPrice);
    PostData.append("file", image);
    PostData.append("filename", fileName);

    console.log("POST: ", PostData);

    await axios
      .post("/newpost", PostData)
      .then((res) => {
        setSeller("");
        setProductName("");
        setProductPrice("");
        setTimeout(() => {
          alert("Post Successfully Published");
        }, 3000);
      })
      .catch(() => {
        alert("Something Gone Wrong!!");
      });
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              <button
                className="bg-dark text-white btn-outline-warning"
                style={{ width: "200px" }}
              >
                Admin Panel
              </button>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>

          <AdminPanelSidebar />
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Typography paragraph>
            <form
              onSubmit={onSubmit}
              method="POST"
              className="w-50 m-auto my-5 card p-4"
            >
              <p className="m-auto h4">New Post</p>
              <div class="form-group">
                <label for="exampleInputEmail1"> Seller Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter seller name..."
                  value={Seller}
                  onChange={(e) => setSeller(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Product Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter product name..."
                  value={ProductName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Product Price</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter price..."
                  value={ProductPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                />
              </div>

              <div class="form-group">
                <label for="exampleInputPassword1">Add Product Image</label>
                <input
                  type="file"
                  class="form-control"
                  id="exampleInputPassword1"
                  onClick={saveFile}
                  name="file"
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </Typography>
        </Main>
      </Box>
    </>
  );
}
