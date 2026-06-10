import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {

    return (
        <>
            <Head title="Welcome" />

            <div className="container">

                <nav className="navbar navbar-expand-lg navbar-light py-4">

                    <div className="container-fluid">

                        <h3 className="fw-bold">

                            Laravel + React + PostgreSQL

                        </h3>

                        <div>

                            {

                                auth.user ?

                                    <Link
                                        href="/dashboard"
                                        className="btn btn-primary"
                                    >
                                        Dashboard
                                    </Link>

                                    :

                                    <>
                                        <Link
                                            href="/login"
                                            className="btn btn-outline-primary me-2"
                                        >
                                            Login
                                        </Link>

                                        <Link
                                            href="/register"
                                            className="btn btn-primary"
                                        >
                                            Register
                                        </Link>
                                    </>

                            }

                        </div>

                    </div>

                </nav>

                <div className="row mt-5">

                    <div className="col-md-8 mx-auto text-center">

                        <h1 className="display-4 fw-bold">

                            Admin Panel

                        </h1>

                        <p className="lead text-muted">

                            Laravel 12 + React + Inertia + PostgreSQL

                        </p>

                    </div>

                </div>

                <div className="row mt-5">

                    <div className="col-md-4">

                        <div className="card shadow">

                            <div className="card-body text-center">

                                <i className="bi bi-people fs-1 text-primary"></i>

                                <h4 className="mt-3">

                                    Users Management

                                </h4>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card shadow">

                            <div className="card-body text-center">

                                <i className="bi bi-shield-lock fs-1 text-success"></i>

                                <h4 className="mt-3">

                                    Roles & Permissions

                                </h4>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card shadow">

                            <div className="card-body text-center">

                                <i className="bi bi-bar-chart fs-1 text-danger"></i>

                                <h4 className="mt-3">

                                    Reports & Dashboard

                                </h4>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    );

}