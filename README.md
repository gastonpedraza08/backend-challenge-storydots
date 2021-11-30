<div id="top"></div>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://storydots.app/">
    <img src="https://storydots.app/static/media/storydots-logo.9bbcdeaa.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">StoryDots Challenge</h3>

  <p align="center">
    Backend de mi solución para el Coding Challenge Full Stack Developer de StoryDots!
    <br />
    <a href="https://github.com/gastonpedraza08/frontend-challenge-storydots"><strong>Ir al frontend »</strong></a>
    <br />
    <br />
    <a href="https://gastonpedraza-ecommerce.herokuapp.com">API</a>
    <!--
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a> -->
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Este proyecto es parte del Coding Challenge Full Fullstack Developer de StoryDots!
La consigna se trataba de crear un simple ecommerce que permitiera visualizar los productos y además administrarlos desde un panel de administración.

Para desarrollar este proyecto utilice un ORM como sequelize, que me permite migrar de bases de datos relacionales de una manera muy facil y rapida.

Además las imágenes son almacenadas en el s3 de aws.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

Estas son las tecnologías con las cuales decidi construir el backend.

* [Node.js](https://nodejs.org/es/)
* [aws-sdk](https://www.npmjs.com/package/aws-sdk)
* [Express](https://expressjs.com/es/)
* [Mysql](https://www.mysql.com/)
* [Sequelize](sequelize.org/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Para correr este proyecto de manera local en tu pc, deberás tener instalado alguna versión reciente de la base de datos MySQL.

### Prerequisites

* Deberás crear una base de datos llamada ecommerce2
* Crear un servicio s3 de aws. Visita el siguiente [link](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html) para más información.

### Installation

Estos son los pasos que debes seguir para correr la aplicación local.


1. Enciende la base de datos MySql.
2. Clona el repositorio
   ```sh
   git clone https://github.com/gastonpedraza08/backend-challenge-storydots.git
   ```
3. Instala las dependencias
   ```sh
   yarn
   ```
4. Crea un archivo `.env`, copia el contenido `.env.example` en ese archivo y llena las variables de entornos que obtuviste del aws s3.
5. Ejecuta las migraciones
   ```sh
   npx sequelize-cli db:migrate
   ```
6. Ejecuta los seedes
   ```sh
   npx sequelize-cli db:seed:all
   ```
5. Corre la aplicación
   ```sh
   yarn dev
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

* `GET /api/products`

`response`
```
  {
    products: [{...}],
    count: 80
  }
```

* `GET /api/products/:id`

`response`

```
  {
    product: {...},
  }
```


* `POST /api/products/:id`

`request`

```
  {
    name: 'Jhon',
    description: 'Lorem ipsum',
    base64: 'stringBase64',
    price: 80.5,
    brandId: 2
  }
```

`response`

```
  {
    message: 'Product created successfully',
    product: {...}
  }
```

* `PUT /api/products/:id`

`request`

```
  {
    name: 'Jhon',
    description: 'Lorem ipsum',
    base64: 'stringBase64',
    price: 80.5,
    brandId: 2
  }
```

`response`

```
  {
    message: 'Product updated successfully'
  }
```

* `DELETE /api/products/:id`

`response`

```
  {
    message: 'Product deleted successfully'
  }
```


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] CRUD de productos
- [x] Modelo de marcas
- [ ] Autenticación para proteger los métodos expuestos


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Gastón Pedraza - [Linkedin](https://www.linkedin.com/in/gaston-pedraza) - gastonpedraza.developer@gmail.com

Project Links: 
* [frontend](https://github.com/gastonpedraza08/frontend-challenge-storydots)
* [backend](https://github.com/gastonpedraza08/backend-challenge-storydots)


<p align="right">(<a href="#top">back to top</a>)</p>