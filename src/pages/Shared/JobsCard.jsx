import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router';

const JobsCard = ({job}) => {
    console.log(job);
    const { title, location, category, description, company, company_logo, requirements, salaryRange, _id } = job;
    return (
        <div className="card shadow-sm">
            <div className="flex gap-2">
                <figure>
                    <img 
                    className='w-[76px]'
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
                <h4>Salary: {salaryRange.min}-{salaryRange.max} {salaryRange.currency}</h4>
                <p>{description}</p>
                <div className="card-actions">
                    {
                        requirements.map(skill => <div className="badge badge-outline">{skill}</div>)
                    }
                </div>
                <div className='card-actions justify-end'>
                    <Link to={`/jobs/${_id}`} className='btn btn-primary'>Details</Link>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;