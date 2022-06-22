import React, { useState } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
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

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://aecom.com/sg/wp-content/uploads/2019/03/MMP0043.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
