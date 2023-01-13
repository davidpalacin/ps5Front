import React from 'react'
import "./DetailsComponent.scss"


export default function DetailsComponent({char}) {
  return (
    <div className="DetailsComponent">
      <div className="details-component-image">
        <img src={char.image} alt="char image" />
      </div>

      <div className="details-component-info">
        <div className="details-component-info-block">
          <p className="text-secondary m-0">Specie</p>
          <p className="m-0">{char.species}</p>
        </div>

        <div className="details-component-info-block">
          <p className="text-secondary m-0">Prop</p>
          <p className="m-0">Value</p>
        </div>

        <div className="details-component-info-block">
          <p className="text-secondary m-0">Prop</p>
          <p className="m-0">Value</p>
        </div>
      </div>
    </div>
  );
}
