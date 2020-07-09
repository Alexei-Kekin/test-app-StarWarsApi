import React, {useEffect, useState} from 'react';
import FilmsList from "./components/FilmsList";
import FilmDetails from "./components/FilmDetails";
import './App.scss';

export default function App() {

const [title, setTitle] = useState('');
const [films, setFilms] = useState([]);
const [details, setDetails] = useState(null);


    const handleInputTitle = (event) => {
        setTitle(event.target.value)  ;
    };


    const filteredFilms = films.filter(data => (
        data.title.toLowerCase().indexOf(title.trim().toLowerCase()) !== -1
    ));

    const handleTitleInputKeydown = event => {
        if (event.key === 'Enter') {
            setTitle('');
        }
    };

    const handleOpenDetails = (data) => {
        setDetails(data);
    };

    const handleCloseDetails = () => {
        setDetails(null);
    };

    useEffect(() => {
       async function load() {
           const data = await fetch('https://swapi.dev/api/films/')
               .then(data => data.json())
               .catch((error) => {
               console.error(error);
           });
           setFilms(data.results)
       }

        load();
    }, []);

  return (
    <div className="App">
            <input
                className="films-filter"
                type="text"
                onChange={handleInputTitle}
                value={title}
                onKeyDown={handleTitleInputKeydown}
                placeholder="Type in for filter"
            />
            <FilmsList data={filteredFilms} onClick={handleOpenDetails}/>
            {   details && (
             <>
                    <FilmDetails
                        details={details}
                        onClick={handleCloseDetails}
                    />
             </>
            )}
    </div>
  );
}
