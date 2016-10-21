import React from 'react'

const ToolBar = ({onCategoryChange, onPriceSortChange}) => (
  <div className="App-toolbar">
    <label htmlFor="category">Categorie :</label>
    <select id="category" name="category" onChange={onCategoryChange}>
      <option value="">Toutes</option>
      <option value="divers">divers</option>
      <option value="immobilier">immobilier</option>
      <option value="loisirs">loisirs</option>
      <option value="maison">maison</option>
      <option value="materiel_professionnel">materiel_professionnel</option>
      <option value="multimedia">multimedia</option>
      <option value="services">services</option>
      <option value="vacances">vacances</option>
      <option value="vehicules">vehicules</option>
    </select>
    <label htmlFor="category">Tri par prix :</label>
    <select id="sort" name="sort" onChange={onPriceSortChange}>
      <option value=""></option>
      <option value="asc">ascendant</option>
      <option value="desc">descendant</option>
    </select>
  </div>
)

export default ToolBar
