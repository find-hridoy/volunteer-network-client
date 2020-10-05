import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import img1 from '../../images/refuseShelter.png';

const Events = () => {
    const [events, setEvents] = useState([]);
    const history = useHistory();
    const handleGoing = (id) => {
        history.push(`/register/${id}`);
    }
    useEffect(() => {
        fetch('https://agile-badlands-83268.herokuapp.com/getEvent')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <>
            <div className="container-fluid py-3">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row g-4">
                            {
                                events.map(event => <div key={event._id} className="col-10 col-lg-3 col-md-4 col-sm-6">
                                    <div className="card events_card">
                                        <img src={event.img} className="card-img-top" alt={event.img} />
                                        <button onClick={() => handleGoing(event._id)} className="card_btn">{event.title}</button>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Events;