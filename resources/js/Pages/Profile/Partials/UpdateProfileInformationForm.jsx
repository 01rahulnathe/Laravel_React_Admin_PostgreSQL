import { useForm, usePage } from '@inertiajs/react';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
}) {

    const user = usePage().props.auth.user;

    const {
        data,
        setData,
        patch,
        errors,
        processing,
        recentlySuccessful
    } = useForm({

        name: user.name,
        email: user.email,

    });

    function submit(e)
    {
        e.preventDefault();

        patch(route('profile.update'));
    }

    return (

            <div className="container-fluid">

                <div className="row justify-content-center">

                    <div className="col-md-8">

                        <div className="card shadow">

                            <div className="card-header bg-primary text-white">

                                <h4 className="mb-0">

                                    <i className="bi bi-person-circle me-2"></i>

                                    Profile Information

                                </h4>

                            </div>

                            <div className="card-body">

                                <form onSubmit={submit}>

                                    <div className="mb-3">

                                        <label className="form-label">

                                            Name

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

                                            Email

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

                                    {

                                        mustVerifyEmail &&
                                        user.email_verified_at === null && (

                                            <div className="alert alert-warning">

                                                Your email address is not verified.

                                            </div>

                                        )

                                    }

                                    <div className="mt-4">

                                        <button
                                            type="submit"
                                            className="btn btn-success"
                                            disabled={processing}
                                        >

                                            <i className="bi bi-check-circle me-1"></i>

                                            Save Changes

                                        </button>

                                        {

                                            recentlySuccessful && (

                                                <span className="text-success ms-3">

                                                    <i className="bi bi-check2-circle"></i>

                                                    {' '}Profile updated successfully

                                                </span>

                                            )

                                        }

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

    );

}