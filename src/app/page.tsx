import { PageContainer } from "@/app/components/PageLayout";
import { Header, Post, Title } from "@/components/index";
import { post1 } from "@/constants/mocks/postsMock";

export default function Home() {
  return (
    <main>
      <PageContainer>
        <Header>OTTP://</Header>
        <Title />
        <Post postContent={post1} />
      </PageContainer>
    </main>
  );
}
