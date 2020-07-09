import React from 'react';
import './FilmDetails.scss';

export default  function FilmDetails({details, onClick, i}) {

    return (
        <div
            className="film-details"
            onClick={onClick}
        >
            <pre><code id="code" className="json">{JSON.stringify(details, null, 4)}</code></pre>
        </div>
    );
};

