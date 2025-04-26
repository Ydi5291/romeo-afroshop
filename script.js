document.addEventListener("DOMContentLoaded", function () {
  // Fonction pour ouvrir/fermer le menu burger
  window.toggleMenu = function () {
    const menu = document.getElementById('nav-menu').querySelector('ul');
    menu.classList.toggle('show');
  };

  // Liste des produits
  const products = [
    { image: "img/Früchte/Standort1.jpg", title: "Standort" },
    { image: "img/Früchte/Standort2.jpg", title: "Standort" },
    { image: "img/Früchte/Cosmetic.jpg", title: "Kosmetic" },
    { image: "img/Früchte/Alloco2.jpg", title: "kochbanane" },
    { image: "img/Früchte/Alloco1.jpg", title: "kochbanane" },
    { image: "img/Früchte/Schill.jpg", title: "Chili" },
    { image: "img/Früchte/Ignam.jpg", title: "Gemüse" },
    { image: "img/Früchte/Chips.jpg", title: "Chips" },
    { image: "img/Früchte/Chips2.jpg", title: "Chips" },
    { image: "img/Früchte/Cosmetic.jpg", title: "Lebensmitteln" },
    { image: "img/Früchte/Getränke.jpg", title: "Getränke" },
    { image: "img/Früchte/Guinness.jpg", title: "Getränke" }
  ];

  const productGrid = document.querySelector(".product-grid");

  // Création des cartes produits
  products.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <div class="product-image-container" data-index="${index}">
        <img src="${product.image}" alt="${product.title}" class="product-image">
        <div class="overlay">
          <div class="overlay-text">Mehr erfahren</div>
        </div>
      </div>
      <h3>${product.title}</h3>
    `;

    productGrid.appendChild(productCard);
  });

  // Créer un overlay général pour afficher l'image en grand
  const fullOverlay = document.createElement("div");
  fullOverlay.classList.add("full-overlay");
  fullOverlay.style.display = "none";
  fullOverlay.innerHTML = `
    <button class="prev-btn">←</button>
    <img src="" alt="Produit" class="full-image">
    <button class="next-btn">→</button>
    <button class="close-btn">×</button>
  `;
  document.body.appendChild(fullOverlay);

  const fullImage = fullOverlay.querySelector(".full-image");
  const prevBtn = fullOverlay.querySelector(".prev-btn");
  const nextBtn = fullOverlay.querySelector(".next-btn");
  const closeBtn = fullOverlay.querySelector(".close-btn");

  let currentIndex = 0;

  function openOverlay(index) {
    currentIndex = index;
    fullImage.src = products[currentIndex].image;
    fullOverlay.style.display = "flex";
  }

  function closeOverlay() {
    fullOverlay.style.display = "none";
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % products.length;
    fullImage.src = products[currentIndex].image;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + products.length) % products.length;
    fullImage.src = products[currentIndex].image;
  }

  // Event listeners
  document.querySelectorAll(".product-image-container").forEach(container => {
    container.addEventListener("click", function () {
      const index = parseInt(this.getAttribute("data-index"));
      openOverlay(index);
    });
  });

  nextBtn.addEventListener("click", showNext);
  prevBtn.addEventListener("click", showPrev);
  closeBtn.addEventListener("click", closeOverlay);
});




  
