# Laravel React Inertia Admin Panel

A modern Admin Panel built with **Laravel 12**, **React.js**, **Inertia.js**, **PostgreSQL**, and **Bootstrap 5**.

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
* Role Based Access Control (RBAC)
* Middleware Protection

### UI

* React + Inertia SPA
* Bootstrap 5
* Bootstrap Icons
* Responsive Design
* Sidebar Navigation
* Navbar
* Flash Messages
* SweetAlert2 Confirmation

### Profile

* Update Profile Information
* Change Password
* Delete Account

### Database

* PostgreSQL
* Eloquent ORM

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

## Tech Stack

* Laravel 12
* React 18
* Inertia.js
* PostgreSQL
* Bootstrap 5
* Bootstrap Icons
* Spatie Laravel Permission
* SweetAlert2
* Vite

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/laravel-react-inertia-admin.git

cd laravel-react-inertia-admin
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
DB_DATABASE=your_database
DB_USERNAME=postgres
DB_PASSWORD=your_password
```

### Run Migrations

```bash
php artisan migrate

php artisan db:seed
```

### Start Application

```bash
php artisan serve

npm run dev
```

---

## Project Structure

```
resources/js

Pages
├── Dashboard.jsx
├── Users
├── Roles
├── Permissions
├── Profile
├── Auth

Layouts
├── AppLayout.jsx

Components
├── Sidebar.jsx
├── Navbar.jsx
├── DashboardCard.jsx
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

Laravel | React | PostgreSQL | Inertia.js | Bootstrap | AWS

---

## License

MIT License
