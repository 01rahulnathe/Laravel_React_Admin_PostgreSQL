import AppLayout from '../Layouts/AppLayout';
import DashboardCard from '../Components/DashboardCard';

export default function Dashboard({ stats }) {

    return (

        <AppLayout>

            <div className="container-fluid">

                <h2 className="mb-4">

                    Dashboard

                </h2>

                <div className="row">

                    <DashboardCard
                        title="Total Users"
                        value={stats.totalUsers}
                        color="primary"
                        icon="bi bi-people"
                    />

                    <DashboardCard
                        title="Active Users"
                        value={stats.activeUsers}
                        color="success"
                        icon="bi bi-person-check"
                    />

                    <DashboardCard
                        title="Inactive Users"
                        value={stats.inactiveUsers}
                        color="danger"
                        icon="bi bi-person-x"
                    />

                    <DashboardCard
                        title="Roles"
                        value={stats.totalRoles}
                        color="warning"
                        icon="bi bi-shield-lock"
                    />

                    <DashboardCard
                        title="Permissions"
                        value={stats.totalPermissions}
                        color="info"
                        icon="bi bi-key"
                    />

                </div>

            </div>

        </AppLayout>

    );

}