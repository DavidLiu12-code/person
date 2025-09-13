export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'
export * from './resources'


// personal info
export const name = 'David Liu'
export const headline = 'AI Product Manager & Operations Craftsman & Web3 Explorer'
export const introduction = 'Bridging product strategy and operational execution to build and scale AI-driven ecosystems. Passionate about commercialization and the future of Web3.'
export const email = 'liu406203@gmail.com'
export const githubUsername = 'iamcorey'

// about page
export const aboutMeHeadline = "I'm David Liu, A Fun Guy with Serious Skills based in Shenyang, China."
export const aboutParagraphs = [
  "I integrate product vision with operational excellence to strategize and scale impactful AI ecosystems.  My focus lies at the intersection of AI commercialization and Web3.",
  "With a background in product management, operations, and content strategy, I drive side initiatives that explore innovative applications of technology—particularly in education and digital communities. ",
  " As a passionate advocate of remote work, I specialize in building and collaborating with distributed teams across global time zones.",
  "I am a firm believer that compelling content builds bridges, a principle I put into practice by cultivating engaged audiences across multiple digital platforms and remote communities."
]


// blog
export const blogHeadLine = "Where I've been and what I've learned"
export const blogIntro = "I've written something about AI, marketing,product and life."


// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string,
  external?: boolean
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'X',
    icon: 'x',
    href: 'https://x.com/NF_David0710?s=09',
    external: true
  },
  {
    name: '小红书1',
    icon: 'bsky',
    href: 'https://www.xiaohongshu.com/user/profile/654342af0000000002011e16?xsec_token=YBg01gPjX9l_GYEOeaIdWC02TGjRXnHy6eVykIqYdyhAg%3D&xsec_source=app_share&xhsshare=CopyLink&shareRedId=ODs2Mzc3RU82NzUyOTgwNjY1OTg1Sjc_&apptime=1757692208&share_id=6d89cd99ba044a2d87bddd4244d75615&share_channel=copy_link',
    external: true
  },
    {
    name: '小红书2',
    icon: 'bsky',
    href: 'https://www.xiaohongshu.com/user/profile/60291786000000000101d2dc?xsec_token=YB60ShpUSZhRFwd-Nc96vAFhZ5nBsKmhQOy_xO5IaHXsQ%3D&xsec_source=app_share&xhsshare=CopyLink&shareRedId=ODY0OTQ8PD82NzUyOTgwNjY0OThIN0pM&apptime=1757692246&share_id=6e77a219f39e41af97cc14e21a739420&share_channel=copy_link',
    external: true
  },
  {
    name: 'bilibili',
    icon: 'bilibili',
    href: 'https://b23.tv/jqaClGy',
    external: true
  },
   {
    name: '知识星球',
    icon: 'planet',
    href: 'https://wx.zsxq.com/group/15554584152112',
    external: true
  },

  {
    name: 'Wechat',
    icon: 'wechat',
    href: 'https://mp.weixin.qq.com/s/83blkLHANRJInqUo9RU6Ag',
    external: true
  },
  {
    name: 'more',
    icon: 'more',
    href: '/about',
    external: true
  },

]

// https://simpleicons.org/
export const techIcons = [
  "notion",
  "jira",
  "zapier",
"openai",
"googlegemini",
"claude",
"slack",
"notebooklm",
"bilibili",
"zhihu",
"xiaohongshu",
"google",
"meta",
"discord",
"telegram",
"x",
"shopify",
"tiktok",
"figma",
  "wechat"
];




export const aboutLinks: Array<SocialLinkType> = [
  {
    name: 'lanmallai',
    icon: 'teacher',
    href: 'https://lanmallai.com/',
    external: true
  },



  {
    name: 'languissimo',
    icon: 'x1',
    href: 'https://languissimo.ca/',
    external: true
  },
   {
    name: 'Flexsin',
    icon: 'desktop',
    href: 'https://www.flexsin.com/',
    external: true
  },
    {
    name: '欢心Lily英语',
    icon: 'baby',
    href: 'http://www.joylilyenglish.com/',
    external: true
  },

  {
    name: '	程校聊教培',
    icon: 'x1x',
    href: 'https://www.douyin.com/user/MS4wLjABAAAAua1qvGSO56q0enjoOc91qiT8X8eQmD_vz3by91SeHQRF5vX9qdhcq4Ymz8TmnFRQ',
    external: true
  },
  {
    name: '王向华',
    icon: 'x1',
    href: 'https://www.douyin.com/user/MS4wLjABAAAAvPCM1wNLe2ZvDcBN8CEtal53A0dmut7XL7EBubo8JGI',
    external: true
  },
    {
    name: '小红书1',
    icon: 'bsky',
    href: 'https://www.xiaohongshu.com/user/profile/654342af0000000002011e16?xsec_token=YBg01gPjX9l_GYEOeaIdWC02TGjRXnHy6eVykIqYdyhAg%3D&xsec_source=app_share&xhsshare=CopyLink&shareRedId=ODs2Mzc3RU82NzUyOTgwNjY1OTg1Sjc_&apptime=1757692208&share_id=6d89cd99ba044a2d87bddd4244d75615&share_channel=copy_link',
    external: true
  },
      {
    name: '小红书2',
    icon: 'bsky',
    href: 'https://www.xiaohongshu.com/user/profile/60291786000000000101d2dc?xsec_token=YB60ShpUSZhRFwd-Nc96vAFhZ5nBsKmhQOy_xO5IaHXsQ%3D&xsec_source=app_share&xhsshare=CopyLink&shareRedId=ODY0OTQ8PD82NzUyOTgwNjY0OThIN0pM&apptime=1757692246&share_id=6e77a219f39e41af97cc14e21a739420&share_channel=copy_link',
    external: true
  },
    {
    name: 'b站',
    icon: 'x1',
    href: 'https://b23.tv/jqaClGy',
    external: true
  },

    {
    name: 'planet',
    icon: 'planet',
    href: 'https://wx.zsxq.com/group/15554584152112',
    external: true
  },
  {
    name: 'Wechat',
    icon: 'wechat',
    href: 'https://mp.weixin.qq.com/s/83blkLHANRJInqUo9RU6Ag',
    external: true
  },
]