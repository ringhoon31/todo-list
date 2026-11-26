import Header from "./components/Header"
import MovieEditor from "./components/MovieEditor"
import MovieList from "./components/MovieList"
import './App.css'
import { useState, useRef } from "react"

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "어벤져스 둠스데이",
    date: new Date().getTime()
  },
  {
    id: 1,
    isDone: false,
    content: "판타스틱4",
    date: new Date().getTime()
  },
  {
    id: 2,
    isDone: false,
    content: "마법사의 밤",
    date: new Date().getTime()
  }
]


function App() {

  const [Movies, setMovies] = useState(mockData)
  const idRef = useRef(3)

  const onCreate = (content) => {
    const newMovie = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }

    setMovies([newMovie, ...Movies])
  }

  const onUpdate = (targetId, updates) => {

    setMovies((prev) =>
      prev.map((Movie) =>
        Movie.id == targetId
          ? { ...Movie, ...updates }
          : Movie
      )
    )

  }

  const onDelete=(targetId)=>{
    setMovies(Movies.filter((Movie)=>Movie.id!==targetId))
  }
  return (
    <div className="App">
      <Header />
      <MovieEditor onCreate={onCreate} />
      <MovieList Movies={Movies} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App