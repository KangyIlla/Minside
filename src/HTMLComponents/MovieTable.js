import React from "react"

const Card = ({ movie }) => {
    return (
        <div className="table-responsive" style={ {padding: '50px'}}>
            <table key={movie.id} className="table">
                <tbody>
                    <tr>
                        <td>
                            <h4 style={{color: "#feda4a"}}>{movie.title}</h4>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <p className="text-secondary">
                                <small>Director:</small>
                                <small>{movie.director}</small>
                            </p>
                            <p className="text-secondary">
                                <small>Producer:</small>
                                <small>{movie.producer}</small>
                            </p>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default Card;