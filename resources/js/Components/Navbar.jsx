
import { Link, usePage } from '@inertiajs/react';

export default function Navbar() {

    const { auth } = usePage().props;

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">

            <div className="container-fluid">

                <span className="navbar-brand">
                    Laravel + React + Admin + PostgreSQL
                </span>

                <div className="ms-auto">

                    <span className="me-3">
                        Welcome,
                        <strong className="ms-1">
                            {auth.user?.name}
                        </strong>
                    </span>

                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="btn btn-danger btn-sm"
                    >
                        Logout
                    </Link>

                </div>

            </div>

        </nav>

    );

}