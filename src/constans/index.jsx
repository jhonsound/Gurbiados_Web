import burgerOne from "../assets/burger-one.png";
import burgerTwo from "../assets/burger-two.png";
import pizzaOne from "../assets/pizza-one.png";
import buritto from "../assets/buritto.png";
import combo1 from "../assets/combo1.svg";
import combo2 from "../assets/combo2.png";
import burguer1 from "../assets/amburger1.png";
import burguer2 from "../assets/burguer2.png";
import pizza1 from "../assets/pizzas/pizza1.png";
import pizza2 from "../assets/pizzas/pizza2.png";
import pizza3 from "../assets/pizzas/pizza3.png";
import pizza4 from "../assets/pizzas/pizza4.png";
import pizza5 from "../assets/pizzas/pizza5.png";
import burrito1 from "../assets/burritos/burrito1.png";
import burrito2 from "../assets/burritos/burrito2.png";
import burrito3 from "../assets/burritos/burrito3.png";
import burrito4 from "../assets/burritos/burrito4.png";
import burrito5 from "../assets/burritos/burrito5.png";

export const products = [
  {
    id: 1,
    title: "SUMMER COMBO",
    image: burgerOne,
    color: "#D33B0D",
    description:
      "¡Disfruta del combo perfecto para el verano con una hamburguesa jugosa y papas fritas crujientes!",
    price: 50000,
    galery: [combo1, combo2],
  },
  {
    id: 2,
    title: "BURGER BASH",
    image: burgerTwo,
    color: "#DF5A0C",
    description:
      "Una explosión de sabor con esta hamburguesa clásica, ideal para los amantes de la carne.",
    price: 50000,
    galery: [burguer1, burguer2],
  },
  {
    id: 3,
    title: "PIZZA PARTY",
    image: pizzaOne,
    color: "#084137",
    description:
      "La pizza ideal para compartir con amigos, con una deliciosa combinación de quesos y pepperoni.",
    price: 50000,
    galery: [pizza1, pizza3, pizza2, pizza4, pizza5],
  },
  {
    id: 4,
    title: "BURRITO DELIGHT",
    image: buritto,
    color: "#EB920C",
    description:
      "Un burrito relleno de los ingredientes más frescos y un toque de picante para una experiencia inolvidable.",
    price: 50000,
    galery: [burrito1, burrito2, burrito3, burrito4, burrito5],
  },
];

export const menuItems = [
  { text: "Inicio", path: "/" },
  /* { text: "Catalogo", path: "/catalog" },
  { text: "Servicios", path: "/services" }, 
  { text: "Contacto", path: "/contact" },*/
  { text: "Clientes", path: "/clients" },
  { text: "Acerca de", path: "/about" },
];
