const UNS = (id) => `https://images.unsplash.com/photo-${id}?w=700&h=525&fit=crop&q=80&auto=format`

export const galleryItems = [
  {
    id: 1,
    client: 'Client Name Here',
    what: 'Vehicle Decals',
    desc: 'Full door graphics on a service van',
    image: UNS('1558618666-fcd25c85cd64'),   // van with applied vinyl graphics
  },
  {
    id: 2,
    client: 'Client Name Here',
    what: 'Vinyl Banner',
    desc: 'Grand opening banner for a storefront',
    image: UNS('1579546929518-9e396f3cc809'),  // large colorful banner
  },
  {
    id: 3,
    client: 'Client Name Here',
    what: 'Coroplast Signs',
    desc: 'Real estate listing signs, set of 10',
    image: UNS('1659648419581-2d65722c2605'),  // sign in front of house
  },
  {
    id: 4,
    client: 'Client Name Here',
    what: 'Stickers',
    desc: 'Die-cut logo stickers for product packaging',
    image: UNS('1572635196237-14b3f281503f'),  // assorted sticker/label close-up
  },
  {
    id: 5,
    client: 'Client Name Here',
    what: 'Aluminum Sign',
    desc: 'Outdoor business sign, double-sided',
    image: UNS('1528698827591-e19ccd7bc23d'),  // storefront business signage
  },
  {
    id: 6,
    client: 'Client Name Here',
    what: 'Event Banner',
    desc: 'Birthday party backdrop banner, 8×4 ft',
    image: UNS('1530103862676-de8c9debad1d'),  // event backdrop/banner setup
  },
]
