import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Sard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/02/75/74/58/360_F_275745846_slBI2EsTudIShef6hMliS6Oa123tC9Zv.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Sard;