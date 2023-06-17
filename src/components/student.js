import { useEffect, useState } from 'react'
import {Card,Container,Row,Col,Image} from 'react-bootstrap'
import axios from 'axios'

const Student = ({style, type, value}) => {

    const [character, setCharacter] =  useState([])

    useEffect(() => {
          axios.get(`${process.env.REACT_APP_BASE_URL}/api/characters?${type}=${value}`, {
        }).then((response) => {
           setCharacter(response.data.data)
        })
    }, [value, type])


    if(type === "damageType"){
      return (
          <div>
            <Container>
              <br />
              <h1 className="text-black text-center">{value}-type Student</h1>
              <br />
              <Row>
            {character.map((result, index) => {
              return (
              <Col md={4} className="studentWrapper" id={value} key={index}>
                <Card className="studentImage" style={style}>
                <Image src={result.photoUrl} alt={`${result.name}`} className="images rounded-top" />
                <div className="bg-light rounded-bottom">
                  <div className={`p-2 m-1`}>
                    <Card.Title className="text-center">{result.name}</Card.Title>
                    <Card.Text className="text-left">
                      <b className='text-center'>Details</b>
                      <br></br>
                    </Card.Text>
                    <Card.Text className="text-left">
                    <b>Birthday : </b>{result.birthday}
                    </Card.Text>
                    <Card.Text className="text-left">
                    <b>School : </b><img src={result.imageSchool} alt={`${value} School`}/> ({result.school})
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

    if(type === 'school'){
      return (
        <div>
          <Container>
            <br />
            {value === 'Gehenna' ? 
              <h1 className="text-black text-center">
              <img src='https://static.miraheze.org/bluearchivewiki/thumb/b/bd/Gehenna.png/50px-Gehenna.png' className='px-5' alt='Gehenna School Logo'/>Gehenna Student
            </h1> : null}

            {value === 'Millennium' ? 
              <h1 className="text-black text-center">
              <img src='https://static.miraheze.org/bluearchivewiki/thumb/2/2a/Millennium.png/50px-Millennium.png' className='px-5' alt='Millennium School Logo'/>Millennium Student
            </h1> : null}

            {value === 'Red Winter' ? 
              <h1 className="text-black text-center">
              <img src='https://static.miraheze.org/bluearchivewiki/thumb/8/8b/Red_Winter.png/50px-Red_Winter.png' className='px-5' alt='Red Winter School Logo'/>Red Winter Student
            </h1> : null}

            {value === 'Abydos' ? 
              <h1 className="text-black text-center">
             <img src='https://static.miraheze.org/bluearchivewiki/thumb/9/91/Abydos.png/50px-Abydos.png' className='px-5' alt='Abydos School Logo'/>Abydos Student
            </h1> : null}

            {value === 'Arius' ? 
              <h1 className="text-black text-center">
              <img src='https://static.miraheze.org/bluearchivewiki/thumb/9/93/Arius.png/50px-Arius.png' className='px-5' alt='Arius School Logo'/>Arius Student
            </h1> : null }

            {value === 'Hyakkiyako' ? 
              <h1 className="text-black text-center">
              <img src='https://static.miraheze.org/bluearchivewiki/thumb/3/36/Hyakkiyako.png/50px-Hyakkiyako.png' className='px-5' alt='Hyakkiyako School Logo'/>Hyakkiyako Student
            </h1> : null }

            {value === 'SRT' ? 
              <h1 className="text-black text-center">
              <img src='https://static.miraheze.org/bluearchivewiki/thumb/5/5a/SRT.png/50px-SRT.png' className='px-5' alt='SRT School Logo'/>SRT Student
            </h1> : null }

            {value === 'Valkyrie' ? 
              <h1 className="text-black text-center">
              <img src='https://static.miraheze.org/bluearchivewiki/thumb/d/d5/Valkyrie.png/50px-Valkyrie.png' className='px-5' alt='Valkyrie School Logo'/>Valkyrie Student
            </h1> : null }

            {value === 'Shanhaijing' ? 
              <h1 className="text-black text-center">
              <img src='https://static.miraheze.org/bluearchivewiki/thumb/b/be/Shanhaijing.png/50px-Shanhaijing.png' className='px-5' alt='Shanhaijing School Logo'/>Shanhaijing Student
            </h1> : null }

            <br />
            <Row>
          {character.map((result, index) => {
            return (
            <Col md={4} className="studentWrapper" id={value} key={index}>
              <Card className="studentImage" style={style}>
              <Image src={result.photoUrl} alt={`${result.name}`} className="images rounded-top" />
              <div className="bg-dark rounded-bottom">
                <div className="p-2 m-1">
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
}

export default Student