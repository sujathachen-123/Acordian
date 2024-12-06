import { Component } from "react";
import "./main.css";
import vivo from "./asserts/vivo.jpg"
import iphone from "./asserts/iphone1.jpg"
import susm from "./asserts/samsung.jpg"

const products = [
  {
    productName: "Vivo s1 pro",
    productPrice: 20000,
    productAvailability: false,
  },
  {
    productName: "Apple iphone13",
    productPrice: 46000,
    productAvailability: true,
  },
  {
    productName: "Samsung Galaxy S23",
    productPrice: 36000,
    productAvailability: false,
  },
];

class Main extends Component {
  render() {
    return (
      <>
        <div className="mainbox">
          <div style={{width:"20vw",height:"65vh"}}
            className={
              products[0].productAvailability ? "available" : "unavailable"}>
                <img style={{width:"20vw"}} src={vivo} alt="phonevivo"/>
          <h1> {products[0].productName}</h1> 
          <h1> {products[0].productPrice}</h1> 
          </div>
          <div style={{width:"20vw",height:"65vh"}} className={
              products[1].productAvailability ? "available" : "unavailable"}>
                <img style={{width:"20vw"}} src={iphone} alt="phoneiphone"/>
            <h1> {products[1].productName}</h1> 
            <h1> {products[1].productPrice}</h1> 
          </div>
          <div style={{width:"20vw",height:"65vh"}} className={
              products[2].productAvailability ? "available" : "unavailable"}>
                <img style={{width:"20vw"}} src={susm} alt="phonesusmsung"/>
            <h1> {products[2].productName}</h1> 
            <h1>{products[2].productPrice}</h1> 
          </div>
        </div>
      </>
    );
  }
}
const styles = {
  // available: { color: "black", padding: "25px" },
  // unavailable: { color: "white", padding: "25px" },
  redbox: { backgroundColor: "red",padding:"20px" },
  greenbox: { backgroundColor: "green",padding:"20px" },
};

export default Main;
