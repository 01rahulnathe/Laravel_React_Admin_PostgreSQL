<<<<<<< HEAD
<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework. You can also check out [Laravel Learn](https://laravel.com/learn), where you will be guided through building a modern Laravel application.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Redberry](https://redberry.international/laravel-development)**
- **[Active Logic](https://activelogic.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
=======
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
>>>>>>> a7ae5bfd0044f694475d1ce9a23754559588cf9f
