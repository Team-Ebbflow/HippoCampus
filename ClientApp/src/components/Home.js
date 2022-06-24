import React from 'react';
import { Carousel, Card, Button, CardGroup } from 'react-bootstrap';
import './style.css'

export default function Home() {

  return (
  <div>
    <Carousel id='carouselMain'>
        <Carousel.Item>
            <img
                className='bannerImg'
                src="https://aecom.com/sg/wp-content/uploads/2019/03/MMP0043.jpg"
                alt="First slide"
            />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className='bannerImg'
                src="https://media.discordapp.net/attachments/989084273522909234/989084437683793960/gayUONhehe.jpg?width=756&height=504"
                alt="Second slide"
              />
        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className='bannerImg'
                src="https://media.discordapp.net/attachments/989084273522909234/989084596643721236/students_studying.jpg?width=756&height=504"
                alt="Third slide"
              />
        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>

    <CardGroup style={{padding: '1%'}}>
        <Card style={{ marginLeft: '3%' }}>
            <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/989084273522909234/989084596643721236/students_studying.jpg" />
            <Card.Body>
                <Card.Title>Student</Card.Title>
                <Card.Text>
                    Join our Diverse Student Communities
                </Card.Text>
                <Button variant="primary" href="#">Explore</Button>
            </Card.Body>
        </Card>

        <Card style={{ marginLeft: '1%' }}>
                  <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/989084273522909234/989834914943893525/Engineers_Australia_Student_Society.jpg" />
            <Card.Body>
                <Card.Title>Chapters</Card.Title>
                <Card.Text>
                    Student Chapters & Clubs
                </Card.Text>
                <Button variant="primary" href="#">Explore</Button>
            </Card.Body>
        </Card>

        <Card style={{ marginLeft: '1%', marginRight: '3%' }}>
            <Card.Img variant="top" src="https://aecom.com/sg/wp-content/uploads/2019/03/MMP0043.jpg" />
            <Card.Body>
                <Card.Title>Alumi Events</Card.Title>
                <Card.Text>
                    Movie Nights and more!
                </Card.Text>
                <Button variant="primary" href="#">Explore</Button>
            </Card.Body>
        </Card>
    </CardGroup>
  </div>
  );
}
