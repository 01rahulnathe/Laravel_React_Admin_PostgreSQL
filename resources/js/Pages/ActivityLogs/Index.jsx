import AppLayout from '@/Layouts/AppLayout';
import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function Index({ logs }) {

    const [searchUser, setSearchUser] = useState('');
    const [searchDescription, setSearchDescription] = useState('');

    const search = () => {

        router.get(
            '/activity-logs',
            {
                user: searchUser,
                description: searchDescription
            },
            {
                preserveState: true
            }
        );

    };

    return (

        <AppLayout>

            <div className="card shadow">

                <div className="card-header bg-dark text-white">

                    <h4>

                        Activity Logs

                    </h4>

                </div>

                <div className="card-body">

                    <div className="row mb-3">

                        <div className="col-md-4">

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search User"
                                value={searchUser}
                                onChange={(e) =>
                                    setSearchUser(e.target.value)
                                }
                            />

                        </div>

                        <div className="col-md-4">

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Description"
                                value={searchDescription}
                                onChange={(e) =>
                                    setSearchDescription(e.target.value)
                                }
                            />

                        </div>

                        <div className="col-md-2">

                            <button
                                className="btn btn-primary"
                                onClick={search}
                            >

                                Search

                            </button>

                        </div>

                    </div>

                    <table className="table table-bordered table-striped">

                        <thead className="table-dark">

                            <tr>

                                <th>ID</th>

                                <th>User</th>

                                <th>Description</th>

                                <th>Date</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                logs.data.length > 0 ?

                                    logs.data.map(log => (

                                        <tr key={log.id}>

                                            <td>

                                                {log.id}

                                            </td>

                                            <td>

                                                {log.causer?.name}

                                            </td>

                                            <td>

                                                {

                                                    log.description === 'created'
                                                        ?

                                                        <span className="badge bg-success">

                                                            User Created

                                                        </span>

                                                        :

                                                        log.description === 'updated'
                                                            ?

                                                            <span className="badge bg-primary">

                                                                User Updated

                                                            </span>

                                                            :

                                                            log.description === 'deleted'
                                                                ?

                                                                <span className="badge bg-danger">

                                                                    User Deleted

                                                                </span>

                                                                :

                                                                <span className="badge bg-secondary">

                                                                    {log.description}

                                                                </span>

                                                }

                                            </td>

                                            <td>

                                                {

                                                    new Date(
                                                        log.created_at
                                                    ).toLocaleString()

                                                }

                                            </td>

                                        </tr>

                                    ))

                                    :

                                    <tr>

                                        <td
                                            colSpan="4"
                                            className="text-center"
                                        >

                                            No Records Found

                                        </td>

                                    </tr>

                            }

                        </tbody>

                    </table>

                    <div className="mt-3">

                        Showing

                        {' '}

                        {logs.from}

                        -

                        {logs.to}

                        {' '}

                        of

                        {' '}

                        {logs.total}

                        records

                    </div>

                </div>

            </div>

        </AppLayout>

    );

}