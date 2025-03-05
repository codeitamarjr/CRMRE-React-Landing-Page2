import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Layout from "@/components/Layout";

const getPosts = () => {
    const postsDirectory = path.join(process.cwd(), "src/posts");
    const filenames = fs.readdirSync(postsDirectory);

    return filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContents);

        return {
            slug: filename.replace(".mdx", ""),
            title: data.title,
            date: data.date,
            excerpt: data.excerpt,
            category: data.category,
            author: data.author,
            role: data.role,
        };
    });
};

export default function Blog() {

    const posts = getPosts();

    return (
        <Layout>
            <div className="container mx-auto p-6">
                <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">From the blog</h2>
                            <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-400">Follow our blog for the latest news and updates.</p>
                        </div>
                        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {posts.map((post) => (

                                <article key={post.slug} className="flex max-w-xl flex-col items-start justify-between">
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time dateTime={post.date} className="text-gray-500 dark:text-gray-400">
                                            {post.date}
                                        </time>
                                        <div
                                            className="relative z-10 rounded-full bg-gray-50 dark:bg-gray-800 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="group relative">
                                        <Link href={`/blog/${post.slug}`}>
                                            <h3 className="mt-3 text-lg/6 font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </h3>
                                            <div className="mt-5 line-clamp-3 text-sm/6 text-gray-600 dark:text-gray-400">
                                                <MDXRemote source={post.excerpt} />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="relative mt-8 flex items-center gap-x-4">
                                        <div className="text-sm/6">
                                            <p className="font-semibold text-gray-900 dark:text-gray-300">
                                                <span className="absolute inset-0" />
                                                {post.author}
                                            </p>
                                            <p className="text-gray-600 dark:text-gray-400">{post.role}</p>
                                        </div>
                                    </div>
                                </article>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}