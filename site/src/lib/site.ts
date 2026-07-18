export const APP_STORE_URL =
  "https://apps.apple.com/us/app/filmsera-group-film-camera/id6781880091";
export const APP_ID = "6781880091";
export const SITE_URL = "https://getfilmsera.cam";

/** Same LookSourceImages pool the iOS app grades for Look Lab previews. */
export const LOOKS = [
  {
    slug: "disposable",
    name: "Disposable",
    blurb: "Harsh flash, warm grain — the party classic.",
    cover: "/shots/looks/look03.jpg",
    strip: ["/shots/looks/look03.jpg", "/shots/looks/look07.jpg", "/shots/looks/look12.jpg"],
  },
  {
    slug: "vhs",
    name: "VHS",
    blurb: "Scan lines, timecode, tracking noise.",
    cover: "/shots/looks/look15.jpg",
    strip: ["/shots/looks/look15.jpg", "/shots/looks/look20.jpg", "/shots/looks/look28.jpg"],
  },
  {
    slug: "eightmm",
    name: "8mm",
    blurb: "Sprockets, gate weave, heavy warm grain.",
    cover: "/shots/looks/look08.jpg",
    strip: ["/shots/looks/look08.jpg", "/shots/looks/look22.jpg", "/shots/looks/look31.jpg"],
  },
  {
    slug: "instant",
    name: "Instant",
    blurb: "Wide white border. Watch it develop.",
    cover: "/shots/looks/look05.jpg",
    strip: ["/shots/looks/look05.jpg", "/shots/looks/look11.jpg", "/shots/looks/look19.jpg"],
  },
  {
    slug: "digicam",
    name: "Digicam",
    blurb: "Early-2000s crunch. Bright and honest.",
    cover: "/shots/looks/look14.jpg",
    strip: ["/shots/looks/look14.jpg", "/shots/looks/look24.jpg", "/shots/looks/look33.jpg"],
  },
  {
    slug: "glow",
    name: "Glow",
    blurb: "Dreamy halation bloom around highlights.",
    cover: "/shots/looks/look09.jpg",
    strip: ["/shots/looks/look09.jpg", "/shots/looks/look18.jpg", "/shots/looks/look27.jpg"],
  },
  {
    slug: "camcorder",
    name: "Camcorder",
    blurb: "Scan lines and green timecode.",
    cover: "/shots/looks/look16.jpg",
    strip: ["/shots/looks/look16.jpg", "/shots/looks/look25.jpg", "/shots/looks/look36.jpg"],
  },
  {
    slug: "sprocket",
    name: "Sprocket 35",
    blurb: "Classic 35mm with frame numbers.",
    cover: "/shots/looks/look02.jpg",
    strip: ["/shots/looks/look02.jpg", "/shots/looks/look10.jpg", "/shots/looks/look21.jpg"],
  },
] as const;

/** Bundled SamplePhotos + App Store lifestyle — what new users see in developed films. */
export const FILM_STRIP = [
  "/shots/samples/party.jpg",
  "/shots/samples/sample01.jpg",
  "/shots/samples/beach.jpg",
  "/shots/samples/sample03.jpg",
  "/shots/samples/hug.jpg",
  "/shots/samples/sample05.jpg",
  "/shots/samples/paris.jpg",
  "/shots/samples/sample07.jpg",
  "/shots/samples/dinner.jpg",
  "/shots/samples/sample09.jpg",
  "/shots/samples/sunset.jpg",
  "/shots/samples/sample11.jpg",
] as const;

export const HOW_STEPS = [
  {
    n: "1",
    title: "Create a Film",
    body: "Name it, pick a Look, set when it develops.",
    screen: "/shots/screens/01-start.png",
  },
  {
    n: "2",
    title: "Guests join",
    body: "Share a QR or link. Guests open Filmsera.",
    screen: "/shots/screens/06-group.png",
  },
  {
    n: "3",
    title: "Shoot Shots",
    body: "Every Frame drops into the roll — unseen.",
    screen: "/shots/screens/03-capture.png",
  },
  {
    n: "4",
    title: "Reveal",
    body: "The timer hits zero. The album opens together.",
    screen: "/shots/screens/05-reveal.png",
  },
] as const;
