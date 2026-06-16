import { useEffect, useState } from "react";
import { getTeams } from "../services/teamService";


export default function TeamSidebar() {

    const [teams, setTeams] = useState([]);

    useEffect(() => {

        getTeams()
            .then(res => setTeams(res.data));

    }, []);

    return (
        <>
            {teams.map(team => (
                <div key={team.id}>
                    {team.name}
                </div>
            ))}
        </>
    );
}