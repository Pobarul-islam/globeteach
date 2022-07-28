import React from 'react';
import './FetureSection.css'
const FetureSection = ({ feture }) => {
    const { img, name, description } = feture;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
                    <h2 class="card-title">{ name}</h2>
                    <p>{ description}</p>
    <div class="card-actions">
      <button class="btn button">More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FetureSection;