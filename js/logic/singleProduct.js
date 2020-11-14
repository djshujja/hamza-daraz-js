window.onload = function () {
  renderProduct();
  price();

  //   document.getElementById("product_qty").addEventListener("change", price());
};

let product = {
  name: "Jacket",
  oldPrice: 65.34,
  price: 50.22,
  stock: 10,
  sold: 5,
  desc: "It's a pretty good Jacket!",
  img_1: "images/big-img-01.jpg",
  img_2: "images/big-img-02.jpg",
  img_3: "images/big-img-03.jpg",
};

function renderProduct() {
  let sliderHtml = `  <div
    id="carousel-example-1"
    class="single-product-slider carousel slide"
    data-ride="carousel"
  >
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <img
          class="d-block w-100"
          src=${product.img_1}
          alt="First slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src=${product.img_2}
          
          alt="Second slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src=${product.img_3}
          
          alt="Third slide"
        />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carousel-example-1"
      role="button"
      data-slide="prev"
    >
      <i class="fa fa-angle-left" aria-hidden="true"></i>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carousel-example-1"
      role="button"
      data-slide="next"
    >
      <i class="fa fa-angle-right" aria-hidden="true"></i>
      <span class="sr-only">Next</span>
    </a>
    <ol class="carousel-indicators">
      <li
        data-target="#carousel-example-1"
        data-slide-to="0"
        class="active"
      >
        <img
          class="d-block w-100 img-fluid"
          src="images/smp-img-01.jpg"
          alt=""
        />
      </li>
      <li data-target="#carousel-example-1" data-slide-to="1">
        <img
          class="d-block w-100 img-fluid"
          src="images/smp-img-02.jpg"
          alt=""
        />
      </li>
      <li data-target="#carousel-example-1" data-slide-to="2">
        <img
          class="d-block w-100 img-fluid"
          src="images/smp-img-03.jpg"
          alt=""
        />
      </li>
    </ol>
  </div>`;

  let html = ` 
    <div class="single-product-details">
      <h2>${product.name}</h2>
      <h5><del>$ ${product.oldPrice}</del> $ <span id="unitPrice">${product.price}</span></h5>
      <p class="available-stock">
        <span> More than ${product.stock} available / <a href="#">${product.sold} sold </a></span>
      </p>
      <p></p>
      <h4>Short Description:</h4>
      <p>
        ${product.desc}
      </p>
      <ul>
        <li>
          <div class="form-group size-st">
            <label class="size-label">Size</label>
            <select
              id="basic"
              class="selectpicker show-tick form-control"
            >
              <option value="0">Size</option>
              <option value="0">S</option>
              <option value="1">M</option>
              <option value="1">L</option>
              <option value="1">XL</option>
              <option value="1">XXL</option>
              <option value="1">3XL</option>
              <option value="1">4XL</option>
            </select>
          </div>
        </li>
        <li>
          <div class="form-group quantity-box">
            <label class="control-label">Quantity</label>
            <input
              id="product_qty"
              class="form-control"
              value="0"
              min="1"
              max="${product.stock}"
              type="number"
            />
          </div>
        </li>
        <li>
          <strong>Total Price: $<span id="myPrice">0</span> </strong>
        </li>
      </ul>

      <div class="price-box-bar">
        <div class="cart-and-bay-btn">
          <a class="btn hvr-hover" data-fancybox-close="" href="#"
            >Buy New</a
          >
          <a class="btn hvr-hover" data-fancybox-close="" href="#"
            >Add to cart</a
          >
        </div>
      </div>

      <div class="add-to-btn">
        <div class="add-comp">
          <a class="btn hvr-hover" href="#"
            ><i class="fas fa-heart"></i> Add to wishlist</a
          >
          <a class="btn hvr-hover" href="#"
            ><i class="fas fa-sync-alt"></i> Add to Compare</a
          >
        </div>
        <div class="share-bar">
          <a class="btn hvr-hover" href="#"
            ><i class="fab fa-facebook" aria-hidden="true"></i
          ></a>
          <a class="btn hvr-hover" href="#"
            ><i class="fab fa-google-plus" aria-hidden="true"></i
          ></a>
          <a class="btn hvr-hover" href="#"
            ><i class="fab fa-twitter" aria-hidden="true"></i
          ></a>
          <a class="btn hvr-hover" href="#"
            ><i class="fab fa-pinterest-p" aria-hidden="true"></i
          ></a>
          <a class="btn hvr-hover" href="#"
            ><i class="fab fa-whatsapp" aria-hidden="true"></i
          ></a>
        </div>
      </div>
    </div>
  `;
  document.getElementById("singleProduct").innerHTML = html;
  document.getElementById("singleProductSlider").innerHTML = sliderHtml;
}

function price() {
  const unitPrice = document.getElementById("unitPrice").innerText;
  const qty = document.getElementById("product_qty");
  const cleanedPrice = unitPrice;
  console.log(cleanedPrice);
  qty.addEventListener("change", () => {
    const total_price = cleanedPrice * qty.value;
    document.getElementById("myPrice").innerText = parseFloat(total_price);
  });
}
