# create the .env file in root directory for config db:
  DB_CONNECTION=mysql
  DB_HOST=127.0.0.1
  DB_PORT=3306
  DB_DATABASE=laravel
  DB_USERNAME=root
  DB_PASSWORD=mypassword
# run command server:
- composer install
- php artisan serve
- php artisan migrate
- php artisan db:seed
- php artisan passport:install
- php artisan key:generate
# run migrate again
- php artisan migrate:fresh --seed