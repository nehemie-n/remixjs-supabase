import type { V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader(props: any) {
  return json({
    posts: [
      {
        id: "post1",
        content: "lorem",
      },
      {
        id: "post2",
        content: "ipsum",
      },
    ],
  });
}
export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <div>
      <h2 className="font-bold">Posts are to be here</h2>
      <ul>
        {posts.map((post) => {
          return <li key={post.id + post.content}>{post.content}</li>;
        })}
      </ul>
    </div>
  );
}
