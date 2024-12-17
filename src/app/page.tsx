import { AttestationSection } from "@/components/Attestation";
import { PageContainer } from "@/components/PageLayout";
import {
  Footer,
  Header,
  NavBar,
  Post,
  Search,
  Title,
} from "@/components/index";
import { posts } from "@/constants/mocks/postsMock";

export default function Home() {
  return (
    <main>
      <PageContainer>
        <Header />
        <div className="max-w-2xl mx-auto">
          <AttestationSection />
          <Title />
          <NavBar />
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
