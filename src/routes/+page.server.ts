import { GITHUB_API_URL } from '$env/static/private';

export async function load(event) {
	const fetch = event.fetch;

	const res = await fetch(GITHUB_API_URL);
	const data = await res.json();

	return {
		avatarUrl: data.avatar_url
	};
}
