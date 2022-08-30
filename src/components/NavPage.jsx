export default function NavPage({ page, handleClickPrev, handleClickNext }) {
    return (
        <header className="d-flex justify-content-between align-items-center">
            <button
                onClick={handleClickPrev}
                className="btn btn-primary btn-sm"
            >
                {page - 1}
            </button>
            <p>Page: {page}</p>
            <button
                onClick={handleClickNext}
                className="btn btn-primary btn-sm"
            >
                {page + 1}
            </button>
        </header>
    );
}
