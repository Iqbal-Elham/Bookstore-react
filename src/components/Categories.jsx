import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles/Categories.module.css';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const { categories } = useSelector((store) => store.categories);
  const dispatch = useDispatch();
  return (
    <div className={styles.category}>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check Status</button>
      <h1 className="center">{categories.length > 0 ? categories[0] : ''}</h1>

    </div>
  );
};

export default Categories;
