export interface Job {
  id: string;
  title: string;
  description: string;
}

export function JobComponent({ job }: { job: Job }) {
  return (
    <div className="text-2xl text-white">
      <div>{job.title}</div>
      <div>{job.description}</div>
    </div>
  );
}

export function JobsComponent({ jobs }: { jobs: Job[] }) {
  return (
    <ul className="text-2xl text-white">
      {jobs.map((job) => (
        <li>{job.title}</li>
      ))}
    </ul>
  );
}
