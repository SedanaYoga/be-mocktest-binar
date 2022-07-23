<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Sedana Yoga - Backend Mock Test </h3>
  <img src="https://global-uploads.webflow.com/5e70b9a791ceb781b605048c/62c5720d8b3b6003c2f46fa4_logo-binar-academy.svg" alt="logo" height="100">
  <p align="center">
    A repository for completing Binar Career Development Program.

  </p>
</div>

<!-- ABOUT THE PROJECT -->

# About The Project

In this mock test, the task was pretty straight forward. We have to create a fully functioned Backend System with RESTful API and ready to be consumed for frontend system. The project was deployed in https://mocktest-be.herokuapp.com

![Login][login]
![Register][register]
![GetAllProducts][getallproducts]
![GetProductById][getproductbyid]
![CreateProduct][createproduct]
![UpdateProduct][updateproduct]
![DeleteProduct][deleteproduct]

<p align="right">(<a href="#top">back to top</a>)</p>

## Built With

The following lists show my development stack:

### Backend Stack

- [Express JS](https://expressjs.com/)
- [Passport JWT](http://www.passportjs.org/packages/passport-jwt/)
- [PostgreSQL](https://www.postgresql.org/)
- [Sequelize](https://sequelize.org/)
- [Heroku](https://www.heroku.com/)
- [Cors](https://www.npmjs.com/package/cors)
- [Bcrypt](https://www.npmjs.com/package/bcryptjs)

### Development Tools:

- [Git](https://git-scm.com/)
- [Neovim](https://neovim.io/)
- [Swagger](https://swagger.io/)

<p align="right">(<a href="#top">back to top</a>)</p>

## What I've learnt?

- `Express + Postgres + Heroku` => Found a way to connect backend aplication that is able to be deployed with a database add on (Heroku PostgreSQL) in deployment platform itself. Feels like creating my own Firestore, but this time I'm using relational one (PostgreSQL).
- `Endpoint with CORS` => CORS has been an issue for Developer including me as an addict in frontend. Now, I know the reason why backend add this policy in backend and how to mitigate the issue from backend side.
- `Can't wrong Swagger` => Sorry, I don't add API docs here in README file, I've created a fully functioned page to test all of the endpoints including the authorization. Please check https://mocktest-be.herokuapp.com/docs.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

# Getting Started

## The Feature

- CRUD Functionality of Products.
- User Authentication with token
- Deployed in Heroku and ready to be consumed globally
- CORS policy for PUT and DELETE methods
- Swagger Page to test all endpoints.

## Prerequisites

If you want to edit the code, you need to have `nodejs` and `NPM`.

Install all dependencies by this command if you already get node and npm installed in your system.

```sh
cd <repository-folder>
npm install
```

<p align="right">(<a href="#top">back to top</a>)</p>

# Usage

The application has been deployed in https://mocktest-be.herokuapp.com.
And the Documentation also available in https://mocktest-be.herokuapp.com/docs

If you want to change the code / improve my code please use this steps:

- Set your terminal directory to `repository folder`
- Start the Node Server by running this command
  ```sh
  npm run dev
  ```
- Set and `.env` file with this variable

  ```sh
   SECRET_JWT=<SOME-SECRET_STRING>
  ```

- Open `localhost:3000` in your browser/postman

<p align="right">(<a href="#top">back to top</a>)</p>

# PostgreSQL Table Structure

## The `users`

| Column         | Type    | Constraint | Value          |
| -------------- | ------- | ---------- | -------------- |
| id             | INTEGER | PK         | Auto Generated |
| name           | STRING  | NOTNULL    | input          |
| email          | STRING  | NOTNULL    | input          |
| passwordDigest | STRING  | NOTNULL    | input          |
| createdAt      | DATE    | NOTNULL    | Auto Generated |
| updatedAt      | DATE    | NOTNULL    | Auto Generated |

## The `products`

| Column    | Type    | Constraint | Value          |
| --------- | ------- | ---------- | -------------- |
| id        | INTEGER | PK         | Auto generated |
| name      | STRING  | NOTNULL    | input          |
| price     | INTEGER | NOTNULL    | input          |
| imageUrl  | STRING  | NOTNULL    | input          |
| createdAt | DATE    | NOTNULL    | Auto Generated |
| updatedAt | DATE    | NOTNULL    | Auto Generated |

# Space for Improvement

- More security for rather than just Authorization header

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Twitter - [@cok_yoga](https://twitter.com/Cok_Yoga)
LinkedIn - [Sedana Yoga](https://github.com/SedanaYoga)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[login]: docs/login.png
[signup]: docs/register.png
[getallproducts]: docs/getAllProducts.png
[getproductbyid]: docs/getProductById.png
[createproduct]: docs/createProduct.png
[updateproduct]: docs/updateProduct.png
[deleteproduct]: docs/deleteProduct.png
