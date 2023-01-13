import { useEffect, useState } from 'react'
import {Card,Container,Row,Col,Image} from 'react-bootstrap'
import axios from 'axios'

const Hyakkiyako = () => {
    const [character, setCharacter] =   useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/characters`, {
            params: {
                school: 'Hyakkiyako'
            }
        }).then((response) => {
           setCharacter(response.data.data)
        })
    }, [])

    return (
        <div>
          <Container>
            <br />
            <h1 className="text-black text-center">
              <img src='https://static.miraheze.org/bluearchivewiki/thumb/3/36/Hyakkiyako.png/50px-Hyakkiyako.png' className='px-5' alt='Hyakkiyako School Logo'/>Hyakkiyako Student
            </h1>
            <br />
            <Row>
          {character.map((result, index) => {
            return (
            <Col md={4} className="studentWrapper" id="Hyakkiyako" key={index}>
              <Card className="studentImage">
              <Image src={result.photoUrl} alt={`${result.name}`} className="images rounded-top" />
              <div className="bg-light rounded-bottom">
                <div className="p-2 m-1 text-danger">
                  <Card.Title className="text-center">{result.name}</Card.Title>
                  <Card.Text className="text-left">
                    <b>Details</b>
                    <br></br>
                  </Card.Text>
                  <Card.Text className="text-left">
                  <b>Birthday : </b>{result.birthday}
                  </Card.Text>
                  <Card.Text className="text-left">
                  <b>Damage Type : </b>{result.damageType}
                  </Card.Text>
                </div>
              </div>
              </Card>
            </Col>
            )
          })}
        </Row>
          </Container>
        </div>
      )
}

export default Hyakkiyako