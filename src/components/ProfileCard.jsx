import React from 'react';
import pic from '../assets/images/pic.jpg';
import {Link} from 'react-router-dom';

function ProfileCard() {

  return (
    <div>
    <style jsx>{`
      img {
        border-radius: 4px;
        width: 150px;
        float: right
      }
    `}</style>

      <div className="card border border-dark" >
        <div className="container pt-3">
          <div className="justify-content-md-center">
            <div className="description">
            <img className="card-img-top" src={pic} alt="Card image cap"/>
              <blockquote className="blockquote mb-0">
                <h5 className="card-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vitae id tempora dolores temporibus fugiat incidunt doloribus atque consequatur deserunt, hic, voluptatum cumque laudantium ducimus corporis suscipit earum et libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</h5>
                <footer className="blockquote-footer">Boogie Nights<cite title="Source Title">- Source Title</cite></footer>
              </blockquote>
            </div>
          </div>
        </div>
       
        <div className="card-body">
          <div className="container d-flex justify-content-center">
            <Link to = '/new' className="btn btn-primary mx-2">Post</Link>
            <Link to = '/' className="btn btn-primary mx-2">Tweets</Link>
            <a href="#" className="btn btn-primary mx-2">Following</a>
            <a href="#" className="btn btn-primary mx-2">Followers</a></div>
        </div>
        
      </div>
    </div>
  );
};

export default ProfileCard;

