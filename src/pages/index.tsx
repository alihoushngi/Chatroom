import Container from "@components/Shared/Container/Container";
import Header from "@components/Shared/Header/Header";
import Main from "@components/Shared/Main/Main";
import SideBar from "@components/Shared/SideBar/SideBar";

export default function Home() {
  return (
    <main>
      <Container>
        <Header />
        <section className="mainSection">
          <SideBar />
          <Main />
        </section>
      </Container>
    </main>
  );
}
