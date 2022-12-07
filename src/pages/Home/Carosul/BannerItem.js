import React from 'react';

const BannerItem = ({slider}) => {
    const{image,id,prev,next}=slider
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className=' coustom-blend'>
          <img src={image} alt="" className="w-full" />
        </div>
        <div className='absolute w-2/4 top-1/4 text-left left-14'>
          <h1 className='text-white text-6xl font-bold mb-5'>Affordable <br /> Price For Car <br /> Servicing</h1>
          <p className='text-slate-300'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          <button className="btn btn-warning mt-5 mr-4">Discover More</button>
          <button className="btn btn-outline btn-info mt-5">Latest Project</button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-3/4">
          <a href={`#slide${prev}`} className="btn btn-circle mr-2">❮</a>
          <a href={`#slide${next}`} className="btn btn-circle">❯</a>
        </div>
      </div>
    );
};

export default BannerItem;
