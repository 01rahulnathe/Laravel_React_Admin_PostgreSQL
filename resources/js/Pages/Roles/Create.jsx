import AppLayout from '../../Layouts/AppLayout';
import { useForm, Link } from '@inertiajs/react';

export default function Create() {

    const { data, setData, post, processing, errors } = useForm({

        name: ''

    });

    function submit(e) {

        e.preventDefault();

        post('/roles');

    }

    return (

        <AppLayout>

            <div className="card shadow">

                <div className="card-header bg-primary text-white">

                    Create Role

                </div>

                <div className="card-body">

                    <form onSubmit={submit}>

                        <div className="mb-3">

                            <label>Role Name</label>

                            <input
                                className="form-control"
                                value={data.name}
                                onChange={(e)=>setData('name',e.target.value)}
                            />

                            <div className="text-danger">

                                {errors.name}

                            </div>

                        </div>

                        <button
                            className="btn btn-success"
                            disabled={processing}
                        >
                            Save
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