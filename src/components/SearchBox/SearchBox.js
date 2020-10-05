import React from 'react';

const SearchBox = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="d-flex flex-column align-items-center py-5 mt-3">
                            <h1 className="search_title">I grow by helping people in need.</h1>
                            <form className="d-flex mt-3">
                                <input className="search_box" type="search" placeholder="Search...." aria-label="Search" />
                                <button className="button search_btn" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchBox;