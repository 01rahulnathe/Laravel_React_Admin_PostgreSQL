import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

export default function AppLayout({ children }) {

    return (

        <div className="container-fluid">

            <div className="row">

                <div className="col-md-2 p-0">
                    <Sidebar />
                </div>

                <div className="col-md-10 p-0">

                    <Navbar />

                    <div className="p-4">

                        {children}

                    </div>

                </div>

            </div>

        </div>

    );

}