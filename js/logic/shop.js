window.onload = function () {
  console.log("Hello from shop.js");
  renderProducts();
  document.getElementById("basic").addEventListener("change", sortOpt);
  document
    .getElementById("search_product")
    .addEventListener("keyup", (e) => serachProduct(e));
};

products = [
  {
    img: "images/img-pro-01.jpg",
    name: "Men Jacket",
    price: 20.5,
    gender: "m",
  },
  {
    img: "images/img-pro-02.jpg",
    name: "Women Dress",
    price: 36.99,
    gender: "f",
  },
  {
    img: "images/img-pro-03.jpg",
    name: "Women Bag",
    price: 99.99,
    gender: "f",
  },
];

allProducts = [
  {
    img: "images/img-pro-01.jpg",
    name: "Men Jacket",
    price: 20.5,
    gender: "m",
  },
  {
    img: "images/img-pro-02.jpg",
    name: "Women Dress",
    price: 36.99,
    gender: "f",
  },
  {
    img: "images/img-pro-03.jpg",
    name: "Women Bag",
    price: 99.99,
    gender: "f",
  },
];

function sortOpt() {
  const option = document.getElementById("basic").value;
  console.log(option);

  switch (option) {
    case "1":
      products.sort(() => 0.5 - Math.random());
      break;
    case "2":
      products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      break;
    case "3":
      products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      break;
    case "4":
      products.sort(() => 0.5 - Math.random());
      break;
    default:
      console.log("default");
      break;
  }

  renderProducts();
}

function renderProducts() {
  const row = document.getElementById("products__main");
  let renderHtml = "";
  products.forEach((product) => {
    const one = `
    <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
    <div class="products-single fix">
      <div class="box-img-hover">
        <div class="type-lb">
          <p class="sale">Sale</p>
        </div>
        <img
          src=${product.img}
          class="img-fluid"
          alt="Image"
        />
        <div class="mask-icon">
          <ul>
            <li>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="right"
                title="View"
                ><i class="fas fa-eye"></i
              ></a>
            </li>
            <li>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="right"
                title="Compare"
                ><i class="fas fa-sync-alt"></i
              ></a>
            </li>
            <li>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="right"
                title="Add to Wishlist"
                ><i class="far fa-heart"></i
              ></a>
            </li>
          </ul>
          <a class="cart" href="#">Add to Cart</a>
        </div>
      </div>
      <div class="why-text">
        <h4>${product.name}</h4>
        <h5>$ ${product.price}</h5>
      </div>
    </div>
    </div>`;

    renderHtml += one;
  });

  row.innerHTML = renderHtml;
}

function serachProduct(event) {
  let searchProduct = [];
  let query = event.target.value.toLowerCase();
  console.log(query);
  for (let i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase().includes(query)) {
      searchProduct.push(products[i]);
    }
  }
  products = searchProduct;
  if (query == "" || query == null) {
    products = allProducts;
  }
  renderProducts();
}

let html = `
<div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
<div class="products-single fix">
  <div class="box-img-hover">
    <div class="type-lb">
      <p class="sale">Sale</p>
    </div>
    <img
      src=${product.img}
      class="img-fluid"
      alt="Image"
    />
    <div class="mask-icon">
      <ul>
        <li>
          <a
            href="#"
            data-toggle="tooltip"
            data-placement="right"
            title="View"
            ><i class="fas fa-eye"></i
          ></a>
        </li>
        <li>
          <a
            href="#"
            data-toggle="tooltip"
            data-placement="right"
            title="Compare"
            ><i class="fas fa-sync-alt"></i
          ></a>
        </li>
        <li>
          <a
            href="#"
            data-toggle="tooltip"
            data-placement="right"
            title="Add to Wishlist"
            ><i class="far fa-heart"></i
          ></a>
        </li>
      </ul>
      <a class="cart" href="#">Add to Cart</a>
    </div>
  </div>
  <div class="why-text">
    <h4>${product.name}</h4>
    <h5>$ ${product.price}</h5>
  </div>
</div>
</div>`;
