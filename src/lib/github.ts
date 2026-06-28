export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  topics?: string[];
}

export async function fetchGitHubRepos(
  username: string,
  token?: string,
): Promise<GitHubRepo[]> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
    { headers },
  );

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
  }

  const repos = (await response.json()) as GitHubRepo[];
  return repos.filter(
    (repo) => repo.name.toLowerCase() !== `${username}.github.io`.toLowerCase(),
  );
}

export function formatDate(isoDate: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    month: "short",
    year: "numeric",
  }).format(new Date(isoDate));
}
