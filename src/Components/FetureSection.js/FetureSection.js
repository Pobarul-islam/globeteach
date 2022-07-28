import React from 'react';

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
      <button class="btn btn-primary">More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FetureSection;