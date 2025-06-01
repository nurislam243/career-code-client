import React, { use } from 'react';
import JobsCard from '../Shared/JobsCard';

const HotJobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise);
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl text-center mb-7 lg:mb-9'>Hot Jobs of the Day</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-7'>
                {
                    jobs.map(job => <JobsCard key={job._id} job={job}></JobsCard>)
                }
           </div>
        </div>
    );
};

export default HotJobs;