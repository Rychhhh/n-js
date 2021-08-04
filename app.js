const express = require("express");
const app = express();

//  Layouts Express-Ejs
const expressLayouts = require("express-ejs-layouts");

const port = 3000;

// View Engine EJS
app.set("view engine", "ejs");

// Use Layout Express
app.use(expressLayouts);

// Build-in Middleware
app.use(express.static("public"));

app.use((req, res, next) => {
  console.log("Time :", Date.now());
  next();
});

app.get("/", (req, res) => {
  res.render("index", {
    // Memanggil layout main
    layout: "layouts/main-layout",
    nama: "Rayhan",
    title: "Han",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "About",
  });
});

app.get("/product", (req, res) => {
  const product = [
    {
      product: "Telur",
      harga: 24.0,
      jumlah: "1kg",
    },
    {
      product: "Mentega",
      harga: 20.0,
      jumlah: "1kg",
    },
    {
      product: "Susu",
      harga: 21.0,
      jumlah: "2kg",
    },
  ];
  res.render("Product", {
    layout: "layouts/main-layout",
    title: "Product",
    product,
  });
});

app.use("/", (req, res) => {
  res.end("404 Not Found");
});

app.listen(port);
