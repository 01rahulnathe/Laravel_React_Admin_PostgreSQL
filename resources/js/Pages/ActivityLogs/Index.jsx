import AppLayout from '@/Layouts/AppLayout';

export default function Index({ logs })
{
    return (

        <AppLayout>

            <div className="card shadow">

                <div className="card-header bg-dark text-white">

                    <h4>

                        Activity Logs

                    </h4>

                </div>

                <div className="card-body">

                    <table className="table table-bordered">

                        <thead>

                        <tr>

                            <th>ID</th>

                            <th>User</th>

                            <th>Description</th>

                            <th>Date</th>

                        </tr>

                        </thead>

                        <tbody>

                        {

                            logs.data.map(log => (

                                <tr key={log.id}>

                                    <td>

                                        {log.id}

                                    </td>

                                    <td>

                                        {log.causer?.name}

                                    </td>

                                    <td>

                                        {log.description}

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

                        }

                        </tbody>

                    </table>

                </div>

            </div>

        </AppLayout>

    );
}