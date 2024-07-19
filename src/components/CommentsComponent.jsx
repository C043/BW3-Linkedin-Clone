import { Button, Col, Image, Row } from "react-bootstrap"
import { useSelector } from "react-redux"



const CommentsComponent = () => {

    const comment = useSelector(state => state.comments.content[0])

    return (

        <Row>

            <Col xs="3"><Image width={50} className="d-block ms-auto rounded-circle" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E" /></Col>

            <Col xs="9" className="d-flex flex-column">
                <div style={{ backgroundColor: '#F2F2F2' }} className=" rounded-bottom-3 rounded-end-3 p-3 pb-0">
                    <div className="d-flex align-items-center gap-2">
                        <h1 className="h6 m-0">{comment.author} •</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" class="bi bi-globe-americas text-secondary"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"></path></svg>
                    </div>
                    <p style={{ fontSize: '15px' }} className="my-1 text-secondary">title</p>
                    <p>{comment.comment}</p>
                </div>
                <div className="d-flex  my-2">
                    <Button variant="trasparent" className="border-2 border-end" size="sm">Consiglia</Button>
                    <Button variant="trasparent" size="sm">Rispondi</Button>
                </div>
            </Col>

        </Row>


    )
}



export default CommentsComponent