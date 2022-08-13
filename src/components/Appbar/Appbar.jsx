import Navigation from 'components/Navigation';
import { Outlet } from 'react-router-dom';
import Container from 'components/Container';

export default function Appbar() {
  return (
    <>
      <Container>
        <header>
          <Navigation />
        </header>
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
}
