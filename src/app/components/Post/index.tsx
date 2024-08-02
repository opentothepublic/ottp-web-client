import { PropsWithChildren } from "react";
import Image from "next/image";
import { PostSection } from "./PostSection";
import { Collaborator } from "./Collaborator";

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
      <div className="w-44">
        <Image
          src="/circle.png"
          alt="test circle gray"
          width={60}
          height={60}
        />
      </div>
      <div>
        <PostSection>
          <h2>{postContent.name}</h2>
          <aside className="text-gray-500 pl-2">
            {postContent.timeElapsed}
          </aside>
        </PostSection>
        <PostSection>
          <div>Collaborator(s):</div>
          {postContent.collaborators.map((collaborator, index) => {
            return <Collaborator key={index} name={collaborator} />;
          })}
        </PostSection>
        <div>{postContent.description}</div>
      </div>
    </div>
  );
};
