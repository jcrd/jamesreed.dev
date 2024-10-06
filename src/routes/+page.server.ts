import { BlogPreviewStore } from '$houdini';

/* @type { import('./$houdini').PageServerLoad } */
export async function load(event) {
	const blogPreview = new BlogPreviewStore();
	const { data: blogPreviewData } = await blogPreview.fetch({ event });
	return { blogPreview: blogPreviewData };
}
