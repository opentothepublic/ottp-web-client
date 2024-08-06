import Image from "next/image";
import { PostSection } from "./PostSection";
import { Collaborator } from "./Collaborator";
import { ProjectAndProposalSection } from "./ProjectAndProposalSection";
import Link from "next/link";
import { ProjectTag } from "./ProjectTag";
import { ProposalTag } from "./ProposalTag";

export enum ProjectProposal {
  PROJECT = "project",
  PROPOSAL = "proposal",
}
type ProjectOrProposal = {
  name: string;
  type: ProjectProposal;
};

export type Post = {
  name: string;
  timeElapsed: string;
  collaborators: string[];
  description: string;
  projectsAndProposals?: ProjectOrProposal[];
};

type Props = {
  postContent: Post;
};

export const Post: React.FC<Props> = ({ postContent }) => {
  return (
    <div className="flex justify-between max-w-2xl	border-black border-2 p-6 mt-6 mx-auto">
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
        <ProjectAndProposalSection>
          <div className="flex">
            {postContent.projectsAndProposals?.map((tag, index) => {
              if (tag.type === ProjectProposal.PROJECT) {
                return <ProjectTag key={index} name={tag.name} />;
              }
              if (tag.type === ProjectProposal.PROPOSAL) {
                return <ProposalTag key={index} name={tag.name} />;
              }
            })}
          </div>
          <Link href={"/"} className="text-blue-800 underline">
            View
          </Link>
        </ProjectAndProposalSection>
      </div>
    </div>
  );
};
