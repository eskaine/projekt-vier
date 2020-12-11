import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Categories({ openCategory }) {
  const categoryData = [
    {
      name: 'Starters',
      img_url:
        'https://res.cloudinary.com/d7bdciwna5/image/upload/v1607397311/vier/cuxqLB9H2685fJoAAa3C.jpg',
    },
    {
      name: 'Steak',
      img_url:
        'https://res.cloudinary.com/d7bdciwna5/image/upload/v1607397311/vier/J65f5UAB3TW5zpU5DlYU.jpg',
    },
    {
      name: 'Combo',
      img_url:
        'https://res.cloudinary.com/d7bdciwna5/image/upload/v1607397311/vier/Qgyke2b3STK09wHWWs7R.jpg',
    },
    {
      name: 'Seafood',
      img_url:
        'https://res.cloudinary.com/d7bdciwna5/image/upload/v1607397311/vier/J65f5UAB3TW5zpU5DlYU.jpg',
    },
    {
      name: 'Beverages',
      img_url:
        'https://res.cloudinary.com/d7bdciwna5/image/upload/v1607397311/vier/sUDmgQV7ve4SgXOuNajL.jpg',
    },
    {
      name: 'Pasta',
      img_url:
        'https://res.cloudinary.com/d7bdciwna5/image/upload/v1607397311/vier/uYLGylmtE8rQvPXlRSfu.jpg',
    },
  ];

  const categories = categoryData.map((category) => (
    <div className="category-card" key={category.name}>
      <img src={category.img_url} alt="" />
      <div className="category-info">
        <h2>{category.name}</h2>
        <p>7 items</p>
      </div>
      <div
        className="arrow-div"
        onMouseUp={() => openCategory(category.name)}
        onTouchEnd={() => openCategory(category.name)}
      >
        <FontAwesomeIcon icon={faChevronRight} className="fa-arrow" />
      </div>
    </div>
  ));

  return (
    <div className="home-page-div">
      <div className="category-main-div">{categories}</div>
    </div>
  );
}

export default Categories;
