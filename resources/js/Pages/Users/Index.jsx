import AppLayout from '../../Layouts/AppLayout';
import { Link, router } from '@inertiajs/react';
import Swal from 'sweetalert2';

export default function Index({ users, filters }) {

    const destroy = (id) => {

        Swal.fire({
            title: 'Delete User?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#dc3545'
        }).then((result) => {

            if (result.isConfirmed) {

                router.delete(`/users/${id}`);

            }

        });

    };

    const search = (e) => {

        router.get(
            '/users',
            { search: e.target.value },
            {
                preserveState: true,
                replace: true
            }
        );

    };

    return (

        <AppLayout>

            <div className="card shadow">

                <div className="card-header">

                    <div className="row">

                        <div className="col-md-6">

                            <h4>
                                User Management
                            </h4>

                        </div>

                        <div className="col-md-6 text-end">

                            <Link
                                href="/users/create"
                                className="btn btn-primary"
                            >
                                Create User
                            </Link>

                        </div>

                    </div>

                </div>

                <div className="card-body">

                    <div className="row mb-3">

                        <div className="col-md-4">

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search name or email..."
                                defaultValue={filters.search}
                                onChange={search}
                            />

                        </div>

                    </div>

                    <div className="table-responsive">

                        <table className="table table-bordered table-striped align-middle">

                            <thead className="table-dark">

                                <tr>

                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th width="180">Action</th>

                                </tr>

                            </thead>

                            <tbody>

                                {
                                    users.data.length > 0 ?

                                        users.data.map((user, index) => (

                                            <tr key={user.id}>

                                                <td>{index + 1}</td>

                                                <td>{user.name}</td>

                                                <td>{user.email}</td>

                                                <td>

                                                    <span className="badge bg-success">

                                                        Active

                                                    </span>

                                                </td>

                                                <td>

                                                    <Link
                                                        href={`/users/${user.id}/edit`}
                                                        className="btn btn-sm btn-primary me-2">

                                                        <i className="bi bi-pencil-square"></i>

                                                    </Link>

                                                    <button
                                                        className="btn btn-sm btn-danger"
                                                        onClick={() => destroy(user.id)}>

                                                        <i className="bi bi-trash"></i>

                                                    </button>

                                                </td>

                                            </tr>

                                        ))

                                        :

                                        <tr>

                                            <td colSpan="5" className="text-center">

                                                No records found

                                            </td>

                                        </tr>

                                }

                            </tbody>

                        </table>

                    </div>

                    <div className="mt-3">

                        {
                            users.links.map((link, index) => (

                                <Link
                                    key={index}
                                    href={link.url ?? '#'}
                                    className={`btn btn-sm me-1 ${link.active
                                        ? 'btn-primary'
                                        : 'btn-outline-primary'
                                        }`}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label
                                    }}
                                />

                            ))
                        }

                    </div>

                </div>

            </div>

        </AppLayout>

    );

}