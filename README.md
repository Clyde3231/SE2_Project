# api
# AFTER CLONING THIS REPO CREATE A VIRTUAL ENVIRONMENT
```sh
python -m venv env
```

# DONT FORGET TO ACTIVATE THE VIRTUAL ENVIRONMENT USING
```sh
env/Scripts/Activate
```
# THEN INSTALL DJANGO IN THE Book FOLDER USING
```sh 
pip install django 
pip install djangorestframework 
pip install django-cors-headers
```

# AFTER THAT, PROCEED TO THE FRONT END FOLDER AND DO 
```sh
npm install 
npm run build 
npm start
```
# TO SETUP THE BACKEND SERVER:
# OPEN XAMPP

# START APACHE AND MYSQL

# CLICK MYSQL ADMIN

# CREATE NEW DATABASE AND NAME IT "book_acc"

# SET TABLE NAME TO "login" AND NUMBER OF COLUMNS TO 4

# NAME FIRST COLUMN "id", SET TYPE TO "INT", SET LENGTH VALUE, TICK A_I (Auto Increment) CHECKBOX.

# NAME SECOND COLUMN "username",  SET TYPE TO "VARCHAR", SET LENGTH VALUE.

# NAME THIRD COLUMN "email", SET TYPE TO "VARCHAR", SET LENGTH VALUE.

# NAME FOURTH COLUMN "password", SET TYPE TO "VARCHAR", SET LENGTH VALUE.

# SAVE

# THEN PROCEED TO THE BACKEND FOLDER AND DO
```sh
npm init -y
npm i express MySQL cors nodemon
npm i axios
npm i react-google-reCAPTCHA
```

# THEN GO TO "package.json" IN THE BACKEND FOLDER, INSIDE "scripts" ADD:
```sh
"start": "node server.js"
```

# THEN GO TO THE FRONTEND FOLDER AND:
```sh
npm i axios
```

# TO RUN THE SERVER, GO BACK TO THE BACKEND FOLDER AND:
```sh
npm start
```

# CREATE (SPLIT) TERMINAL AND GO TO Book FOLDER
```sh
python manage.py runserver
```

# If you want to acces django admin do 
```sh
python manage.py createsuperuser
```
# then proceed to 
```sh
http://127.0.0.1:8000/admin/
```
