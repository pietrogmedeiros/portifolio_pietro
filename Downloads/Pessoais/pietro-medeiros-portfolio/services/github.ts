import { GitHubUser, GitHubRepo } from '../types';

const BASE_URL = 'https://api.github.com';
const USERNAME = 'pietrogmedeiros';

export const fetchUserProfile = async (): Promise<GitHubUser> => {
  const response = await fetch(`${BASE_URL}/users/${USERNAME}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user profile');
  }
  return response.json();
};

export const fetchUserRepos = async (): Promise<GitHubRepo[]> => {
  // Added type=all to attempt to fetch member repos as well, and sort=updated as a fallback
  const response = await fetch(`${BASE_URL}/users/${USERNAME}/repos?type=all&sort=updated&per_page=100`);
  if (!response.ok) {
    throw new Error('Failed to fetch user repositories');
  }
  return response.json();
};