import { PropsWithChildren } from "react";
import Image from "next/image";

export type Post = {
  name: string;
  timeElapsed: string;
  collaborators: string[];
  description: string;
};

type Props = {
  postContent: Post;
};

export const Post: React.FC<Props> = ({ postContent }) => {
  return (
    <div className="flex justify-between max-w-2xl	border-black border-2 p-6">
      <Image src="./circle.png" alt="test circle gray" className="w-20" />
      <div>
        <div className="flex">
          <h2>{postContent.name}</h2>
          <aside>{postContent.timeElapsed}</aside>
        </div>
        <div className="flex">
          <div>Collaborator(s):</div>
          {postContent.collaborators.map((collaborator, index) => {
            return <aside key={index}>{collaborator}</aside>;
          })}
        </div>
        <div>{postContent.description}</div>
      </div>
    </div>
  );
};
