import React from 'react';

const CategoriesList = ({ categories, value, onChange }) => (
  <select value={value} onChange={e => onChange(e.target.value)}>
    {categories.map(category => (
      <option key={category.id} value={category.name}>
        {category.name}
      </option>
    ))}
  </select>
);

export default CategoriesList;
