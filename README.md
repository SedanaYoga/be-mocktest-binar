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
![SignUp][signup]
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

## Assignment

### 1. Disebutkan seorang client membutuhkan layanan aplikasi antar makanan. Dan Anda diminta untuk _membuat desain sistem_ dengan kriteria pelanggan hanya dilayani dengan mobile apps.

Desainlah stack backend dan micro service layanan tersebut beserta tools dan alasan mengapa memilih design dan tools tersebut.
**Answer:**
Banyak perusahaan saat ini sudah mengembangkan arsitektur _microservices_ pada aplikasi. Kemudahan dan efisiensi yang didapat sangat berbeda dengan pengembangan aplikasi dengan arsitektur monolitik ini karena aplikasi terbagi menjadi beberapa services (feature/service level) yang di setiap servicenya punya system desainnya masing-masing, contohnya: tech stack untuk service authentication mungkin berbeda dengan stack service payment, maka dari itu jika ada masalah di satu service, service yang lain tidak ada sangkut pautnya jadi issue terisolasi dengan baik.
![Microservice][microservice]
Desain microservice diperlukan untuk beberapa alasan, seperti:

1. Meningkatkan kecepatan dan skalabilitas
2. Meningkatkan produktivitas dan _agility_
3. Deployment lebih aman dan lancar
4. Maintenance yang mudah
5. Tidak terbatas pada satu tech stack di setiap servicenya
6. Mampu mengisolasi kesalahan
7. Mengurangi ketergantungan dengan layanan eksternal

**Tech Stack:**

1. **Frontend:**
   - Flutter (menggunakan native language dengan asumsi akan lebih cepat, meningkatkan UX)
2. **Backend:**
   - NodeJS (ExpressJS menggunakan language umum untuk digunakan di segala platform dan RESTful API yang mudah untuk dipahami)
   - PostgreSQL (NoSQL lebih baik dari segi konsistensi sehingga data tidak berantakan)
3. **Tools** - Docker (Containerize) - AWS (lebih cepat dan fleksibel) - GitHub (Repository untuk semua services) - Jenkins (Integrasi semua services)
<p align="right">(<a href="#top">back to top</a>)</p>

### 2. Bagaimana menangani keamanan dalam pengiriman data (backend dan mobile apps) pada sistem diatas.

Jelaskan solusi tersebut beserta alasannya.
**Answer**

1. **Encrypt the Data**
   Enkripsi data yang sensitif salah satu cara menjamin keamaan dari external
2. **Pastikan Library yang dipakai aman**
   Jika kita menggunakan library eksternal, code kita akan bergabung dengan code yang ada dalam library. Ada kemungkinan library mengimplementasi code yang tidak aman.
3. **Berikan Authorization pada API Endpoint**
   Authorization modern seperti OAuth atau JWT
4. **High-level Authentication**
   Multi Factor Authentication / Biometrics authentication dapat digunakan agar pengiriman data tidak dilakukan pihak external

### 4. Dari dokumen https://testbinar.docs.apiary.io/, menurut anda, apakah ada desian API yang kurang maupun keliru? Jika ada, tuliskan kekurangan-kekurangan desain tersebut dan bagaimana seharusnya dokumentasi itu ditulis.

Issues:

1. Endpoint POST /auth/signup menerima tipe content **application/x-www-form-urlencoded** yang mana tidak sesuai dengan request body yang mengunakan JSON
2. Id dan Password pada User dan Product seharusnya tidak ditampilkan karena termasuk data sensitif
3. **Testing API V2** tidak begitu banyak bisa digunakan karena hanya menampilkan **message: Hello World**

<!-- MARKDOWN LINKS -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[login]: docs/login.png
[signup]: docs/signup.png
[getallproducts]: docs/getAllProducts.png
[getproductbyid]: docs/getProductById.png
[createproduct]: docs/createProduct.png
[updateproduct]: docs/updateProduct.png
[deleteproduct]: docs/deleteProduct.png
[microservice]: docs/microservice.png
