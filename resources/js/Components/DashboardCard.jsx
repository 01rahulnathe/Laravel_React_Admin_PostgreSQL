export default function DashboardCard({
    title,
    value,
    color,
    icon
}) {

    return (

        <div className="col-md-4 mb-4">

            <div className={`card border-${color} shadow`}>

                <div className="card-body">

                    <div className="d-flex justify-content-between">

                        <div>

                            <h6 className="text-muted">

                                {title}

                            </h6>

                            <h2>

                                {value}

                            </h2>

                        </div>

                        <div>

                            <i
                                className={`${icon} fs-1 text-${color}`}
                            >
                            </i>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}