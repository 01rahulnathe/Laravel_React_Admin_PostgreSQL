import AppLayout from '../../Layouts/AppLayout';
import { Link, router } from '@inertiajs/react';
import Swal from 'sweetalert2';

export default function Index({ roles }) {

    function destroy(id)
    {

        Swal.fire({

            title: 'Delete Role?',
            text: "You won't be able to revert this!",

            icon: 'warning',

            showCancelButton: true,

            confirmButtonColor: '#d33',

            cancelButtonColor: '#3085d6',

            confirmButtonText: 'Yes, delete it!'

        }).then((result) => {

            if(result.isConfirmed)
            {
                router.delete(`/roles/${id}`);
            }

        });

    }

    return (

        <AppLayout>

            <div className="card shadow">

                <div className="card-header d-flex justify-content-between">

                    <h4>

                        Roles

                    </h4>

                    <Link
                        href="/roles/create"
                        className="btn btn-primary"
                    >
                        Create Role
                    </Link>

                </div>

                <div className="card-body">

                    <table className="table table-bordered table-hover">

                        <thead className="table-dark">

                            <tr>

                                <th>ID</th>

                                <th>Name</th>

                                <th>Created At</th>

                                <th width="180">

                                    Action

                                </th>

                            </tr>

                        </thead>

                        <tbody>

                        {

                            roles.data.map((role)=>(

                                <tr key={role.id}>

                                    <td>

                                        {role.id}

                                    </td>

                                    <td>

                                        {role.name}

                                    </td>

                                    <td>

                                        {role.created_at}

                                    </td>

                                    <td>
                                        <div className="d-flex gap-1">

                                            <Link
                                                href={`/roles/${role.id}/edit`}
                                                className="btn btn-warning btn-sm"
                                                title="Edit"
                                            >
                                                <i className="bi bi-pencil-square"></i>
                                            </Link>

                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => destroy(role.id)}
                                                title="Delete"
                                            >
                                                <i className="bi bi-trash"></i>
                                            </button>

                                            <Link
                                                href={`/roles/${role.id}/permissions`}
                                                className="btn btn-info btn-sm"
                                                title="Assign Permissions"
                                            >
                                                <i className="bi bi-key"></i>
                                            </Link>

                                        </div>
                                    </td>

                                </tr>

                            ))

                        }

                        </tbody>

                    </table>

                </div>

            </div>

        </AppLayout>

    );

}