import { useEffect, useState } from "react";
import Character from "./Character.jsx";
import NavPage from "./NavPage";

function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const handleClickPrev = () => {
        page > 1 && setPage(page - 1);
    };
    const handleClickNext = () => {
        page < 42 && setPage(page + 1);
    };

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `https://rickandmortyapi.com/api/character?page=${page}`
            );
            const data = await response.json();
            setCharacters(data.results);
            setLoading(false);
        }

        fetchData();
    }, [page]);

    return (
        <div className="container  ">
            {loading ? (
                <h1>Loading</h1>
            ) : (
                <>
                    <NavPage
                        page={page}
                        handleClickNext={handleClickNext}
                        handleClickPrev={handleClickPrev}
                    />
                    <div className="row">
                        {characters.map((character) => (
                            <div key={character.id} className="col-md-4">
                                <Character character={character} />
                            </div>
                        ))}
                    </div>
                    <NavPage
                        page={page}
                        handleClickNext={handleClickNext}
                        handleClickPrev={handleClickPrev}
                    />
                </>
            )}
        </div>
    );
}

export default CharacterList;
