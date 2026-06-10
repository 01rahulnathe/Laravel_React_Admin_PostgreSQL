import AppLayout from '../../Layouts/AppLayout';
import { useForm, Link } from '@inertiajs/react';

export default function Create() {

    const { data, setData, post, processing, errors } = useForm({

        name: '',
        email: '',
        password: '',
        status: 1

    });

    const submit = (e) => {

        e.preventDefault();

        post('/users');

    };

    return (

        <AppLayout>

            <div className="container mt-4">

                <div className="card shadow">

                    <div className="card-header bg-primary text-white">

                        <h4>Create User</h4>

                    </div>

                    <div className="card-body">

                        <form onSubmit={submit}>

                            <div className="mb-3">

                                <label>Name</label>

                                <input
                                    className="form-control"
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                />

                                <small className="text-danger">
                                    {errors.name}
                                </small>

                            </div>

                            <div className="mb-3">

                                <label>Email</label>

                                <input
                                    className="form-control"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                />

                                <small className="text-danger">
                                    {errors.email}
                                </small>

                            </div>

                            <div className="mb-3">

                                <label>Password</label>

                                <input
                                    type="password"
                                    className="form-control"
                                    value={data.password}
                                    onChange={e => setData('password', e.target.value)}
                                />

                                <small className="text-danger">
                                    {errors.password}
                                </small>

                            </div>

                            <div className="mb-3">

                                <label>Status</label>

                                <select
                                    className="form-select"
                                    value={data.status}
                                    onChange={e => setData('status', e.target.value)}
                                >

                                    <option value="1">
                                        Active
                                    </option>

                                    <option value="0">
                                        Inactive
                                    </option>

                                </select>

                            </div>

                            <button
                                className="btn btn-success"
                                disabled={processing}
                            >

                                Save User

                            </button>

                            <Link
                                href="/users"
                                className="btn btn-secondary ms-2"
                            >

                                Back

                            </Link>

                        </form>

                    </div>

                </div>

            </div>

        </AppLayout>

    );

}
