import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./App.css";

const Moviecard = ({ title, description, poster_path, rating }) => {
  const imagePath = `https://image.tmdb.org/t/p/w400${poster_path}`;

  return (
    <div className="whole-card">
      {/* <p>{title}</p> */}
      <Card style={{ width: "200px", marginTop: "5px", overflow: "hidden" }}>
        <Card.Img
          variant="top"
          style={{ width: "300px", height: "300px" }}
          src={imagePath}
          className="img"
        />
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Card.Title style={{ color: "white" }}>{title}</Card.Title>
        </Card.Body>
        <div>
          <p>
            <strong style={{ color: "lightblue" }}>Rating:</strong> {rating} /
            10
          </p>
          {/* Optional: Progress Bar for visual representation */}
          <ProgressBar
            style={{ color: "lightblue" }}
            now={rating * 10}
            label={`${rating * 10}%`}
            variant={
              rating >= 7 ? "success" : rating >= 5 ? "warning" : "danger"
            }
          />
        </div>
        {/* <Button variant="primary"></Button> */}
      </Card>
    </div>
  );
};

export default Moviecard;

// return (
//   <div>
//     {loading ? ( // If loading is true
//       <p>Loading...</p>
//     ) : (
//       <div className="card-con">
//         {data.map((item) => (
//           <Moviecard
//             key={item.id}
//             title={item.original_title}
//             description={item.overview}
//             poster_path={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
//           />
//         ))}
//       </div>
//     )}
//   </div>
// );
