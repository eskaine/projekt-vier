import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faMinus} from '@fortawesome/free-solid-svg-icons';

function Dishes({selectedCategory, categoryHeaderPos}) {
  const dishesData = [
    {
      name: 'Lobster & Crab Stuffed Mushrooms',
      img_url:
        'https://res.cloudinary.com/d7bdciwna5/image/upload/v1607397311/vier/cuxqLB9H2685fJoAAa3C.jpg',
      price: 12,
      description: 'Oysters on the half-shell baked with cheese & sprinkled with bacon bits',
    },
    {
      name: 'Prawn & Mango Delight',
      price: 12,
      img_url:
        'https://res.cloudinary.com/d7bdciwna5/image/upload/v1607397311/vier/Qgyke2b3STK09wHWWs7R.jpg',
      description: 'Chicken wings marinated in Chef’s special seasoning & deep-fried to perfection',
    },
    {
      name: 'Combo',
      img_url:
        'https://res.cloudinary.com/d7bdciwna5/image/upload/v1607397311/vier/sUDmgQV7ve4SgXOuNajL.jpg',
      price: 12,
      description: 'Chicken wings marinated in Chef’s special seasoning & deep-fried to perfection',
    },
    {
      name: 'Seafood',
      price: 5,
      img_url:
        'https://res.cloudinary.com/d7bdciwna5/image/upload/v1607397311/vier/uYLGylmtE8rQvPXlRSfu.jpg',
      description: 'Chicken wings marinated in Chef’s special seasoning & deep-fried to perfection',
    },
    {
      name: 'Beverages',
      price: 15,
      img_url:
        'https://res.cloudinary.com/d7bdciwna5/image/upload/v1607397311/vier/J65f5UAB3TW5zpU5DlYU.jpg',
      description: 'Chicken wings marinated in Chef’s special seasoning & deep-fried to perfection',
    },
    {
      name: 'Pasta',
      price: 12,
      img_url:
        'https://res.cloudinary.com/d7bdciwna5/image/upload/v1607397311/vier/uYLGylmtE8rQvPXlRSfu.jpg',
      description: 'Chicken wings marinated in Chef’s special seasoning & deep-fried to perfection',
    },
  ];

  const [selectedDish, setSelectedDish] = useState('');

  function expandDish(name) {
    if (selectedDish === name) {
      setSelectedDish('');
    } else {
      setSelectedDish(name);
    }
  }

  const dishes = dishesData.map((dish) => (
    <div className="dish-card" key={dish.name} style={dish.name === selectedDish ? {height: `240px`} : {}}>
      <img src={dish.img_url} alt="" />
      <div className="dish-info" onClick={() => expandDish(dish.name)}>
        <div className="dish-title-description-div">
          <h4>{dish.name}</h4>
          {dish.name === selectedDish ? <p>{dish.description}</p> : ''}
        </div>
        <div className="weight-price-div">
          <p>250g</p>
          <h6>${dish.price}</h6>
        </div>
      </div>
      <div className="dish-quantity-div">
        <div className="fa-icon-div">
          <FontAwesomeIcon icon={faPlus} className="fa-icon plus" />
        </div>
        <div className="quantiy-count">
          <h6>5</h6>
        </div>
        <div className="fa-icon-div">
          <FontAwesomeIcon icon={faMinus} className="fa-icon minus" />
        </div>
      </div>
    </div>
  ));

  return (
    <div className="home-page-div">
      <div className="category-header-div" style={{left: `${categoryHeaderPos}vw`}}>
        <h3>{selectedCategory} </h3>
        <h3>menu</h3>
      </div>
      <div className="dishes-main-div">{dishes}</div>
    </div>
  );
}

export default Dishes;
