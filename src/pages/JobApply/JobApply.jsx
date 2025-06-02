import React from 'react';
import { Link, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const {id: jobId} = useParams();
    const { user } = useAuth();

    const handleApplyFormSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;

        const application ={
            jobId,
            applicant: user.email,
            linkedIn,
            github,
            resume

        }

        axios.post('http://localhost:3000/applications', application)
        .then(res =>{
            if(res.data.insertedId){
                Swal.fire({
                    // position: "top-end",
                    icon: "success",
                    title: "Your application has been submitted",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
        .catch(error =>{
            alert(error)
        })
    }

    return (
        <div>
            <h3 className="text-4xl text-center">Apply for this job: <Link to={`/jobs/${jobId}`} className='text-blue-600' > Details</Link></h3>
            <form onSubmit={handleApplyFormSubmit} className='max-w-2xl mx-auto'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <label className="label">LinkedIn Link</label>
                    <input type="url" name='linkedIn' className="input w-full" placeholder="LinkedIn Profile Link" />

                    <label className="label">Github Link</label>
                    <input type="url" name='github' className="input w-full" placeholder="Github profile link" />

                    <label className="label">Resume Link</label>
                    <input type="url" name='resume' className="input w-full" placeholder="Resume Link" />
                    <input type="submit" className='btn btn-accent' value={"Apply"} />
                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;