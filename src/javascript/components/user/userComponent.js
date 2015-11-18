import React from 'react';

var userLayout = React.createClass({
  makeAlert: function(){
    alert("Hi bas")
  },
	render: function(){
		return <div>
            <div className="profile">

    <div className="avatar">
      <div className="thumbnail">
        <img src="./images/profile-img1.jpg" alt=""></img>
      </div>
      <div className="caption">
        Billie Holiday
      </div>
    </div>

    <ul className="categories">
      <li className="active"><a href="">experiences</a></li>
      <li><a href="">bucket lists</a></li>
      <li><a href="">liked</a></li>
    </ul>

    <div className="profile-search">
      <i className="fa fa-search"></i>
      <input type="text" className="input" placeholder="Search your saved items"></input>
      <div className="dropdown">
        <div className="dropdown-menu">
          <a href="" className="menu-button"><i className="fa fa-bars"></i></a>
          <ul>
            <li>
              <a href="">All</a>
              <a href="">Mine</a>
              <a href="">Others</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <div className="experience">
      <div className="thumbnail">
        <div className="details">
          <a href=""><i className="fa fa-heart-o"></i></a>
        </div>
        <div className="overlay">
          <div className="overlay-content">
            <div className="options">
              <button className="btn"><i className="fa fa-eye"></i> explore</button>
              <button className="btn"><i className="fa fa-plus-square-o"></i> add to list</button>
            </div>
          </div>
        </div>
        <img src="./images/experience-img1.jpg" alt=""></img>
      </div>
      <div className="caption">
        <span className="name">Best camera shops in East London</span>
        <small className="description">London, UK</small>
      </div>
    </div>

    <div className="experience">
      <div className="thumbnail">
        <div className="details">
          <a href=""><i className="fa fa-heart-o"></i></a>
        </div>
        <div className="overlay">
          <div className="overlay-content">
            <div className="options">
              <button className="btn"><i className="fa fa-eye"></i> explore</button>
              <button className="btn"><i className="fa fa-plus-square-o"></i> add to list</button>
            </div>
          </div>
        </div>
        <img src="./images/experience-img1.jpg" alt=""></img>
      </div>
      <div className="caption">
        <span className="name">Best camera shops in East London</span>
        <small className="description">London, UK</small>
      </div>
    </div>

    <div className="experience">
      <div className="thumbnail">
        <div className="details">
          <a href=""><i className="fa fa-heart-o"></i></a>
        </div>
        <div className="overlay">
          <div className="overlay-content">
            <div className="options">
              <button className="btn"><i className="fa fa-eye"></i> explore</button>
              <button className="btn"><i className="fa fa-plus-square-o"></i> add to list</button>
            </div>
          </div>
        </div>
        <img src="./images/experience-img1.jpg" alt=""></img>
      </div>
      <div className="caption">
        <span className="name">Best camera shops in East London</span>
        <small className="description">London, UK</small>
      </div>
    </div>


  </div>
          </div>
	}
});

export default userLayout;

          