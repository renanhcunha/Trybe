import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props;
    return (
      <div className='pokemon'>
        <div className='info'>
          <h3>{name}</h3>
          <p>Type: {type}</p>
          <p>Average Weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
        <img src={image} alt={name}/>
      </div>
    )
  }
}

export default Pokemon;