# api
# AFTER CLONING THIS REPO CREATE A VIRTUAL ENVIRONMENT
```sh
python -m venv env
```

# DONT FORGET TO ACTIVATE THE VIRTUAL ENVIRONMENT USING
```sh
env/Scripts/Activate
```
# THEN INSTALL DJANGO IN THE Pharmassist FOLDER USING
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

# CREATE (SPLIT) TERMINAL AND GO TO PHARMASSIST FOLDER
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
