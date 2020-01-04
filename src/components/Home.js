import React from "react";
import BarExample from './Bar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="bootstrap-wrapper">
      <div className="row">
        <BarExample />
        <BarExample />
      </div>
    </div>
  )
}

export default Home;