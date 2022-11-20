
import React from 'react';

const Home = () => {


    return (
      <div className="home">
        <p> please work </p>
        <form action="http://localhost:5000/upload" enctype="multipart/form-data" method="POST">
          <input type="file" name="pic" />
          <input type="submit" value="Upload a file"/>
        </form>
      </div>
    );
  }

export default Home;