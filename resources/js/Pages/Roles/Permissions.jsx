import AppLayout from '../../Layouts/AppLayout';
import { useForm, Link } from '@inertiajs/react';

export default function Permissions({
    role,
    permissions,
    rolePermissions
}) {

    const { data, setData, post, processing } = useForm({

        permissions: rolePermissions

    });

    function submit(e)
    {
        e.preventDefault();

        post(`/roles/${role.id}/permissions`);
    }

    function togglePermission(id)
    {

        if (data.permissions.includes(id))
        {

            setData(
                'permissions',
                data.permissions.filter(
                    permissionId =>
                        permissionId !== id
                )
            );

        }
        else
        {

            setData(
                'permissions',
                [
                    ...data.permissions,
                    id
                ]
            );

        }

    }

    return (

        <AppLayout>

            <div className="card shadow">

                <div className="card-header bg-primary text-white">

                    <h4>

                        Assign Permissions

                    </h4>

                    <small>

                        Role:
                        <strong>

                            {' '}
                            {role.name}

                        </strong>

                    </small>

                </div>

                <div className="card-body">

                    <form
                        onSubmit={submit}
                    >

                        <div className="row">

                            {

                                permissions.map(
                                    permission => (

                                        <div
                                            className="col-md-4 mb-2"
                                            key={
                                                permission.id
                                            }
                                        >

                                            <div className="form-check">

                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    checked={
                                                        data.permissions.includes(
                                                            permission.id
                                                        )
                                                    }
                                                    onChange={() =>
                                                        togglePermission(
                                                            permission.id
                                                        )
                                                    }
                                                />

                                                <label className="form-check-label">

                                                    {

                                                        permission.name

                                                    }

                                                </label>

                                            </div>

                                        </div>

                                    )
                                )

                            }

                        </div>

                        <hr />

                        <button
                            className="btn btn-success"
                            disabled={
                                processing
                            }
                        >

                            Save Permissions

                        </button>

                        <Link
                            href="/roles"
                            className="btn btn-secondary ms-2"
                        >

                            Back

                        </Link>

                    </form>

                </div>

            </div>

        </AppLayout>

    );

}