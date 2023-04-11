import { React } from 'next';

const Job: React.FC = (job) => {
  return (
    <div>
      <div>{job.title}</div>
      <div>{job.description}</div>
    </div>
  );
};

export default Job;

const Jobs: React.FC = (jobs) => {
  return (
    <ul>
      {jobs.map((job) => (
        <li>{job.title}</li>
      ))}
    </ul>
  );
};

export default Jobs;
