import React from 'react'
import { Carousel } from 'react-bootstrap'
import Center from '../Center/Center'
import Info from '../Info/Info'


export default function CorouselBox() {
  return (
    <Carousel>
      <Carousel.Item>
        <Center className="d-block w-100"/>
      </Carousel.Item>
      <Carousel.Item>
        <Info className="d-block w-100"/>
      </Carousel.Item>
      <Carousel.Item>
        <Center className="d-block w-100"/>
      </Carousel.Item>
    </Carousel>
  )
}
