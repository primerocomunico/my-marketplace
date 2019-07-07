// Importar
const fileSystem = require('fs');
const process = require('process');
// Librería express
const express = require('express');
// Parcear el body de la llamada
const parser = require('body-parser');
// Función para generar hash
const bcrypt = require('bcrypt');
// Obtener un json web token
const jwt = require('jsonwebtoken');
// Obtiene y compara el header de web token
const jwtHeader = require('express-jwt');
// Pone colors en la consola
const colors = require('colors');

// VARIABLES GLOBALES
// Variable para hacer mix con el username (TOKEN)
let jwtClaveRaw = fileSystem.readFileSync('secrets.json');
let jwtClave = JSON.parse(jwtClaveRaw);
let miClave = jwtClave["jwt_key"];
// Variable de los datos del new users
let dataUsers = [];
// Variable de los datos de productos
let dataProducts = [];

// Crear la app
const app = express();

// Configurar middleware
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  } else {
    next();
  }
};
app.use(allowCrossDomain);

app.use(parser.json());
// unless sirve para indicar que esas rutas no deba confirmar el token
app.use(jwtHeader({
  secret: miClave
}).unless({
  path: ['/login', '/register']
}));

// Cogemos el argumento como puerto
//let puerto = process.argv[2];

///////////////////////////////////////////
// AUTENTIFICACIÓN

// Función para leer el archivo users.json
function readUsers() {
  let leer = fileSystem.readFileSync('users.json');
  // Convertir JSON a objeto
  let data = JSON.parse(leer);
  dataUsers = data;
}

// Función para sobreescribir el archivo users.json con el nuevo user
function saveUsers() {
  // Convertir objeto a json
  let data = JSON.stringify(dataUsers);
  fileSystem.writeFileSync('users.json', data);
}

// Crear un register
app.post('/register', function(req, res) {
  console.log(`Registrando el usuario ${req.body.username}`.yellow);
  readUsers();
  let hash = bcrypt.hashSync(req.body.password, 10)
  let userExist = false;
  let controlUser;
  res.setHeader('Allow-Control-Allow-Origin', '*');
  for (var i = 0; i < dataUsers.length; i++) {
    if (req.body.username == dataUsers[i]["username"]) {
      userExist = true
      controlUser = dataUsers[i]["username"]
      console.log(dataUsers);
    }
  }
  if (userExist == true) {
    res.send({
      "userExists": `The user ${controlUser} already exist`
    });
    console.log(`The user ${req.body.username} already exist`.yellow);
  } else {
    dataUsers.push({
      "username": req.body.username,
      "password": hash
    });
    saveUsers();
    res.send({
      "newUser": `The user ${req.body.username} has been created`
    });
  }
})

// Acceso login
app.post('/login', function(req, res) {
  console.log(`Ha accedido el usuario ${req.body.username}`.yellow);
  readUsers();

  let userExist = false;
  for (var i = 0; i < dataUsers.length; i++) {
    if (bcrypt.compareSync(req.body.password, dataUsers[i]["password"]) && dataUsers[i]["username"] == req.body.username) {
      userExist = true;
    }
  }
  if (userExist == true) {
    let token = jwt.sign({
      username: req.body.username
    }, miClave);
    res.send({
      "token": token
    });
  } else {
    res.send({
      "wrong": "Wrong user or password"
    })
  }
})

/////////////////////////////////////////
// CONFIGURAR RUTAS TIENDA

// Función para leer el archivo products.json
function readProducts() {
  let leer = fileSystem.readFileSync('products.json');
  // Convertir JSON a objeto
  let data = JSON.parse(leer);
  dataProducts = data;
}

// Función para sobreescribir el archivo products.json con el nuevo producto
function saveProducts() {
  // Convertir objeto a json
  let data = JSON.stringify(dataProducts);
  fileSystem.writeFileSync('products.json', data);
}

// Petición GET de todos los productos
app.get('/products', function(req, res) {
  console.log("Alguien accedió a /products".yellow);
  readProducts();
  res.setHeader('Allow-Control-Allow-Origin', '*');
  res.send(dataProducts);
})

// Petición GET de un único producto
app.get('/product/:id', function(req, res) {
  console.log(`Alguien accedió a /product ${req.params.id}`.yellow);
  readProducts();
  res.setHeader('Allow-Control-Allow-Origin', '*');
  let miProducto = {};
  for (var i = 0; i < dataProducts.length; i++) {
    if (dataProducts[i]["idProduct"] == req.params.id) {
      miProducto = dataProducts[i];
      break;
    }
  }
  // Trabajar un if en un object vacío
  if (Object.keys(miProducto).length === 0 && miProducto.constructor === Object) {
    miProducto = {
      "noProduct": "This product doesn't exists"
    }
  }
  res.send(miProducto);
})

// Petición POST para publicar nuevos productos
app.post('/newproduct', function(req, res) {

  function checkInput() {
    console.log(req.body);
    if (req.body.productName == " " || req.body.currency == " " || req.body.price == " " || req.body.description == " " || req.body.imageURL == " " || req.body.category == " " ||
      !req.body.productName || !req.body.currency || !req.body.price || !req.body.description || !req.body.imageURL || !req.body.category) {
      return false;
    } else {
      return true;
    }
  }
  // Variable para confirmar productos
  const isDataValid = checkInput();

  if (isDataValid === true) {
    console.log(`Registrando el producto nuevo ${req.body.productName}`.yellow);
    readProducts();
    let productExist = false;
    for (var i = 0; i < dataProducts.length; i++) {
      if (req.body.productName == dataProducts[i]["productName"]) {
        productExist = true
      }
    }
    if (productExist === true) {
      res.send({
        "warning": `The product ${req.body.productName} already exists`
      });
      console.log(`The product ${req.body.productName} already exists`.red);
    } else {
      dataProducts.push({
        "idProduct": (dataProducts.length) + 1,
        "productName": req.body.productName,
        "category": req.body.category,
        "imageURL": req.body.imageURL,
        "description": req.body.description,
        "price": req.body.price,
        "currency": req.body.currency
      });
      saveProducts();
      res.send({
        "success": `The product ${req.body.productName} had been created`
      });
      console.log(`New product called ${req.body.productName} was created`.yellow)
    }
  } else {
    res.send({
      "error": `It can not be empty data. Product rejected`
    });
    console.log(`There is empty data. Product rejected`.red);
  }
})

app.delete('/delete/:id', function(req, res) {
  readProducts();
  let productName;
  for (var i = 0; i < dataProducts.length; i++) {
    if (dataProducts[i]["idProduct"] == req.params.id) {
      productName = dataProducts[i]["productName"];
      dataProducts.splice(i, 1);
    }
  }
  saveProducts();
  console.log(`Has been deleted the product ${req.params.id}`);
  res.send({
    "delete": `The product ${productName} has been eliminated`
  });
})

/*app.put('/edit/:id', function(req, res) {
  readProducts();
  // ¿Cómo se puede sustituir un objeto por otro?
  dataProducts.splice("productID":req.params.id, 0, {
    "productID": req.params.id,
    "productName": req.body.productName,
    "quantity": req.body.quantity,
    "price": req.body.price
  });
  saveProducts();
  console.log(`The user ${req.body.username} had modified the product ${req.params.id}`);
  res.send(`The product ${req.params.id} has been modified`);
})*/

/*dataProducts.push({
  "productID": req.params.id,
  "productName": req.body.productName,
  "quantity": req.body.quantity,
  "price": req.body.price
})*/

// Activar servidor
console.log('Listening on port ' + '3001'.green);
app.listen(3001);
//
