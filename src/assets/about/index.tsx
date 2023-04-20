import journey from "./journey.jpeg";

export const JourneyImage = (): any => (
  <img
    className="hover:scale-110  duration-500 transition-transform"
    src={journey}
    alt="Journey video game"
  />
);
