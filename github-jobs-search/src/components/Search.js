import React, { Component } from 'react';

class Search extends Component {
  render() {
    return(
      <div className="search-container">
        <div className="header">
          <h1 className="title bold">
            Find your job!
          </h1>
        </div>
        <div className="search-fields">
          <form className="search-form" onSubmit={this.handleSubmit}>
            <div className="location">
              <input
                className="input position" 
                type="search" 
                name="location" 
                placeholder="Location" 
                onChange={this.handleInputChange}
              />
            </div>
            <div className="description">
              <input 
                className="input position" 
                type="search" 
                name="description" 
                placeholder="Jobs description" 
                onChange={this.handleInputChange}
              />
            </div>
            <div className="check input position">
              <label>
                <input 
                  type="checkbox" 
                  name="fulltime" 
                />
                Full time?
              </label>
            </div>
            <div className="input position">
              <button className="search-button " type="submit">Search</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Search; 