# LMS – Django & React.js Learning Management System

This is a **full-stack Learning Management System (LMS)** built with:

- **Backend**: Django + Django REST Framework (Python)
- **Frontend**: React.js (Yarn)
- **Database**: SQLite (default, can be changed)
- **Environment Management**: Python Virtual Environment (`venv`)
- **Authentication**: Django Superuser / Admin Panel

---

## 📁 Project Structure

django_lms/
│
├── backend/ # Django backend
│ ├── manage.py
│ ├── lms/ # Django project settings
│ └── apps/ # Django apps
│
├── frontend/ # React frontend (Yarn)
│
├── .env.example # Environment variable example
├── .gitignore
├── README.md

yaml
Copy code

---

## ⚙️ Prerequisites

Make sure you have the following installed:

- **Python** 3.9+
- **Node.js** 18+
- **Yarn**
- **Git**

### Check versions
```bash
python3 --version
node --version
yarn --version
git --version
🐍 Backend Setup (Django)
1️⃣ Create Virtual Environment
bash
Copy code
python3 -m venv venv
2️⃣ Activate Virtual Environment
Linux / macOS

bash
Copy code
source venv/bin/activate
Windows

bash
Copy code
venv\Scripts\activate
3️⃣ Install Python Packages
bash
Copy code
pip install --upgrade pip
pip install -r requirements.txt
If requirements.txt is not available:

bash
Copy code
pip install django djangorestframework python-dotenv
4️⃣ Environment Variables
Create a .env file in the backend root:

env
Copy code
DEBUG=True
SECRET_KEY=your-secret-key
ALLOWED_HOSTS=127.0.0.1,localhost
⚠️ Do NOT commit .env to GitHub

5️⃣ Run Migrations
bash
Copy code
python manage.py makemigrations
python manage.py migrate
6️⃣ Create Superuser (Admin)
bash
Copy code
python manage.py createsuperuser
Enter:

Username

Email

Password

Admin panel:

arduino
Copy code
http://127.0.0.1:8000/admin/
7️⃣ Run Django Server
bash
Copy code
python manage.py runserver
Backend will run at:

cpp
Copy code
http://127.0.0.1:8000/
⚛️ Frontend Setup (React + Yarn)
1️⃣ Navigate to Frontend Folder
bash
Copy code
cd frontend
2️⃣ Install Dependencies
bash
Copy code
yarn install
3️⃣ Start React Development Server
bash
Copy code
yarn start
Frontend will run at:

arduino
Copy code
http://localhost:3000/
🔗 Backend & Frontend Connection
Make sure your React app API base URL points to Django:

js
Copy code
http://127.0.0.1:8000/api/
Enable CORS in Django if required.

🔐 Admin & Authentication
Admin Panel: /admin

API Authentication via Django REST Framework

Superuser has full access

🚀 Common Commands
Stop Servers
bash
Copy code
CTRL + C
Deactivate Virtual Environment
bash
Copy code
deactivate
🛡️ Security Notes
Never push .env

Rotate SECRET_KEY for production

Use .env.example for sharing config

📌 Future Improvements
Docker support

Role-based access (Student / Teacher / Admin)

Course enrollment

Exams & quizzes

CI/CD pipeline

👨‍💻 Author
Isuru Samarakkody
GitHub: https://github.com/isurupsk

📄 License
This project is for educational and development purposes.

yaml
Copy code

---

