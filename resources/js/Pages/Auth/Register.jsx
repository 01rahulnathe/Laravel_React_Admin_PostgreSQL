import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {

    const { data, setData, post, processing, errors, reset } = useForm({

        name: '',
        email: '',
        password: '',
        password_confirmation: '',

    });

    function submit(e) {

        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });

    }

    return (

        <>
            <Head title="Register" />

            <div className="container">

                <div className="row justify-content-center mt-5">

                    <div className="col-md-6">

                        <div className="card shadow">

                            <div className="card-header bg-success text-white">

                                <h4 className="mb-0">

                                    <i className="bi bi-person-plus-fill me-2"></i>

                                    Create Account

                                </h4>

                            </div>

                            <div className="card-body">

                                <form onSubmit={submit}>

                                    <div className="mb-3">

                                        <label className="form-label">

                                            Full Name

                                        </label>

                                        <input
                                            type="text"
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                            value={data.name}
                                            onChange={(e) =>
                                                setData('name', e.target.value)
                                            }
                                        />

                                        <div className="invalid-feedback">

                                            {errors.name}

                                        </div>

                                    </div>

                                    <div className="mb-3">

                                        <label className="form-label">

                                            Email Address

                                        </label>

                                        <input
                                            type="email"
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            value={data.email}
                                            onChange={(e) =>
                                                setData('email', e.target.value)
                                            }
                                        />

                                        <div className="invalid-feedback">

                                            {errors.email}

                                        </div>

                                    </div>

                                    <div className="mb-3">

                                        <label className="form-label">

                                            Password

                                        </label>

                                        <input
                                            type="password"
                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                            value={data.password}
                                            onChange={(e) =>
                                                setData('password', e.target.value)
                                            }
                                        />

                                        <div className="invalid-feedback">

                                            {errors.password}

                                        </div>

                                    </div>

                                    <div className="mb-4">

                                        <label className="form-label">

                                            Confirm Password

                                        </label>

                                        <input
                                            type="password"
                                            className={`form-control ${
                                                errors.password_confirmation
                                                    ? 'is-invalid'
                                                    : ''
                                            }`}
                                            value={data.password_confirmation}
                                            onChange={(e) =>
                                                setData(
                                                    'password_confirmation',
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <div className="invalid-feedback">

                                            {errors.password_confirmation}

                                        </div>

                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-success w-100"
                                        disabled={processing}
                                    >

                                        <i className="bi bi-person-plus me-2"></i>

                                        Register

                                    </button>

                                </form>

                                <hr />

                                <div className="text-center">

                                    Already have an account?

                                    <Link
                                        href={route('login')}
                                        className="ms-2"
                                    >

                                        Login

                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}