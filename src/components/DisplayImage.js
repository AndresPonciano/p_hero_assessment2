import React from 'react';
import { connect } from 'react-redux';
import { setPrevDate, setNextDate } from '../actions';
import Favorite from './Favorite';
import { useNasapi } from '../modules/useNasapi';
import { useHistory } from 'react-router-dom';

const DisplayImage = (props) => {
    function prevDate() {
        const yesterday = new Date(props.date);
        yesterday.setDate(yesterday.getDate() - 1);
        props.setPrevDate(yesterday.toString());
    }

    const history = useHistory();

    function nextDate() {
        const today = new Date();

        const tomorrow = new Date(props.date);
        tomorrow.setDate(tomorrow.getDate() + 1);

        //making sure we don't fetch a date after current date
        if (today.getTime() > tomorrow.getTime()) {
            props.setNextDate(tomorrow.toString());
        } else {
            history.push('/404');
        }
    }

    const tempDate = new Date(props.date);

    const year = tempDate.getFullYear().toString();
    const month = (tempDate.getMonth() + 1).toString().padStart(2, '0');
    const day = tempDate.getDate().toString().padStart(2, '0');

    const NASA_KEY = process.env.REACT_APP_NASA_API_KEY;

    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${year}-${month}-${day}`;
    const picture = useNasapi(url);

    let media;
    if (picture.media_type === 'image') {
        media = <img className="media" src={picture.url} alt="nasa" />;
    } else {
        media = (
            <iframe
                className="media"
                src={picture.url}
                title="media"
                height="650px"
                frameBorder="0"
                allowFullScreen
            />
        );
    }

    return (
        <>
            <h1>{props.date}</h1>
            <div className="container">
                <button className="media-btn" onClick={prevDate}>
                    prev
                </button>
                {media}
                <button className="media-btn" onClick={nextDate}>
                    next
                </button>
            </div>
            <section>
                <div className="description">
                    <Favorite picture={picture} />
                    <h2>{picture.title}</h2>
                    <p>{picture.explanation}</p>
                </div>
            </section>
        </>
    );
};

const mapStateToProps = (state) => {
    return { date: state.date.date };
};

export default connect(mapStateToProps, { setPrevDate, setNextDate })(
    DisplayImage
);
