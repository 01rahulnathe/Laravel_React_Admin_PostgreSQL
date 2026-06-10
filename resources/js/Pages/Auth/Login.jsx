import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {

    const { data, setData, post, processing, errors } = useForm({

        email: '',
        password: '',
        remember: false,

    });

    function submit(e) {

        e.preventDefault();

        post(route('login'));

    }

    return (

        <>
            <Head title="Login" />

            <div className="container">

                <div className="row justify-content-center mt-5">

                    <div className="col-md-5">

                        <div className="card shadow">

                            <div className="card-header bg-primary text-white">

                                <h4 className="mb-0">

                                    <i className="bi bi-box-arrow-in-right me-2"></i>

                                    Admin Login

                                </h4>

                            </div>

                            <div className="card-body">

                                {
                                    status && (

                                        <div className="alert alert-success">

                                            {status}

                                        </div>

                                    )
                                }

                                <form onSubmit={submit}>

                                    <div className="mb-3">

                                        <label className="form-label">

                                            Email Address

                                        </label>

                                        <input
                                            type="email"
                                            className={`form-control ${
                                                errors.email ? 'is-invalid' : ''
                                            }`}
                                            value={data.email}
                                            onChange={(e) =>
                                                setData('email', e.target.value)
                                            }
                                            autoFocus
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
                                            className={`form-control ${
                                                errors.password ? 'is-invalid' : ''
                                            }`}
                                            value={data.password}
                                            onChange={(e) =>
                                                setData('password', e.target.value)
                                            }
                                        />

                                        <div className="invalid-feedback">

                                            {errors.password}

                                        </div>

                                    </div>

                                    <div className="form-check mb-3">

                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            checked={data.remember}
                                            onChange={(e) =>
                                                setData('remember', e.target.checked)
                                            }
                                        />

                                        <label className="form-check-label">

                                            Remember Me

                                        </label>

                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                        disabled={processing}
                                    >

                                        <i className="bi bi-box-arrow-in-right me-2"></i>

                                        Login

                                    </button>

                                </form>

                                <hr />

                                <div className="d-flex justify-content-between">

                                    {
                                        canResetPassword && (

                                            <Link href={route('password.request')}>

                                                Forgot Password?

                                            </Link>

                                        )
                                    }

                                    <Link href={route('register')}>

                                        Create Account

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