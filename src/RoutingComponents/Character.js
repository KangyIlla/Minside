import React, { Component } from 'react';
import "./Character.css"
import CharactersTable from "../HTMLComponents/CharactersTable"

class Character extends Component {
    _isMounted = false;

    constructor(props) {
        super(props)

        this.state = {
            items: [],
            loading: false,
            next: 'https://swapi.co/api/people/',
            currentPage: 1,
            itemsPerPage: 10
        };
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    componentDidMount = async () => {
        this._isMounted = true;
        do {
            await fetch(this.state.next)
                .then(response => response.json())
                .then(data => {
                    if (this._isMounted) {
                        this.setState({
                            items: this.state.items.concat(data.results),
                            next: data.next,
                        })
                    }
                });
        } while (this.state.next != null)
        if (this._isMounted) {
            this.setState({
                loading: true
            })
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { items, loading, currentPage, itemsPerPage } = this.state;
        if (loading == true) {
            const indexOfLastItem = currentPage * itemsPerPage;
            const indexOfFirstItem = indexOfLastItem - itemsPerPage;
            items.sort((a, b) => (a.name > b.name) ? 1 : -1);
            const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)
            const renderItems = currentItems.map((character, index) => {
                return <CharactersTable key={`${index}-${character.title}`} character={character} />;
            });
            const allPageNumbers = [];
            for (let i = 1; i < Math.ceil(items.length / itemsPerPage); i++) {
                allPageNumbers.push(i);
            }

            const renderPageNumbs = allPageNumbers.map(x => {
                return (
                    <li className="page-item mr-5 mb-5" style={{ color: "yellow" }} key={x} id={x} onClick={this.handleClick}> {x} </li>
                )
            })

            return (

                <div className="star-background2">
                    {renderItems}
                    <nav>
                        <ul id="page-numbers" className="pagination justify-content-center">
                            {renderPageNumbs}
                        </ul>
                    </nav>
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

export default Character;