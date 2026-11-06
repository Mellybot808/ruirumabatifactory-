const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  mainNav.classList.toggle("is-open", !isOpen);
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    mainNav.classList.remove("is-open");
  });
});

const promoSlides = [
    {
      name: "Flexible payment plans",
      image: "e26807_2e1379017c25475d9a04d93f0f0f7fb6~mv2.png",
    },
    {
      name: "48 hour delivery available",
      image: "e26807_a59725bdb63a40899b1c3816d4715872~mv2.png",
    },
    {
      name: "Get a discounted quote",
      image: "e26807_1ba7e6c96026428bafaf4e953bb92576~mv2.png",
    },
    {
      name: "Quality building materials",
      image: "e26807_327aca1e65ee4c75be1265befb23b4e4~mv2.png",
    },
    {
      name: "Get quality mabati",
      image: "e26807_34b9d031b79d4330ae4b49905956a07b~mv2.png",
    },
];

const slideContainer = document.querySelector(".hero-slides");
const slideControls = document.querySelector(".hero-slide-controls");
let activeSlide = 0;

promoSlides.forEach((slide, index) => {
    const image = document.createElement("img");
    image.className = "hero-slide";
    image.src = `https://static.wixstatic.com/media/${slide.image}`;
    image.alt = slide.name;
    image.decoding = "async";
    image.fetchPriority = index === 0 ? "high" : "auto";
    image.classList.toggle("is-active", index === 0);
    image.classList.toggle("hero-slide-delivery", slide.name === "48 hour delivery available");
    slideContainer.append(image);

    const control = document.createElement("button");
    control.className = "hero-slide-dot";
    control.type = "button";
    control.setAttribute("aria-label", `Show ${slide.name}`);
    control.setAttribute("aria-pressed", String(index === 0));
    control.addEventListener("click", () => showSlide(index));
    slideControls.append(control);
});

function showSlide(index) {
    activeSlide = index;
    slideContainer.querySelectorAll(".hero-slide").forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === index);
    });
    slideControls.querySelectorAll(".hero-slide-dot").forEach((dot, dotIndex) => {
      dot.setAttribute("aria-pressed", String(dotIndex === index));
    });
}

const slideTimer = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? null
    : window.setInterval(() => {
      showSlide((activeSlide + 1) % promoSlides.length);
    }, 5000);

const catalogProducts = [
    ["Zentile Glossy Green", "Ksh 650.00", "1Meter", "e26807_7196753f262241f0bba695e71053180b~mv2.webp", "roofing"],
    ["Dumuzas Mabati", "Ksh 270.00", "1Meter", "e26807_d4050bba745348d4a5e7fc839132cbab~mv2.jpg", "roofing"],
    ["Box Profile Reject", "Ksh 200.00", "1Meter", "e26807_9258e81409a14b6d9eef7ee9fe45ae30~mv2.webp", "roofing"],
    ["Romantile Glossy Finish", "Ksh 550.00", "1Meter", "e26807_f1b9d8445a5340f4abae2e6363161a27~mv2.webp", "roofing"],
    ["Romantile Matte Finish", "Ksh 650.00", "1Meter", "e26807_41c3eb5755074a8eb129d9ff7bcb5e2d~mv2.webp", "roofing"],
    ["Corrugated Colored Mabati Glossy", "Ksh 315.00", "1Meter", "e26807_30f1a33ec4bf4987ad1ed1f37300b216~mv2.webp", "roofing"],
    ["Corrugated Colored Mabati Matte", "Ksh 350.00", "", "e26807_a9de042495fc43dc8627831972221a1f~mv2.jpg", "roofing"],
    ["Box Profile Glossy White", "Ksh 420.00", "1Meter", "e26807_bc64bf89729f48a5a6f0649b154f6dda~mv2.webp", "roofing"],
    ["Box Profile Reject Uncolored", "Ksh 180.00", "", "e26807_503355d8360c4026a9042644e8f7bef4~mv2.webp", "roofing"],
    ["Box Profile Roofing Sheets Matte", "Ksh 520.00", "1Meter", "e26807_d56029d1c1fe431db5940360c2f910c2~mv2.webp", "roofing"],
    ["Box Profile Roofing Sheets Glossy", "Ksh 420.00", "1Meter", "e26807_93ada0413ad34d8c8e4bab3fb50b1261~mv2.webp", "roofing"],
    ["Versatile Roofing Sheets Glossy", "Ksh 650.00", "1Meter", "e26807_c44262907bf04111a70b5ba558e4c54c~mv2.webp", "roofing"],
    ["Versatile Roofing Sheets Matte", "Ksh 550.00", "1Meter", "e26807_730abcb6c24b45e5aefeb5c2d83a4c14~mv2.webp", "roofing"],
    ["Reject Mabati Colored Corrugated", "Ksh 200.00", "1Meter", "e26807_646ad73f8aaf45898c430b48362995d8~mv2.jpg", "roofing"],
    ["Chainlink", "Ksh 5,500.00", "1 Roll", "e26807_715eac837a6c49e4a3ce08f8f5f9568f~mv2.jpg", "accessories"],
    ["Chicken Wire Mesh", "Ksh 2,500.00", "1 Roll", "e26807_5e25f31dcde847f7bf52939fa62b0b4c~mv2.jpg", "accessories"],
    ["U-Nails", "Ksh 220.00", "1Kg", "e26807_028d0c212c61498e880b9ed38ad63178~mv2.jpg", "accessories"],
    ["Bubble Foil", "Ksh 6,500.00", "1.2m x 30m", "e26807_c2cebaf32310440ca2fde3b9adaa7a44~mv2.jpg", "accessories"],
    ["Sisalation", "Ksh 7,500.00", "1.2m x 30m", "e26807_28d362380b7c4a58adfe56fdfc083a54~mv2.jpg", "accessories"],
    ["Double Bubble Foil 1Roll", "Ksh 8,500.00", "1.2m x 30m", "e26807_d9fd7b1af722475285e70db6a389c8e9~mv2.jpg", "accessories"],
    ["Polycarbonate 2mm", "Ksh 1,167.00", "1.05m", "e26807_e69ddfb3f41b447c8bacd8b01b24fd05~mv2.jpeg", "accessories"],
    ["Polycarbonate 3mm", "Ksh 1,500.00", "1.05m", "e26807_1ba4594048ff4c2da05225aa26a26b4e~mv2.jpeg", "accessories"],
    ["Polycarbonate 4mm sheet", "Ksh 1,833.00", "1.05m", "e26807_62bd729b2be04d0c9b209bb77b77974a~mv2.jpg", "accessories"],
    ["Box Profile Matte", "Ksh 480.00", "", "e26807_8375d2cd3204404ea37e633c37ead69b~mv2.webp", "roofing"],
    ["Box Profile Glossy", "Ksh 420.00", "", "e26807_448dbef5ed914cf7af4a65a80ec3c573~mv2.webp", "roofing", "On Sale"],
    ["Star Tile Charcoal Grey Gloss 30 Gauge 1Meter", "Ksh 620.00", "", "e26807_1022c82c8c2e476e8a6580ea8580d766~mv2.webp", "roofing"],
    ["Binding Wire 1Roll (25Kgs)", "Ksh 4,800.00", "", "e26807_3b2be9b39015419db34359fa89326ac1~mv2.webp", "accessories"],
    ["Ordinary Nails 1Kg", "Ksh 95.00", "", "e26807_ca79b28ea8b144b6a0f9973a292d1799~mv2.webp", "accessories", "Best Deals"],
    ["Roofing Nails 1Kg", "Ksh 180.00", "", "e26807_1b53fbe79d5e4a1d94c7218eb763f5f1~mv2.jpg", "accessories"],
    ["Europe Tile Matte Red G30 1Meter", "Ksh 550.00", "", "e26807_466d162c3c3f42e4a0699985be96edec~mv2.jpg", "roofing", "5% Discount"],
];

const catalogGrid = document.querySelector("#catalog-products");
const categoryFilter = document.querySelector("#catalog-category");
const sortFilter = document.querySelector("#catalog-sort");
const catalogCount = document.querySelector("#catalog-count");

function renderCatalog() {
    const category = categoryFilter.value;
    const sort = sortFilter.value;
    const products = catalogProducts
      .filter((product) => category === "all" || product[4] === category)
      .slice();

    if (sort !== "featured") {
      products.sort((a, b) => {
        const priceA = Number(a[1].replace(/[^\d.]/g, ""));
        const priceB = Number(b[1].replace(/[^\d.]/g, ""));
        return sort === "price-low" ? priceA - priceB : priceB - priceA;
      });
    }

    catalogGrid.replaceChildren(...products.map((product) => {
      const [name, price, unit, image, , badge] = product;
      const card = document.createElement("article");
      card.className = "catalog-card";
      const flag = badge ? `<span class="catalog-badge">${badge}</span>` : "";
      const unitLabel = unit ? `<span class="catalog-unit">${unit}</span>` : "";
      card.innerHTML = `
        <a class="catalog-image" href="https://wa.me/254100370292" target="_blank" rel="noreferrer" aria-label="Order ${name} on WhatsApp">
          ${unitLabel}${flag}
          <img src="https://static.wixstatic.com/media/${image}" alt="${name}" loading="lazy" decoding="async">
        </a>
        <div class="catalog-card-details">
          <h3>${name}</h3>
          <span class="catalog-price-label">Price</span>
          <strong class="catalog-price">${price}</strong>
          <a class="catalog-order" href="https://wa.me/254100370292" target="_blank" rel="noreferrer">Order Now</a>
        </div>
      `;
      return card;
    }));
    catalogCount.textContent = `${products.length} products`;
}

categoryFilter.addEventListener("change", renderCatalog);
sortFilter.addEventListener("change", renderCatalog);
renderCatalog();

document.querySelectorAll("[data-product]").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelector("#quote-product").value = link.dataset.product;
  });
});

document.querySelector("#quote-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const details = [
    "Hello Ruiru Mabati Factory, I would like a quote.",
    `Name: ${form.get("name")}`,
    `Phone: ${form.get("phone")}`,
    `Product: ${form.get("product")}`,
    form.get("message") ? `Project details: ${form.get("message")}` : "",
  ].filter(Boolean).join("\n");

  window.open(`https://wa.me/254100370292?text=${encodeURIComponent(details)}`, "_blank", "noopener,noreferrer");
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
