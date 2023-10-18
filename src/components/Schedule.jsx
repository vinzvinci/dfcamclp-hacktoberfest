'use client'

import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'

const schedule = [
  {
    date: 'Morning Session',
    dateTime: '2023-10-21',
    summary:
      'Schedule for Morning section.',
    timeSlots: [
      {
        name: 'Opening Preliminaries and Remarks',
        description: 'Host Speaker',
        start: '8:00AM',
        end: '8:30AM',
      },
      {
        name: 'Keynote: The Mission and Impact of Hacktoberfest',
        description: 'Vincent Villafuerte',
        start: '9:00AM',
        end: '9:30AM',
      },
      {
        name: 'Getting Started with Hacktoberfest',
        description: 'Vincent Villafuerte',
        start: '9:30AM',
        end: '10:00AM',
      },
      {
        name: 'Navigating the Dev World: Git, GitHub, and the Student Developer Pack Unleashed',
        description: 'Nikka Herrera',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Icebreaker',
        description: null,
        start: '11:00AM',
        end: '11:10AM',
      },
      {
        name: 'Intro to Flutter and On Device ML',
        description: 'Joshua Bumanlag',
        start: '11:10AM',
        end: '12:10PM',
      },
    ],
  },
  {
    date: 'Afternoon Session',
    dateTime: '2022-10-29',
    summary:
      'Schedule for afternoon session and icebreaker',
    timeSlots: [
      {
        name: 'From Sketch to Screen: The Digital Design Playground of UI/UX',
        description: 'Ryem Jian Dumlao',
        start: '1:10PM',
        end: '2:10PM',
      },
      {
        name: 'Icebreaker',
        description: 'TBA',
        start: '2:10PM',
        end: '2:20PM',
      },
      {
        name: 'Unlocking Tech Industry Doors: What You Need to Get In',
        description: 'Ronald Laz',
        start: '2:20PM',
        end: '2:50PM',
      },
      {
        name: 'Hacking Start',
        description: 'Explore and Contribute',
        start: '2:50PM',
        end: '5:10PM',
      },
    ],
  },
  {
    date: 'Breaktime + Contributing',
    dateTime: '2022-10-29',
    summary:
      'Schedule for lunch break, snacks, and activities',
    timeSlots: [
      {
        name: 'Light breakfast',
        description: 'Coffee + Light Snacks',
        start: '8:00AM',
        end: '8:30AM',
      },
      {
        name: 'Lunch Time',
        description: null,
        start: '12:10PM',
        end: '1:10PM',
      },
      {
        name: 'Snacks Time and Contribute',
        description: null,
        start: '3:10PM',
        end: null,
      },
      {
        name: 'Networking and Photoshoot',
        description: null,
        start: '5:20PM',
        end: '6:00PM',
      },
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) => (
          <>
            {schedule.map((day, dayIndex) => (
              <div
                key={day.dateTime}
                className={clsx(
                  'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                  dayIndex !== selectedIndex && 'opacity-70',
                )}
              >
                <DaySummary
                  day={{
                    ...day,
                    date: (
                      <Tab className="ui-not-focus-visible:outline-none">
                        <span className="absolute inset-0" />
                        {day.date}
                      </Tab>
                    ),
                  }}
                />
              </div>
            ))}
          </>
        )}
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="ui-not-focus-visible:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-blue-900">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-blue-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
            PST
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Schedule
          </h2>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage position="right" className="-bottom-32 -top-40" />
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
