import Image from "next/image";
import { PostSection } from "./PostSection";
import { Collaborator } from "./Collaborator";
import { PostFooter } from "./PostFooter";
import { ExternalLink } from "../common/ExternalLink";

export type Post = {
  name: string;
  timeElapsed: string;
  collaborators: string[];
  description: string;
  projectName: string;
  imageSrc: string;
};

type Props = {
  postContent: Post;
};

export const Post: React.FC<Props> = ({ postContent }) => {
  return (
    <div className="flex justify-between max-w-2xl	border-gray-600 border-2 p-6 mt-6 ">
      <div className="mr-4 shrink-0 [&>img]:rounded-full">
        <Image
          src={postContent.imageSrc}
          alt="test circle gray"
          width={44}
          height={44}
        />
      </div>
      <div>
        <PostSection>
          <h2>{postContent.name}</h2>
          <aside className="text-gray-500 pl-2">
            {postContent.timeElapsed}
          </aside>
        </PostSection>
        <PostSection className="flex flex-wrap">
          <div>Collaborator(s):</div>
          {postContent.collaborators.map((collaborator, index) => {
            return <Collaborator key={index} name={collaborator} />;
          })}
        </PostSection>
        <PostSection>{postContent.description}</PostSection>
        <PostFooter>
          <div className="flex text-gray-500 italic">
            {postContent.projectName}
          </div>
          <ExternalLink href={"/"}>View on EAS</ExternalLink>
        </PostFooter>
      </div>
    </div>
  );
};