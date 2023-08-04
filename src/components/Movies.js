import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";

function Movies() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://hoblist.com/api/movieList";
      const postData = {
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      };
      try {
        const response = await axios.post(url, postData);
        let tarr = response.data.result;
        tarr.sort((a, b) => {
          let v1 = a.upVoted ? a.upVoted.length : 0;
          let v2 = b.upVoted ? b.upVoted.length : 0;
          return v1 - v2;
        });
        setData(tarr);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <NavBar />
      <div>
        {data
          ? data.map((movie) => (
              <Card
                style={{
                  width: "28rem",
                  margin: "auto",
                  marginBottom: "0.9rem",
                  padding: "0.2rem",
                  height:"20%"
                }}
                key={movie._id}
              >
                <Row>
                  {/* <Col></Col> */}
                  <Col className=" h-50">
                    <Card.Img src={movie.poster} alt={movie.title} className="h-50 p-2"/>
                  </Col>
                  <Col className="h-50">
                    <h4>{movie.title}</h4>
                    <Card.Text className=" m-0">
                      <b className=" text-secondary">Genre: </b>
                      {movie.genre}
                    </Card.Text>
                    <Card.Text className=" m-0">
                      <b className=" text-secondary">Director:</b>{" "}
                      {movie.director.join(", ")}
                    </Card.Text>
                    <Card.Text className=" m-0">
                      <b className=" text-secondary">Starring:</b>{" "}
                      {movie.stars.join(", ")}
                    </Card.Text>
                    <div className="d-flex">
                      <Card.Text>
                        {movie.language} |{" "}
                        {new Date(
                          movie.releasedDate * 1000
                        ).toLocaleDateString()}
                      </Card.Text>
                    </div>
                    <div className="d-flex text-primary">
                      <Card.Text>
                        {movie.pageViews} views | voted by {movie.voted.length}{" "}
                        People
                      </Card.Text>
                    </div>
                  </Col>
                </Row>
              </Card>
            ))
          : null}
      </div>
    </>
  );
}

export default Movies;
