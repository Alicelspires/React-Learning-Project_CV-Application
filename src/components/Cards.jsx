import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

export default function Cards({dataList, onAdd, onDelete, renderItem, getTitle  }) {
    return (
        <>
            {dataList.map((item, index) => (
                <Accordion key={index} defaultActiveKey="0" className="mb-3">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>{ getTitle(item)}</Accordion.Header>
                        <Accordion.Body>
                            {renderItem(item, index)}
                            <Button
                                className="mt-3"
                                variant="danger"
                                onClick={() => onDelete(index)}
                            >
                                Delete
                            </Button>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            ))}
            <Button variant="warning" className="mb-4" onClick={onAdd}>
                + Add more
            </Button>
        </>
    )
}
