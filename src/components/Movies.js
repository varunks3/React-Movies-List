import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col } from 'react-bootstrap';
import NavBar from "./NavBar";

function Welcome() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://hoblist.com/api/movieList";
      const postData = {
            category: "movies",
            language: "kannada",
            genre: "all",
            sort: "voting"
          };
      try {
        const response = await axios.post(url, postData);
        let tarr = response.data.result;
        tarr.sort((a,b)=>{
          let v1 = a.upVoted?a.upVoted.length:0;
          let v2 = b.upVoted?b.upVoted.length:0;
          return v1-v2
        })

        setData(tarr);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <NavBar/>
    <div className="my-3 ml-3 flex flex-col w-full">
    
      {data ? (
        data.map((movie) => (
          <Card style={{ width: '28rem', margin: "auto", marginBottom: "0.9rem" , padding: "0.2rem"}} key={movie._id}>
            <Row>
            <Col >
            <Card.Img src={movie.poster} alt={movie.title} />
            </Col>
            <Col >
            <h4>{movie.title}</h4>
            <Card.Text><b>Language:</b> {movie.language}</Card.Text>
            <Card.Text><b>Genre: </b>{movie.genre}</Card.Text>
            <Card.Text><b>Released Date:</b> {new Date(movie.releasedDate * 1000).toLocaleDateString()}</Card.Text>
            <Card.Text><b>Director:</b> {movie.director.join(', ')}</Card.Text>
            <Card.Text><b>Starring:</b> {movie.stars.join(', ')}</Card.Text>
            <Card.Text><b>Views:</b> {movie.pageViews}</Card.Text>
            </Col>
            </Row>
          </Card>
        ))
      ): null}
    </div>
    </>

  );
};

export default Welcome