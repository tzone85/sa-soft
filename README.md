
# SA Soft

## Structure
```bash
.
├── README.md
├── app
│   ├── Console
│   │   └── Kernel.php
│   ├── Exceptions
│   │   └── Handler.php
│   ├── Http
│   │   ├── Controllers
│   │   │   ├── Api
│   │   │   └── Controller.php
│   │   ├── Kernel.php
│   │   ├── Middleware
│   │   │   ├── Authenticate.php
│   │   │   ├── EncryptCookies.php
│   │   │   ├── PreventRequestsDuringMaintenance.php
│   │   │   ├── RedirectIfAuthenticated.php
│   │   │   ├── TrimStrings.php
│   │   │   ├── TrustHosts.php
│   │   │   ├── TrustProxies.php
│   │   │   ├── ValidateSignature.php
│   │   │   └── VerifyCsrfToken.php
│   │   ├── Requests
│   │   │   ├── LoginRequest.php
│   │   │   ├── SignupRequest.php
│   │   │   ├── StoreUserRequest.php
│   │   │   └── UpdateUserRequest.php
│   │   └── Resources
│   │       └── UserResourcce.php
│   ├── Models
│   │   └── User.php
│   └── Providers
│       ├── AppServiceProvider.php
│       ├── AuthServiceProvider.php
│       ├── BroadcastServiceProvider.php
│       ├── EventServiceProvider.php
│       └── RouteServiceProvider.php
├── artisan
├── bootstrap
│   ├── app.php
│   └── cache
│       ├── packages.php
│       └── services.php
├── composer.json
├── composer.lock
├── config
│   ├── app.php
│   ├── auth.php
│   ├── broadcasting.php
│   ├── cache.php
│   ├── cors.php
│   ├── database.php
│   ├── filesystems.php
│   ├── hashing.php
│   ├── logging.php
│   ├── mail.php
│   ├── queue.php
│   ├── sanctum.php
│   ├── services.php
│   ├── session.php
│   └── view.php
├── database
│   ├── factories
│   │   └── UserFactory.php
│   ├── migrations
│   │   ├── 2014_10_12_000000_create_users_table.php
│   │   ├── 2014_10_12_100000_create_password_reset_tokens_table.php
│   │   ├── 2019_08_19_000000_create_failed_jobs_table.php
│   │   └── 2019_12_14_000001_create_personal_access_tokens_table.php
│   └── seeders
│       └── DatabaseSeeder.php
├── docker-compose.yml
├── package.json
├── phpunit.xml
├── public
│   ├── favicon.ico
│   ├── index.php
│   └── robots.txt
├── react
│   ├── env.example
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   └── vite.svg
│   ├── router.jsx
│   ├── src
│   │   ├── App.jsx
│   │   ├── axios-client.js
│   │   ├── components
│   │   │   ├── DefaultLayout.jsx
│   │   │   └── GuestLayout.jsx
│   │   ├── contexts
│   │   │   └── ContextProvider.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── views
│   │       ├──  Login.jsx
│   │       ├── Dashboard.jsx
│   │       ├── NotFoundView.jsx
│   │       ├── Signup.jsx
│   │       ├── UserForm.jsx
│   │       └── Users.jsx
│   └── vite.config.js
├── resources
│   ├── css
│   │   └── app.css
│   ├── js
│   │   ├── app.js
│   │   └── bootstrap.js
│   └── views
│       └── welcome.blade.php
├── routes
│   ├── api.php
│   ├── channels.php
│   ├── console.php
│   └── web.php
├── storage
│   ├── app
│   │   └── public
│   ├── framework
│   │   ├── cache
│   │   │   └── data
│   │   ├── sessions
│   │   ├── testing
│   │   └── views
│   └── logs
│       └── laravel.log
├── tests
│   ├── CreatesApplication.php
│   ├── Feature
│   │   └── ExampleTest.php
│   ├── TestCase.php
│   └── Unit
│       └── ExampleTest.php
└── vite.config.js
```
## Development server

 - Within the projects root directory, go to `.env.example`, rename it to `.env`, then proceed to enter your db credentials depending on your choice of a db client, from the options provided
 - run `npm install` for all the third party packages
 - Run `php artisan serve` from the root directory, this should run in `port 8000`
 - Change directories into react folder, `cd react`
 - Within React, go to `.env.example` replace to the base URL for your entry point to the Backend and rename the file to `.env`
 - Run `npm install` to install all the third party libraries
 - Now within run `npm run dev` this should run the react Frontend on port 3000

### From your root directory of the whole project
    run `php artisan migrate`
 - I've made this to be 50 records, but you can change it on `database/seeders/DatabaseSeeder.php` for more test data or less records
 - Then run `php artisan db:seed` when going to your DB, you should see these users created with all the correct fields

#### go to your localhost:3000 
    Register and login to see the dashboard with the test users as well, from the db:seed
