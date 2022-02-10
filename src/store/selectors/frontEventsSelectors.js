const frontEventsSelectors = {
   getData: ({ frontEvents }) => frontEvents.data,
   getEvents: ({ frontEvents }) => frontEvents.events,
   getEvent: ({ frontEvents }) => frontEvents.event,
}

export default frontEventsSelectors
