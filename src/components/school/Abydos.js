import { useEffect, useState } from 'react'
import {Card,Container,Row,Col,Image} from 'react-bootstrap'
import axios from 'axios'

const Abydos = () => {
    const [character, setCharacter] =   useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/characters`, {
            params: {
                school: 'Abydos'
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
              <img src='https://static.miraheze.org/bluearchivewiki/thumb/9/91/Abydos.png/50px-Abydos.png' className='px-5' alt='Abydos School Logo'/>Abydos Student
            </h1>
            <br />
            <Row>
          {character.map((result, index) => {
            return (
            <Col md={4} className="studentWrapper" id="Abydos" key={index}>
              <Card className="studentImage">
              <Image src={result.photoUrl} alt={`${result.name}`} className="images rounded-top" />
              <div className="bg-dark rounded-bottom">
                <div className="p-2 m-1 text-primary">
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

export default Abydos