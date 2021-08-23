import React from 'react';
import PropTypes from 'prop-types'

const foodILike = [
  {
    id:1,
    name: "kimchi",
    image:"https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png"
  },
  {
    id:2,
    name: "bibimbap",
    image:"https://recipe1.ezmember.co.kr/cache/recipe/2018/10/03/355b5cd5c3beb1a775c82ee425dcd1931.jpg"
  },
  {
    id:3,
    name: "samgyeopsal",
    image:"https://post-phinf.pstatic.net/MjAyMDAzMDNfMTcg/MDAxNTgzMTkwNjA3ODQ5.kUXPHqGJ2xPDSu_3FiEoFC3kY9QyQ_g9CziCGrFSDuEg.LpCfOTbc5qth9d-GKzGv9jwj2VKhcqmPHp5cp1KJYEsg.JPEG/IM_food02.jpg"
  }
]

function Food({name, ficture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={ficture} alt={name} />
    </div>
  )
}

Food.propTypes={
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} ficture={dish.image} rating={dish.rating} />)}
    </div>
  );
}

export default App;
