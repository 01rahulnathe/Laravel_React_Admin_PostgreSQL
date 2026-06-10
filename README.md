# Laravel React Admin Panel with PostgreSQL

A modern, production-ready Admin Panel built with **Laravel 12**, **React 18**, **Inertia.js**, **PostgreSQL**, and **Bootstrap 5**.

---

## 🚀 Features

### Authentication

* Login
* Register
* Forgot Password
* Reset Password
* Profile Management
* Change Password

### Dashboard

* Dashboard Cards
* Total Users
* Active Users
* Inactive Users
* Roles Count
* Permissions Count

### User Management

* User Listing
* Create User
* Edit User
* Delete User
* Status Management

### Roles & Permissions (Spatie)

* Roles CRUD
* Permissions CRUD
* Assign Permissions to Roles
* Role-Based Access Control (RBAC)
* Middleware Protection

### Profile

* Update Profile Information
* Change Password
* Delete Account

### UI Features

* React + Inertia SPA
* Bootstrap 5
* Bootstrap Icons
* Responsive Layout
* Sidebar Navigation
* Navbar
* Flash Messages
* SweetAlert2 Confirmation

### Database

* PostgreSQL
* Eloquent ORM

### CI/CD & Deployment

* GitHub Actions
* VPS Deployment
* Nginx
* PHP-FPM
* PostgreSQL
* Vite Asset Build
* Production Optimization

### Planned Features

* Assign Roles to Users
* Search & Pagination
* Export Excel
* Export PDF
* Charts Dashboard
* Dark Mode
* Activity Logs
* Audit Trail
* File Uploads

---

## 🛠 Tech Stack

* Laravel 12
* PHP 8.3
* React 18
* Inertia.js
* PostgreSQL
* Bootstrap 5
* Bootstrap Icons
* Spatie Laravel Permission
* SweetAlert2
* Vite
* GitHub Actions
* Nginx
* PHP-FPM

---

## Installation

### Clone Repository

```bash
git clone https://github.com/01rahulnathe/Laravel_React_Admin_PostgreSQL.git

cd Laravel_React_Admin_PostgreSQL
```

### Install Dependencies

```bash
composer install

npm install
```

### Configure Environment

```bash
cp .env.example .env

php artisan key:generate
```

Configure PostgreSQL credentials:

```env
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=laravel_admin_db
DB_USERNAME=laravel_user
DB_PASSWORD=your_password
```

### Run Migrations

```bash
php artisan migrate

php artisan db:seed
```

### Development

```bash
php artisan serve

npm run dev
```

### Production Build

```bash
npm run build

php artisan optimize
```

---

## Project Structure

```text
resources/js
│
├── Components
├── Layouts
├── Pages
│   ├── Auth
│   ├── Dashboard.jsx
│   ├── Profile
│   ├── Users
│   ├── Roles
│   └── Permissions
│
└── app.jsx
```

---

## Screenshots

* Dashboard
* Users Management
* Roles Management
* Permissions Management
* Profile Page
* Authentication Pages

---

## Author

**Rahul Nathe**

Senior Full Stack Developer

**Laravel | React | PostgreSQL | Inertia.js | Bootstrap | AWS**

GitHub: https://github.com/01rahulnathe

---

## License

This project is licensed under the MIT License.
