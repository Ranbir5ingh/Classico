export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];
export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    name: "title",
    label: "Title",
    placeholder: "Enter product title",
    componentType: "input",
    type: "text",
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Enter product description",
    componentType: "textarea",
    type: "text",
  },
  {
    name: "category",
    label: "Category",
    options: [
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "kids", label: "Kids" },
      { id: "accessories", label: "Accessories" },
      { id: "footwear", label: "Footwear" },
    ],
    componentType: "select",
    type: "text",
  },
  {
    name: "brand",
    label: "Brand",
    options: [
      { id: "nike", label: "Nike" },
      { id: "adidas", label: "Adidas" },
      { id: "puma", label: "Puma" },
      { id: "levi", label: "Levi's" },
      { id: "zara", label: "Zara" },
      { id: "h&m", label: "H&M" },
    ],
    componentType: "select",
    type: "text",
  },
  {
    name: "price",
    label: "Price",
    placeholder: "Enter product price",
    componentType: "input",
    type: "number",
  },
  {
    name: "salePrice",
    label: "Sale Price",
    placeholder: "Enter sale price (optional)",
    componentType: "input",
    type: "number",
  },
  {
    name: "totalStock",
    label: "Total Stock",
    placeholder: "Enter total stock",
    componentType: "input",
    type: "number",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "men",
    label: "Men",
    path: "/shop/listing",
  },
  {
    id: "women",
    label: "Women",
    path: "/shop/listing",
  },
  {
    id: "accessories",
    label: "Accessories",
    path: "/shop/listing",
  },
  {
    id: "footwear",
    label: "Foot Wear",
    path: "/shop/listing",
  },
];

export const filterOptions = {
  category: [
    { id: "men", label: "Men" },
    { id: "women", label: "Women" },
    { id: "kids", label: "Kids" },
    { id: "accessories", label: "Accessories" },
    { id: "footwear", label: "Footwear" },
  ],
  brand: [
    { id: "nike", label: "Nike" },
    { id: "adidas", label: "Adidas" },
    { id: "puma", label: "Puma" },
    { id: "levi", label: "Levi's" },
    { id: "zara", label: "Zara" },
    { id: "h&m", label: "H&M" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },

  { id: "price-hightolow", label: "Price: High to Low" },

  { id: "title-atoz", label: "Title: A to Z" },

  { id: "title-ztoa", label: "Title: Z to A" },
];


export const addressFormControls = [
  {
    name: "address",
    label: "Address",
    placeholder: "Enter your address",
    componentType: "input",
    type: "text",
  },
  {
    name: "city",
    label: "City",
    placeholder: "Enter your city",
    componentType: "input",
    type: "text",
  },
  {
    name: "pincode",
    label: "Pincode",
    placeholder: "Enter your pincode",
    componentType: "input",
    type: "text",
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "Enter your phone number",
    componentType: "input",
    type: "text",
  },
  {
    name: "notes",
    label: "Notes",
    placeholder: "Enter any additional notes",
    componentType: "textarea",
    type: "text",
  },
];