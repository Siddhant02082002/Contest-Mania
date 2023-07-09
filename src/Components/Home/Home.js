import classes from './Home.module.css';
import React, { useState, useEffect } from 'react';
import List from './Lists/List';

const Home = props => {
    const [contests, setContests] = useState([]);

    useEffect(() => {
        async function getContests() {
            const url = "https://kontests.net/api/v1/all";
            const response = await fetch(url);
            const contests = await response.json();
            setContests(contests);
        }

        getContests();

    }, []);

    const formatDateTime = dateTime => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        const formattedDateTime = new Date(dateTime).toLocaleString('en-US', options);
        return formattedDateTime;
    };
    const durationToHrsMin = duration => {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours}h ${minutes}m`;
      };
    const AllContestOngoing = contests.map((contest, index) => (
        contest.status === "CODING" ? (
            <tr key={index} className={classes.row}>
                <td>{contest.name}</td>
                <td>{formatDateTime(contest.start_time)}</td>
                <td>{formatDateTime(contest.end_time)}</td>
                <td>{durationToHrsMin(contest.duration)}</td>
                <td>{contest.site}</td>
            </tr>
        ) : null
    ));
    const AllContestFuture = contests.map((contest, index) => (
        contest.status ==="BEFORE" ? (
            <tr key={index} className={classes.row}>
                <td>{contest.name}</td>
                <td>{formatDateTime(contest.start_time)}</td>
                <td>{formatDateTime(contest.end_time)}</td>
                <td>{durationToHrsMin(contest.duration)}</td>
                <td>{contest.site}</td>
            </tr>
        ) : null
    ));

    return (
        <div className={classes.home}>
            <div className={classes.running}>
                <h2>Running Contest</h2>
                <table>
                    <thead>
                        <tr className={classes.row}>
                            <th className={classes.Name}>Name</th>
                            <th className={classes.StartTime}>Start time</th>
                            <th className={classes.EndTime}>End Time</th>
                            <th className={classes.Duration}>Duration</th>
                            <th className={classes.Site}>Site</th>
                        </tr>
                    </thead>
                    <tbody>
                        {AllContestOngoing}
                    </tbody>
                </table>
            </div>
            <div className={classes.future}>
                <h2>25 Future Contest</h2>
                <table>
                    <thead>
                        <tr className={classes.row}>
                            <th className={classes.Name}>Name</th>
                            <th className={classes.StartTime}>Start time</th>
                            <th className={classes.EndTime}>End Time</th>
                            <th className={classes.Duration}>Duration</th>
                            <th className={classes.Site}>Site</th>
                        </tr>
                    </thead>
                    <tbody>
                        {AllContestFuture}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
