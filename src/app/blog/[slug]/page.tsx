import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Layout from "@/components/Layout";
import { format } from "date-fns";

const postsDirectory = path.join(process.cwd(), "src/posts");

export function generateStaticParams() {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ""), // Remove `.mdx` extension
  }));
}

const getPost = (slug: string) => {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    data: {
      title: data.title,
      date: data.date,
      category: data.category,
      author: data.author,
      role: data.role,
      excerpt: data.excerpt,
    },
    content,
  };
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params; // Await `params` before using it
  const post = getPost(resolvedParams.slug); // Fetch post data synchronously

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {post.data.title}
              </h2>
              <div className="flex items-center gap-x-4 text-xs">
                <p className="text-lg text-gray-500 text-nowrap">{format(new Date(post.data.date), "MMMM, yyyy")}</p>
                <div className="z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {post.data.category}
                </div>
                <p className="text-lg text-gray-500 text-nowrap">{post.data.author}</p>
                <p className="text-lg text-gray-500 text-nowrap">{post.data.role}</p>
              </div>
              <span className="mt-2 text-lg/8 text-gray-600"><MDXRemote source={post.data.excerpt} /></span>
            </div>
            <div className="mx-auto mt-10 dark:prose-invert">
              <MDXRemote source={post.content} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
