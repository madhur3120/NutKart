NUTKART
E-Commerce site for Dryfruits

Copy the link and clone it in a new folder :
[command :- git clone https://github.com/madhur3120/NutKart ]

Open the terminal and run :
[command :- cd .\NutKart\]

Make sure that NodeJs and other packages are installed in your system

Run the following :
[command :- npm init]
[command :- npm i express mysql ejs nodemon express-session express-mysql-session]

Then go to the routes folder and open both the js files(database_connection.js & route1.js)
In both the files change the password to your mysql password

Now run the command :
[command :- npm run start]

Then open any web-browser and enter :
[http://localhost:3002/]

DB dump file and initialisation instructions:
a) Open the MySQL command line
b) Type the path of your mysql bin directory and press Enter
c) Paste your SQL file inside the bin folder of mysql server.
d) Create a database in MySQL.
e) Use that particular database where you want to import the SQL file.
f) Type source databasefilename.sql and Enter
g) Your SQL file upload successfully.

Core Functionalities:- - Ability to register as a admin or user - Admin: Can add new admins - Admin: look for all the users - Admin: look for the orders placed - Users: Ability to search desired products - Users: adding products to cart - Users: place orders and checkout

Secondary Functionalities:- - Admin: Verify admin registration - Users: sorting the products according to price : high to low and low to high - Give feedback and subscribe to newsletters through Contact Us.

Auxilary Funationalities:- - Blog page providing benefits of respective dry fruits -

Now you will be directed to the home page of the NutKart
Register and login to buy products

Github repository ------------> [https://github.com/madhur3120/NutKart]
