import { baseUrl } from './index';

export const getGitHubUser = async (user: string) => {
    const response = await fetch(`${baseUrl}/${user}`, { method: 'GET' });

    if (response.ok) {
        return await response.json();
    }
    const payload = await response.json();
    return new Error(payload.message);
};
