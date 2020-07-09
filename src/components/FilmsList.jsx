import React from 'react';
import './FilmsList.scss'

export default function FilmsList({ data, onClick}) {

    return (
        <div className="films-list">
            <ul>
                {data
                    .sort(function(a, b) {
                    if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
                    if(a.title.toLowerCase() > b.title.toLowerCase()) return 1;
                    return 0;
                })
                    .map((film, id = film.episode_id) => {
                    return (
                       <div
                           key={id}
                       >
                           <li
                               className="films-list__element"
                               onClick={() => onClick(film)}
                           >{film.title}
                           </li>
                       </div>
                    )
                 })}
            </ul>
        </div>
    );
};
