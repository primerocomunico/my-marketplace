import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  /*catalogue: object = [
    {
      "id": 1,
      "name": "Home",
      "products": [{
        "name": "Mesita salón",
        "imageURL": "https://images-na.ssl-images-amazon.com/images/I/71sueHDmhjL._SL1500_.jpg",
        "price": 24,
        "unit": "$",
        "description": "Create the prefect living room space with this Furinno End Table with Bin. This end table will sit perfectly next to your chair or sofa and both beautiful and functional. Featuring one fabric drawer is perfect for keeping DVDs and remotes corralled, while an open shelf makes a marvelous spot to put a lush potted succulent on display. Rounded edge design prevents potential injuries. This storage end table is easy assembly with step by step instruction. Care instructions: wipe clean with clean damped cloth. Avoid using harsh chemicals. Pictures are for illustration purpose. All decor items are not included in this offer."
      },
      {
        "name": "Juego de cuchillos para cocina",
        "imageURL": "https://images-na.ssl-images-amazon.com/images/I/71OoifMpDUL._SL1500_.jpg",
        "price": 12,
        "unit": "$",
        "description": "Introducing the Cuisinart Classic Stainless Steel Cutlery 15-piece Block Set."

      },
      {
        "name": "Juego de sábanas",
        "imageURL": "https://images-na.ssl-images-amazon.com/images/I/41jyImOtR3L.jpg",
        "price": 15,
        "unit": "$",
        "description": "Create the luxury retreat you've always wanted in your own home with this Deluxe Hotel 1400 Series 300 Thread Count 100% Cotton Sateen Dobby Stripe Sheet Set. The softest sheets you will ever sleep on, they’re crafted out of 100% cotton sateen with a 300 thread count for increased durability and luxurious, soft comfort."
      },
      {
        "name": "Roomba aspiradora",
        "imageURL": "https://images-na.ssl-images-amazon.com/images/I/81Si0j-N4HL._SL1500_.jpg",
        "price": 150,
        "unit": "$",
        "description": "Rated Input Voltage: 100-120V AC 50/60 Hz Noise Level: Approx. 64 db. Charging Time: Approx. 3-4 hours Battery Capacity: Li-ion 2600 mAH Dust Bin Capacity: 300 mL Max Working Time Per Charge: Approx. 100 min Highly functional and easy-to-use cleaning solution for pet hair, dirt and other mess types."
      }
      ]
    },
    {
      "id": 2,
      "name": "Electronics",
      "products": [
        {
          "name": "Moto X (4th Generation)",
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/61TTEa57aTL._SL1500_.jpg",
          "price": 119,
          "unit": "$",
          "description": "Introducing Moto X4, a phone designed like no other, with the power of Amazon Alexa hands-free. Stay protected from splashes with IP68-rated water resistance. With an advanced 12 MP + 8 MP dual rear camera system, it’s made for taking your best photos ever. Incredibly sharp images in low light. Breathtaking wide angle shots. Even panoramic selfies with a 16 MP front camera. With a precision-crafted glass and metal design, it’s as beautiful as it is strong. Wherever life takes you, power through the day with a 3000 mAh battery and a fast octa-core processor. Enjoy intuitive Moto Experiences that make using Moto X4 easier and more fun. The new Moto X4, in a word, exceptional."
        },
        {
          "name": "Portátil Acer",
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/618oANL1phL._SL1500_.jpg",
          "price": 329,
          "unit": "$",
          "description": "The new Aspire E Series laptops provide a comprehensive range of choices for every-day users, with many appealing features and an attractive design. Incredible performance, fast 802.11ac wireless with new MU-MIMO technology and great battery life make the Aspire E series shine in any situation."
        },
        {
          "name": "SmartTV",
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/71JtICvRSTL._SL1500_.jpg",
          "price": 200,
          "unit": "$",
          "description": "Smart functionality delivers all your favorite content with over 500, 000 movies and TV episodes, accessible through the simple and intuitive Roku TV"
        }
      ]
    }, {
      "id": 3,
      "name": "Fashion",
      "products": [
        {
          "name": "Abrigo Mujer",
          "imageURL": "https://ae01.alicdn.com/kf/HTB1K5LmXOzxK1RjSspjq6AS.pXak/Seenimoe-2019-mujeres-Chaleco-de-invierno-Chaleco-de-algod-n-Chaleco-de-abrigo-de-mujer-de.jpg_640x640.jpg",
          "price": 15,
          "unit": "$",
          "description": "Seenimoe 2019 mujeres Chaleco de invierno Chaleco de algodón Chaleco de abrigo de mujer de Color sólido S-3XL mujer Top calidad chaleco chaqueta sin mangas"
        },
        {
          "name": "Chauqeta mujer",
          "imageURL": "https://ae01.alicdn.com/kf/HTB1.u.EOMHqK1RjSZFEq6AGMXXa7/DAJANE-locomotora-real-de-cuero-piel-de-oveja-de-mujer-de-cuero-de-la-motocicleta-chaqueta.jpg",
          "price": 86,
          "unit": "$",
          "description": "DAJANE locomotora real de cuero piel de oveja de mujer de cuero de la motocicleta chaqueta de niñas abrigo chaqueta de cuero real chelsea chaqueta"
        }, {
          "name": "Abrigo Mujer",
          "imageURL": "https://ae01.alicdn.com/kf/HTB1uRPkLG6qK1RjSZFmq6x0PFXa4/Las-mujeres-chaqueta-b-sica-abrigo-2019-mujer-Parkas-larga-con-capucha-abrigo-Parkas-abrigo-con.jpg",
          "price": 10,
          "unit": "$",
          "description": "Las mujeres chaqueta básica abrigo 2019 mujer Parkas larga con capucha abrigo Parkas abrigo con cremallera Botón de bocina prendas de piel elegante, casaco feminino 50"
        }
      ]
    }
  ]*/

  catalogue: object[] = [
    {
      "idProduct": 1,
      "category": "Home",
      "name": "Mesita salón",
      "imageURL": "https://images-na.ssl-images-amazon.com/images/I/71sueHDmhjL._SL1500_.jpg",
      "price": 24,
      "unit": "€",
      "description": "Create the prefect living room space with this Furinno End Table with Bin. This end table will sit perfectly next to your chair or sofa and both beautiful and functional. Featuring one fabric drawer is perfect for keeping DVDs and remotes corralled, while an open shelf makes a marvelous spot to put a lush potted succulent on display. Rounded edge design prevents potential injuries. This storage end table is easy assembly with step by step instruction. Care instructions: wipe clean with clean damped cloth. Avoid using harsh chemicals. Pictures are for illustration purpose. All decor items are not included in this offer."
    },
    {
      "idProduct": 2,
      "category": "Home",
      "name": "Juego de cuchillos para cocina",
      "imageURL": "https://images-na.ssl-images-amazon.com/images/I/71OoifMpDUL._SL1500_.jpg",
      "price": 12,
      "unit": "€",
      "description": "Introducing the Cuisinart Classic Stainless Steel Cutlery 15-piece Block Set."

    },
    {
      "idProduct": 3,
      "category": "Home",
      "name": "Juego de sábanas",
      "imageURL": "https://images-na.ssl-images-amazon.com/images/I/41jyImOtR3L.jpg",
      "price": 15,
      "unit": "€",
      "description": "Create the luxury retreat you've always wanted in your own home with this Deluxe Hotel 1400 Series 300 Thread Count 100% Cotton Sateen Dobby Stripe Sheet Set. The softest sheets you will ever sleep on, they’re crafted out of 100% cotton sateen with a 300 thread count for increased durability and luxurious, soft comfort."
    },
    {
      "idProduct": 4,
      "category": "Home",
      "name": "Roomba aspiradora",
      "imageURL": "https://images-na.ssl-images-amazon.com/images/I/81Si0j-N4HL._SL1500_.jpg",
      "price": 150,
      "unit": "€",
      "description": "Rated Input Voltage: 100-120V AC 50/60 Hz Noise Level: Approx. 64 db. Charging Time: Approx. 3-4 hours Battery Capacity: Li-ion 2600 mAH Dust Bin Capacity: 300 mL Max Working Time Per Charge: Approx. 100 min Highly functional and easy-to-use cleaning solution for pet hair, dirt and other mess types."
    },
    {
      "idProduct": 5,
      "category": "Electronics",
      "name": "Moto X (4th Generation)",
      "imageURL": "https://images-na.ssl-images-amazon.com/images/I/61TTEa57aTL._SL1500_.jpg",
      "price": 119,
      "unit": "$",
      "description": "Introducing Moto X4, a phone designed like no other, with the power of Amazon Alexa hands-free. Stay protected from splashes with IP68-rated water resistance. With an advanced 12 MP + 8 MP dual rear camera system, it’s made for taking your best photos ever. Incredibly sharp images in low light. Breathtaking wide angle shots. Even panoramic selfies with a 16 MP front camera. With a precision-crafted glass and metal design, it’s as beautiful as it is strong. Wherever life takes you, power through the day with a 3000 mAh battery and a fast octa-core processor. Enjoy intuitive Moto Experiences that make using Moto X4 easier and more fun. The new Moto X4, in a word, exceptional."
    },
    {
      "idProduct": 6,
      "category": "Electronics",
      "name": "Portátil Acer",
      "imageURL": "https://images-na.ssl-images-amazon.com/images/I/618oANL1phL._SL1500_.jpg",
      "price": 329,
      "unit": "$",
      "description": "The new Aspire E Series laptops provide a comprehensive range of choices for every-day users, with many appealing features and an attractive design. Incredible performance, fast 802.11ac wireless with new MU-MIMO technology and great battery life make the Aspire E series shine in any situation."
    },
    {
      "idProduct": 7,
      "category": "Electronics",
      "name": "SmartTV",
      "imageURL": "https://images-na.ssl-images-amazon.com/images/I/71JtICvRSTL._SL1500_.jpg",
      "price": 200,
      "unit": "$",
      "description": "Smart functionality delivers all your favorite content with over 500, 000 movies and TV episodes, accessible through the simple and intuitive Roku TV"
    },
    {
      "idProduct": 8,
      "category": "Fashion",
      "name": "Impermeable Mujer",
      "imageURL": "https://ae01.alicdn.com/kf/HTB1K5LmXOzxK1RjSspjq6AS.pXak/Seenimoe-2019-mujeres-Chaleco-de-invierno-Chaleco-de-algod-n-Chaleco-de-abrigo-de-mujer-de.jpg_640x640.jpg",
      "price": 15,
      "unit": "€",
      "description": "Seenimoe 2019 mujeres Chaleco de invierno Chaleco de algodón Chaleco de abrigo de mujer de Color sólido S-3XL mujer Top calidad chaleco chaqueta sin mangas"
    },
    {
      "idProduct": 9,
      "category": "Fashion",
      "name": "Chaqueta mujer",
      "imageURL": "https://ae01.alicdn.com/kf/HTB1.u.EOMHqK1RjSZFEq6AGMXXa7/DAJANE-locomotora-real-de-cuero-piel-de-oveja-de-mujer-de-cuero-de-la-motocicleta-chaqueta.jpg",
      "price": 86,
      "unit": "€",
      "description": "DAJANE locomotora real de cuero piel de oveja de mujer de cuero de la motocicleta chaqueta de niñas abrigo chaqueta de cuero real chelsea chaqueta"
    }, {
      "idProduct": 10,
      "category": "Fashion",
      "name": "Abrigo Mujer",
      "imageURL": "https://ae01.alicdn.com/kf/HTB1uRPkLG6qK1RjSZFmq6x0PFXa4/Las-mujeres-chaqueta-b-sica-abrigo-2019-mujer-Parkas-larga-con-capucha-abrigo-Parkas-abrigo-con.jpg",
      "price": 10,
      "unit": "€",
      "description": "Las mujeres chaqueta básica abrigo 2019 mujer Parkas larga con capucha abrigo Parkas abrigo con cremallera Botón de bocina prendas de piel elegante, casaco feminino 50"
    }
  ]


  constructor() { }
}
