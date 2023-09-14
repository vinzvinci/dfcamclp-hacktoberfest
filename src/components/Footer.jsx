import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';

export function Footer() {
  return (
    <footer className="flex-none py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <div className="flex items-center">
          <Logo className="h-12 w-auto text-slate-900" />
          <p className="text-slate-500 ml-2">
            Copyright &copy; {new Date().getFullYear()} PSITE. All rights reserved.
          </p>
        </div>
        <div className="mt-6 text-base text-slate-500 md:mt-0">
          <a href="https://docs.google.com/document/d/1dOmJlk-_LKeUxoocJw9WhMbP_ZDylKcg85_Qn3xtBbo/edit?usp=sharing" className="text-blue-500">Code of Conduct</a>
        </div>
      </Container>
    </footer>
  );
}
