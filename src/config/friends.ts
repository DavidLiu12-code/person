// friends
export const friendsHeadLine = "The People Who Inspire David"
export const friendsIntro = "Get to know the amazing people and ideas that keep me motivated and inspired."


// friends
export type FriendItemType = {
  name: string
  description?: string
  link: { href: string, label?: string }
  logo?: string
}

export const friends: Array<FriendItemType> = [
  {
    name: 'Julian Shapiro ',
    link: { href: 'https://www.julian.com/' },
  },
   {
    name: 'Shreyas Doshi ',
    link: { href: 'https://www.shreyasdoshi.com/' },
  },
    {
    name: 'Steph Smith ',
    link: { href: 'https://stephsmith.io/' },
  },
  {
    name: 'Chip Huyen ',
    link: { href: 'https://huyenchip.com/' },
  },
  {
    name: 'Harry Dry ',
    link: { href: 'https://marketingexamples.com/' },
  },
   {
    name: 'Seth Godin',
    link: { href: 'https://seths.blog/' },
  },
   {
    name: 'Paul Graham',
    link: { href: 'http://www.paulgraham.com/' },
  },
   {
    name: `Tim O'Reilly`,
    link: { href: 'https://www.oreilly.com/radar/' },
  },
  {
    name: `Ben Thompson`,
    link: { href: 'https://stratechery.com/' },
  },
 {
    name: `Brian Dean`,
    link: { href: ':https://backlinko.com/' },
  },
]