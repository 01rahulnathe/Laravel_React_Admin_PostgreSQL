import AppLayout from '../../Layouts/AppLayout';
import { useForm, Link } from '@inertiajs/react';

export default function Edit({ permission }) {

    const { data, setData, put, processing, errors } = useForm({

        name: permission.name

    });

    function submit(e)
    {
        e.preventDefault();

        put(`/permissions/${permission.id}`);
    }

    return (

        <AppLayout>

            <div className="card shadow">

                <div className="card-header bg-primary text-white">

                    <h4>Edit Permission</h4>

                </div>

                <div className="card-body">

                    <form onSubmit={submit}>

                        <div className="mb-3">

                            <label>Permission Name</label>

                            <input
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                value={data.name}
                                onChange={(e)=>setData('name',e.target.value)}
                            />

                            <div className="invalid-feedback">

                                {errors.name}

                            </div>

                        </div>

                        <button
                            className="btn btn-success"
                            disabled={processing}
                        >
                            Update
                        </button>

                        <Link
                            href="/permissions"
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