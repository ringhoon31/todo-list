import React, { useState } from 'react'
import MovieItem from './MovieItem'
import './MovieList.css'

const MovieList = ({ Movies ,onUpdate,onDelete}) => {
    const [search, setSearch] = useState('')
    const onChangeSearch = (e) => {
        setSearch(e.target.value)

    }

    const filteredData = () => {
        if (search == '') {
            return Movies;
        }

        return Movies.filter((Movie) =>
            Movie.content
                .toLowerCase()
                .includes(search.toLowerCase())
        )
    }
    const filteredMovies= filteredData()
    return (
        <div className='MovieList'>
            <h2>🎥보고싶은 영화 목록🎥</h2>
            <h4>🎞️영화를 봤으면 체크하면 되요🎞️</h4>
            <input type="text"
                value={search}
                onChange={onChangeSearch}
                placeholder='찾을 영화를 검색해보세요' />
            <div className="Movies-wrapper">
                {filteredMovies.map((Movie) => (
                    <MovieItem key={Movie.id} {...Movie} onUpdate={onUpdate} onDelete={onDelete} />
                ))}
            </div>
        </div>
    )
}

export default MovieList