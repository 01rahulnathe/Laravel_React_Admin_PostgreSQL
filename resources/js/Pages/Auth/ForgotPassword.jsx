import { Head, useForm, Link } from '@inertiajs/react';

export default function ForgotPassword({ status }) {

    const { data, setData, post, processing, errors } = useForm({

        email: '',

    });

    function submit(e)
    {
        e.preventDefault();

        post(route('password.email'));
    }

    return (

        <>
            <Head title="Forgot Password" />

            <div className="container">

                <div className="row justify-content-center mt-5">

                    <div className="col-md-5">

                        <div className="card shadow">

                            <div className="card-header bg-warning">

                                <h4 className="mb-0">

                                    <i className="bi bi-key-fill me-2"></i>

                                    Forgot Password

                                </h4>

                            </div>

                            <div className="card-body">

                                <p className="text-muted">

                                    Forgot your password? No problem. Enter your
                                    email address and we'll send you a password
                                    reset link.

                                </p>

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

                                    <button
                                        type="submit"
                                        className="btn btn-warning w-100"
                                        disabled={processing}
                                    >

                                        <i className="bi bi-envelope me-2"></i>

                                        Send Password Reset Link

                                    </button>

                                </form>

                                <hr />

                                <div className="text-center">

                                    <Link
                                        href={route('login')}
                                    >

                                        Back to Login

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