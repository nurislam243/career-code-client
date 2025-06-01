import React from 'react';
import { CiLocationOn } from 'react-icons/ci';

const JobsCard = ({job}) => {
    const { title, location, category, description, company, company_logo} = job;
    return (
        <div className="card shadow-sm">
            <div className="flex">
                <figure>
                    <img
                src={company_logo}
                alt="Shoes" />
                </figure>
                <div className="">
                    <h2 className='text-4xl'>{company}</h2>
                    <p className='flex items-center gap-1 '><CiLocationOn size={18}/>{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;