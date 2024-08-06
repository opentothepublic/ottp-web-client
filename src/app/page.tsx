import { PageContainer } from "@/app/components/PageLayout";
import { Footer, Header, Post, Search, Title } from "@/components/index";
import { posts } from "@/constants/mocks/postsMock";

export default function Home() {
  return (
    <main>
      <PageContainer>
        <Header />
        <div className="max-w-2xl mx-auto">
          <Title />
          <Search />
          {posts.map((post, index) => {
            return <Post key={index} postContent={post} />;
          })}
        </div>
      </PageContainer>
      <Footer />
    </main>
  );
}
