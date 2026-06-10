import AppLayout from '../../Layouts/AppLayout';
import { Link, router } from '@inertiajs/react';
import Swal from 'sweetalert2';

export default function Index({ permissions }) {

    function destroy(id)
    {
        Swal.fire({

            title: 'Delete Permission?',

            icon: 'warning',

            showCancelButton: true,

            confirmButtonText: 'Delete'

        }).then((result)=>{

            if(result.isConfirmed)
            {
                router.delete(`/permissions/${id}`);
            }

        });
    }

    return (

        <AppLayout>

            <div className="card shadow">

                <div className="card-header d-flex justify-content-between">

                    <h4>

                        Permissions

                    </h4>

                    <Link
                        href="/permissions/create"
                        className="btn btn-primary"
                    >
                        Create Permission
                    </Link>

                </div>

                <div className="card-body">

                    <table className="table table-bordered">

                        <thead className="table-dark">

                            <tr>

                                <th>ID</th>

                                <th>Name</th>

                                <th width="180">

                                    Action

                                </th>

                            </tr>

                        </thead>

                        <tbody>

                        {

                            permissions.data.map((permission)=>(

                                <tr key={permission.id}>

                                    <td>{permission.id}</td>

                                    <td>{permission.name}</td>

                                    <td>

                                        <Link
                                            href={`/permissions/${permission.id}/edit`}
                                            className="btn btn-warning btn-sm"
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            className="btn btn-danger btn-sm ms-2"
                                            onClick={()=>destroy(permission.id)}
                                        >
                                            Delete
                                        </button>

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