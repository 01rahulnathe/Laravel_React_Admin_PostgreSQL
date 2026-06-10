import AppLayout from '../../Layouts/AppLayout';
import { useForm, Link } from '@inertiajs/react';

export default function Edit({ user }) {

    const { data, setData, put, processing, errors } = useForm({
        name: user.name ?? '',
        email: user.email ?? '',
        status: user.status ?? 1,
    });

    const submit = (e) => {

        e.preventDefault();

        put(`/users/${user.id}`);
    };

    return (
        <AppLayout>
            <div className="container mt-4">

                <div className="row justify-content-center">

                    <div className="col-md-8">

                        <div className="card shadow">

                            <div className="card-header bg-primary text-white">
                                <h4 className="mb-0">
                                    <i className="bi bi-pencil-square me-2"></i>
                                    Edit User
                                </h4>
                            </div>

                            <div className="card-body">

                                <form onSubmit={submit}>

                                    {/* Name */}

                                    <div className="mb-3">

                                        <label className="form-label">
                                            Name
                                        </label>

                                        <input
                                            type="text"
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                        />

                                        {errors.name && (
                                            <div className="invalid-feedback">
                                                {errors.name}
                                            </div>
                                        )}

                                    </div>

                                    {/* Email */}

                                    <div className="mb-3">

                                        <label className="form-label">
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                        />

                                        {errors.email && (
                                            <div className="invalid-feedback">
                                                {errors.email}
                                            </div>
                                        )}

                                    </div>

                                    {/* Status */}

                                    <div className="mb-4">

                                        <label className="form-label">
                                            Status
                                        </label>

                                        <select
                                            className="form-select"
                                            value={data.status}
                                            onChange={(e) => setData('status', e.target.value)}
                                        >
                                            <option value="1">
                                                Active
                                            </option>

                                            <option value="0">
                                                Inactive
                                            </option>
                                        </select>

                                    </div>

                                    <div className="d-flex">

                                        <button
                                            type="submit"
                                            className="btn btn-success"
                                            disabled={processing}
                                        >
                                            <i className="bi bi-check-circle me-1"></i>

                                            {processing
                                                ? 'Updating...'
                                                : 'Update User'}
                                        </button>

                                        <Link
                                            href="/users"
                                            className="btn btn-secondary ms-2"
                                        >
                                            <i className="bi bi-arrow-left me-1"></i>
                                            Back
                                        </Link>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </AppLayout>
    );
}