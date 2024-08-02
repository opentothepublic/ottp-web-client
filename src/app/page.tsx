import { PageContainer } from "@/app/components/PageLayout";
import { Footer, Header, Post, Title } from "@/components/index";
import { posts } from "@/constants/mocks/postsMock";

export default function Home() {
  return (
    <main>
      <PageContainer>
        <Header />
        <Title />
        {posts.map((post, index) => {
          return <Post key={index} postContent={post} />;
        })}
      </PageContainer>
      <Footer />
    </main>
  );
}
