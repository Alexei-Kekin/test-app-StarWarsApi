import React from 'react';
import './FilmDetails.scss';

export default  function FilmDetails({details, onClick, i}) {

    return (
        <div
            className="film-details"
        >
            <pre><code id="code" className="json">{JSON.stringify(details, null, 4)}</code></pre>
            <button
            className="film-details__btn-close"
            onClick={onClick}
            >
                Close
            </button>
        </div>
    );
};

