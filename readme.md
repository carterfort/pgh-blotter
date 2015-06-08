##OpenPGH Police Blotter

Part of an on-going collaboration between Code&Supply and OpenPGH, this app presents a map displaying the location and situational data available for all reported arrests and violations from the Pittsburgh Police Department
 
 ###Installation
 
 This is a Laravel 5.0 app, and it's easiest to put local installs into a [Laravel Homestead](http://laravel.com/docs/5.0/homestead) box.
 
 Once you have VirtualBox, Vagrant, and Homestead set up, SSH in and clone this git repo:
 
 `
 git clone https://github.com/carterfort/pgh-blotter.git 
 `
 
 Next, run a Composer install to install Laravel and its dependencies:
 
 `
 composer update
 `
 
 Once that's finished (it might take a while), you'll need to set up your environment variables file. Copy the .env.example file in the root to .env
 
 `
 cp .env.example .env
 `
 
 Generate a key for this install:
 
 `
 php artisan key:generate
 `
 
 Edit your new .env file's database variables so you can connect to Homestead's SQL database:
 
 `
 nano .env
 `
 
 