import { Link, usePage } from '@inertiajs/react';

export default function Sidebar() {

    const { url } = usePage();

    return (

        <div className="bg-dark text-white vh-100 p-3">

            <h4 className="mb-4">
                Admin Panel
            </h4>

            <ul className="nav flex-column">

                <li className="nav-item mb-2">
                    <Link
                        href="/dashboard"
                        className={`nav-link text-white ${url === '/dashboard' ? 'active bg-primary rounded' : ''}`}
                    >
                        <i className="bi bi-speedometer2 me-2"></i>
                        Dashboard
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link
                        href="/users"
                        className={`nav-link text-white ${url.startsWith('/users') ? 'active bg-primary rounded' : ''}`}
                    >
                        <i className="bi bi-people me-2"></i>
                        Users
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link
                        href="/roles"
                        className={`nav-link text-white ${
                            url.startsWith('/roles')
                            ? 'active bg-primary rounded'
                            : ''
                        }`}
                    >
                        <i className="bi bi-shield-lock me-2"></i>

                        Roles
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link
                        href="/permissions"
                        className={`nav-link text-white ${
                            url.startsWith('/permissions')
                            ? 'active bg-primary rounded'
                            : ''
                        }`}
                    >
                        <i className="bi bi-key me-2"></i>
                        Permissions
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link
                        href="/profile"
                        className={`nav-link text-white ${
                            url === '/profile'
                            ? 'active bg-primary rounded'
                            : ''
                        }`}
                    >
                        <i className="bi bi-person-circle me-2"></i>
                        Profile
                    </Link>
                </li>

            </ul>

        </div>

    );

}