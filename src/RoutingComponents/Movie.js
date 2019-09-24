import React, { Component } from 'react';
import MovieTable from "../HTMLComponents/MovieTable"
import "./Movie.css"

class About extends Component {
    _isMounted = false;

    constructor(props) {
        super(props)

        this.state = {
            items: [],
            loading: false
        };

    }

    componentDidMount(){
        this._isMounted = true;
        const url = 'https://swapi.co/api/films/';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            if(this._isMounted){
                this.setState({
                    items: data.results,
                    loading: true
                })
            }
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { items, loading } = this.state;
        if (loading == true) {
            return (

                <div className="star-background2">
                    {items.map((movie, index) => {
                        return <MovieTable key={`${index}-${movie.title}`} movie={movie} />;
                    })}
                </div>
            )
        }
        else {
            return (
                <div className="star-background2">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="spinner-border text-warning center-Text" role="status">
                                <span className="sr-only">Loading..</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

}


export default About;