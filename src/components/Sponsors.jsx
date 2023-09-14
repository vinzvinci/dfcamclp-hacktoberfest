import Image from 'next/image';
import { Container } from '@/components/Container';
import logoGitHub from '@/images/logos/GitHub-Logo.png';
import logoWebXGuild from '@/images/logos/WebX_Guild_Logo.png';

const sponsors = [
  { name: 'GitHub', logo: logoGitHub, url: 'https://github.com/' },
  //{ name: 'WebXGuild', logo: logoWebXGuild, url: 'https://github.com/WebXGuild' },
];

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          Sponsors
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="flex items-center justify-center">
              <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Image src={sponsor.logo} alt={sponsor.name} unoptimized />
                </div>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
