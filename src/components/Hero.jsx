import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-34">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only"></span>DFCAMCLP Hacktoberfest 2023
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              It’s that time again – Hacktoberfest! This month-long celebration
              embraces the Open Source Software community, and we’re excited to
              invite the DFCAMCLP Satellite Campus Iskolars to celebrate the
              spirit of Open Source Software.
            </p>
            <p>
            At DFCAMCLP Hacktoberfest 2023, where students explore their career paths.
            With engaging workshops, talks, and games, this event boost career growth, encourage 
            social responsibility, and build connections among IT scholars.
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Get your tickets
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Speakers', '5 professionals'],
              ['People Attending', '150+ students'],
              ['Venue', 'Mayor Nene Aguilar Conference Hall - DRRMO Building'],
              ['Location', 'Brgy. Talon Dos Las Piñas City'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
