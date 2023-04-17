
# SA Soft

## Development server

 - Within the projects root directory, go to `.env.example`, rename it to `.env`, then proceed to enter your db credentials depending on your choice of a db client, from the options provided
 - run `npm install` for all the third party packages
 - Run `php artisan serve` from the root directory, this should run in `port 8000`
 - Change directories into react folder, `cd react`
 - Within React, go to `.env.example` replace to the base URL for your entry point to the Backend and rename the file to `.env`
 - Run `npm install` to install all the third party libraries
 - Now within run `npm run dev` this should run the react Frontend on port 3000

### From your root directory of the whole project
    run `php artisan migrate
 - I've made this to be 50 records, but you can change it on `database/seeders/DatabaseSeeder.php` for more test data or less records
 - Then run `php artisan db:seed` when going to your DB, you should see these users created with all the correct fields

#### go to your localhost:3000 
