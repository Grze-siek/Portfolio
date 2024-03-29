import { Project } from '@/typings';

export const fetchProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`,
    {
      next: { revalidate: 60 },
    }
  );

  const data = await res.json();
  const projects: Project[] = data.projects;
  return projects;
};
