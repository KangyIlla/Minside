
import React from "react"
import { Button, Modal, ButtonToolbar } from 'react-bootstrap';


const CharactersTable = ({ character }) => {

    function CharacterModal(props) {
        return (
            <Modal {...props} size="sm" centered>
                <Modal.Header closeButton>
                    <h4> {character.name} </h4>
                </Modal.Header>
                <Modal.Body>
                    <div className="table-responsive">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>
                                        <small>Gender: </small>
                                        <small>{character.gender}</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <small>Height: </small>
                                        <small>{character.height}</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <small>Birth year: </small>
                                        <small>{character.birth_year}</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <small>Hair colour: </small>
                                        <small>{character.hair_color}</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <small>Skin colour: </small>
                                        <small>{character.skin_color}</small>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={props.onHide}> Close </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="table-responsive" style={{ padding: '50px' }}>
            <table key={character.id} className="table">
                <tbody>
                    <tr>
                        <td>
                            <h4 style={{ color: "#feda4a" }}>{character.name}</h4>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <ButtonToolbar>
                                <Button variant="warning" onClick={() => setModalShow(true)}>
                                    Detail
                            </Button>
                                <CharacterModal show={modalShow} onHide={() => setModalShow(false)}> </CharacterModal>
                            </ButtonToolbar>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );

}

export default CharactersTable;

