const products = [
  {
    name: "Laptop",
    description: "Powerful laptop for all your computing needs.",
    price: 999.99,
  },
  {
    name: "Headphones",
    description: "High-quality headphones for immersive audio experience.",
    price: 79.99,
  },
  {
    name: "Smartphone",
    description: "Advanced smartphone with cutting-edge features.",
    price: 699.99,
  },
  {
    name: "Tablet",
    description: "Portable tablet for entertainment and productivity.",
    price: 449.99,
  },
  {
    name: "Smartwatch",
    description: "Stay connected and track your fitness with this smartwatch.",
    price: 249.99,
  },
  {
    name: "Gaming Console",
    description: "Experience the thrill of gaming with this powerful console.",
    price: 399.99,
  },
  {
    name: "Camera",
    description: "Capture life's moments with stunning clarity and detail.",
    price: 599.99,
  },
  {
    name: "Wireless Speaker",
    description: "Enjoy your favorite music wirelessly with this speaker.",
    price: 129.99,
  },
  {
    name: "External Hard Drive",
    description: "Expand your storage and backup your files with ease.",
    price: 129.99,
  },
  {
    name: "Wireless Mouse",
    description: "Navigate your computer with precision and comfort.",
    price: 29.99,
  },
  {
    name: "Printer",
    description: "Print documents and photos with exceptional quality.",
    price: 199.99,
  },
  {
    name: "Desk Lamp",
    description: "Illuminate your workspace with adjustable brightness.",
    price: 49.99,
  },
  {
    name: "Fitness Tracker",
    description: "Monitor your health and track your workouts.",
    price: 79.99,
  },
  {
    name: "Bluetooth Earbuds",
    description: "Wireless earbuds for on-the-go audio enjoyment.",
    price: 99.99,
  },
  {
    name: "Portable Charger",
    description: "Charge your devices anywhere, anytime.",
    price: 39.99,
  },
  {
    name: "USB Flash Drive",
    description: "Store and transfer your files conveniently.",
    price: 19.99,
  },
  {
    name: "Monitor",
    description: "Upgrade your display for enhanced productivity.",
    price: 299.99,
  },
  {
    name: "Keyboard",
    description: "Type comfortably with this reliable keyboard.",
    price: 49.99,
  },
  {
    name: "Computer Mousepad",
    description: "Enhance your mouse precision with this smooth pad.",
    price: 9.99,
  },
  {
    name: "Graphic Tablet",
    description: "Express your creativity with this digital drawing tablet.",
    price: 199.99,
  },
  {
    name: "Wireless Router",
    description: "Fast and reliable internet connection for your home network.",
    price: 79.99,
  },
];

let div = document.querySelector("#div");

for (i = 0; i < products.length; i++) {
  div.innerHTML += `<div onclick="myFunct(${i})" class="card cards" style="width: 18rem;">
  <div class="card-body">
   <h6 class="card-title text-dark">Product: ${products[i].name}</h6>
   <h6 class="card-text text-primary">Description: ${products[i].description}</h6>
    <h6 class="card-title text-danger">Price: ${products[i].price}$</h6>
  </div>
</div>`;

  function myFunct(index) {
    console.log(`Product:${products[index].name}
Description:${products[index].description}
Price:${products[index].price} `);
  }
}
