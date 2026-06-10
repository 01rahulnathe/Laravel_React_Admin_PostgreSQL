
import AppLayout from '@/Layouts/AppLayout';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import DeleteUserForm from './Partials/DeleteUserForm';

export default function Edit({
    mustVerifyEmail,
    status,
}) {

    return (

        <AppLayout>

            <div className="container-fluid">

                <h2 className="mb-4">

                    <i className="bi bi-person-circle me-2"></i>

                    Profile

                </h2>

                <div className="row">

                    <div className="col-md-8 mb-4">

                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                        />

                    </div>

                </div>

                <div className="row">

                    <div className="col-md-8 mb-4">

                        <UpdatePasswordForm />

                    </div>

                </div>

                <div className="row">

                    <div className="col-md-8">

                        <DeleteUserForm />

                    </div>

                </div>

            </div>

        </AppLayout>

    );

}