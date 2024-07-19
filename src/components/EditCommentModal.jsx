import { Button, Form, Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getCommentsAction, showCommentModalOffAction } from "../redux/actions"
import { token } from "../../token"

import { useEffect, useState } from "react"

const EditCommentModal = () => {

    const currentComment = useSelector(state => state.comments.selectedComment)

    const [comment, setComment] = useState("")

    const dispatch = useDispatch()
    const show = useSelector(state => state.show.editComment)
    const handleClose = () => {
        setComment(currentComment.comment)
        dispatch(showCommentModalOffAction())
    }

    const newComment = {
        comment
    }

    useEffect(() => {
        if (currentComment) {
            setComment(currentComment.comment)
        }

    }, [currentComment])


    const handleDelete = async (id) => {
        try {

            const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
                method: "DELETE",
                headers: {
                    Authorization: token,
                    "Content-Type": "application/json"
                },

            });

            if (resp.ok) {
                alert('commento eliminato con successo')
                dispatch(showCommentModalOffAction())
                dispatch(getCommentsAction())
            } else {
                throw new Error("Errore nel reperimento dei lavori");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const editComment = async (id) => {
        try {

            const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
                method: "PUT",
                headers: {
                    Authorization: token,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newComment)
            });

            if (resp.ok) {
                alert('commento modificato con successo')
                dispatch(getCommentsAction());
                dispatch(showCommentModalOffAction())
            } else {
                throw new Error("Errore nel reperimento dei lavori");
            }
        } catch (error) {
            console.log(error);
        }
    }

    /*     const handleClick = () => {
            editComment(currentComment.comId)
        } */



    const handleSubmit = (e) => {
        e.preventDefault()
        editComment(currentComment.comId)
    }

    return (currentComment &&
        <Modal size="lg" show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Commento sul post di
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="Comment">
                        <Form.Label>Commento:</Form.Label>
                        <Form.Control as="textarea" rows={3} value={comment} onChange={e => setComment(e.target.value)} />
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" type="button" onClick={() => handleDelete(currentComment.comId)} >
                        Elimina
                    </Button>
                    <Button variant="primary" type="submit" >
                        Modifica
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default EditCommentModal