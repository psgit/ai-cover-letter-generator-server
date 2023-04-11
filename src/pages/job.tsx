import { React } from 'next';

export default function Job({ job }) {
  return (
    <div>
      <div>{job.title}</div>
      <div>{job.description}</div>
    </div>
  );
}

const Jobs: React.FC = (jobs) => {
  return (
    <ul>
      {jobs.map((job) => (
        <li>{job.title}</li>
      ))}
    </ul>
  );
}

export default Jobs;

