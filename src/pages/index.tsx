import Container from "@components/Shared/Container/Container";
import Main from "@components/Shared/Main/Main";
import SideBar from "@components/Shared/SideBar/SideBar";

export default function Home() {
  return (
    <main>
      <Container>
        <section className="mainSection">
          <SideBar />
          <Main />
        </section>
      </Container>
    </main>
  );
}
