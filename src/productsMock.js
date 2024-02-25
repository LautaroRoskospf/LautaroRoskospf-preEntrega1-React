export let products = [
  {
    id: 1,
    title: "Kone Air",
    price: 4000,
    description:
      "Conectividad inalámbrica o Bluetooth estelar de 2,4 GHz para juegos, Forma ergonómica con empuñaduras laterales de goma de doble inyección, 17 entradas programables",
    img: "https://res.cloudinary.com/dslgzt7p3/image/upload/v1707400995/samples/Kone-Air_BLK_top_2.5x_550x534_p1mhyp.webp",
    stock: 6,
    category: "mouses",
  },
  {
    id: 2,
    title: "Kone XP",
    price: 5000,
    description:
      "Forma refinada de Kone con diseño de múltiples botones, 15 botones programables con 29 funciones posibles, Iluminación 3D RGB con 22 LED, Cable PhantomFlex™ ligero y flexible",
    img: "https://res.cloudinary.com/dslgzt7p3/image/upload/v1707400996/samples/KoneXP_BLK_top_2.5x_550x534_u3wp2z.webp",
    stock: 5,
    category: "mouses",
  },
  {
    id: 3,
    title: "Kone Pro Dr",
    price: 7000,
    description:
      "Forma ergonómica icónica refinada a la perfección, Carcasa extremadamente ligera, Cable PhantomFlex™, Deslizadores de PTFE puro tratados térmicamente, Interruptor óptico Titan. Táctil y rápido    ",
    img: "https://res.cloudinary.com/dslgzt7p3/image/upload/v1707400996/samples/Topshot_Kone-Pro_Doc-Edition_550x534_zest2p.webp",
    stock: 3,
    category: "mouses",
  },
  {
    id: 4,
    title: "Vulcan II",
    price: 4500,
    description:
      "Interruptores mecánicos lineales TITAN II RED, Controles multimedia dedicados y botón de volumen para silenciar, Placa superior de aluminio duradera, Rollover completo de n-key y anti-ghosting",
    img: "https://res.cloudinary.com/dslgzt7p3/image/upload/v1707401000/samples/Vulcan-II-BLK-US_2x_0f8e13fe-a60c-4b2b-a214-3572e945823d_550x534_siggiq.webp",
    stock: 4,
    category: "keyboards",
  },
  {
    id: 5,
    title: "Magma Mini",
    price: 5000,
    description:
      "El factor de forma Mini 60% libera espacio en su escritorio, Teclas de membrana silenciosas, rápidas y receptivas, Iluminación vibrante AIMO™ RGB, 20KRO y anti-ghosting avanzado",
    img: "https://res.cloudinary.com/dslgzt7p3/image/upload/v1707400995/samples/MagmaMini-US_2x_a096c3b0-b340-41d7-8094-e4c11ae8890c_550x534_pabns7.webp",
    stock: 3,
    category: "keyboards",
  },
  {
    id: 6,
    title: "Vulcan TKL Pro",
    price: 8000,
    description:
      "Diseño galardonado ahora en formato sin teclas, Titan Switch Optical: velocidad óptica, sensación mecánica, Controles multimedia estilo mezclador, Cable USB-C trenzado desmontable",
    img: "https://res.cloudinary.com/dslgzt7p3/image/upload/v1707400997/samples/Topshot_Vulcan-TKL-Pro_Doc-Edition_550x534_oodeyd.webp",
    stock: 2,
    category: "keyboards",
  },
  {
    id: 7,
    title: "Syn Max Air",
    price: 7000,
    description:
      "Audio 3D inmersivo con controladores Nanoclear™ de 50 mm, Micrófono TruSpeak™ desmontable y abatible para silenciarlo para una comunicación nítida, Construcción de aluminio duradera y liviana",
    img: "https://res.cloudinary.com/dslgzt7p3/image/upload/v1707400996/samples/Syn-Max-Air_2x_6e3a7dce-29fb-451c-ba58-b0bd016e3bdc_550x534_j1velc.webp",
    stock: 4,
    category: "headphones",
  },
  {
    id: 8,
    title: "Elo 7.1 USB",
    price: 9500,
    description:
      "Diadema metálica autoajustable, Audio de sonido envolvente 7.1 excepcional, Tecnología de micrófono TruSpeak cristalina, Iluminación inteligente RGB vívida AIMO",
    img: "https://res.cloudinary.com/dslgzt7p3/image/upload/v1707400995/samples/Elo-USB_2x_c589243e-adbf-4d51-8bf0-5e4bac65520b_550x534_hfp9k6.webp",
    stock: 3,
    category: "headphones",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    } else {
      reject("No se encuentran productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`Producto ${id} no encontrado`);
        }
      }, 1000);
    } else {
      reject("No se encuentra el producto seleccionado");
    }
  });
};
