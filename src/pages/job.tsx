export type Job = {
  title: string;
  description: string;
};

export const JobComponent = (props: { job: Job }) => {
  <div>
    <div>{props.job.title}</div>
    <div>{props.job.description}</div>
  </div>;
};

export const JobsComponent = (props: { jobs: Job[] }) => {
  <ul>
    {props.jobs.map((job) => (
      <li>{job.title}</li>
    ))}
  </ul>;
};
