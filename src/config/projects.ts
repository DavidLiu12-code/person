// projects
export const projectHeadLine = 'From passion to influence'
export const projectIntro =
  " I believe in the power of content to connect people. And this is how I'm putting that belief into practice"

export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  date?: string
  logo?: string
  category?: string[]
  tags?: string[]
  image?: string
  techStack?: string[]
  gitStars?: number
  gitForks?: number
}

// projects
export const projects: Array<ProjectItemType> = [
  {
    name: 'lanmallai',
    description: 'The Uber of digital education',
    link: { href: 'lanmallai.com/', label: 'lanmallai' },

    tags: ['AI ', 'Platform', 'Digital Education'],
    logo: '/images/icon/lmai.png',
  },

  {
    name: '中医考研-如意研学',
    description: '中医考研在线教育项目',
    link: { href: 'b23.tv/4ddfebF', label: 'GitHub Cards' },

    logo: '/images/icon/ry.jpg',
    tags: ['Online Education', 'TCM', 'bilibili'],
  },

  {
    name: 'LeElite乐鲸',
    description: '远程工作社区',
    link: {
      href: 'www.xiaohongshu.com/user/profile/654342af0000000002011e16?xsec_token=YBg01gPjX9l_GYEOeaIdWC01z9h9IkMSXPItqXGfOEboQ%3D&xsec_source=app_share&xhsshare=CopyLink&appuid=654342af0000000002011e16&apptime=1757577003&share_id=1561af24ee984fc7ab22a5c06cb50944&share_channel=copy_link',
      label: 'GitHub Cards',
    },

    logo: '/images/icon/lg.png',
    tags: ['Remote job', 'Rednote'],
  },

    {
    name: '乐鲸岛',
    description: '远程工作知识星球社群',
    link: {
      href: 'wx.zsxq.com/group/15554584152112',
      label: 'GitHub Cards',
    },

    logo: '/images/icon/zsxq.png',
    tags: ['Remote job', '知识星球','Consultation'],
  },
      {
    name: '	Daily Micro Learning',
    description: 'AI工作流实验账号',
    link: {
      href: 'wx.zsxq.com/group/15554584152112',
      label: 'GitHub Cards',
    },

    logo: '/images/icon/dl.jpg',
    tags: ['AI ', 'Rednote','Workflow'],
  },
]

  export const githubProjects: Array<ProjectItemType> = [
   {
    name: '	王向华',
    description: '欢心Lily英语创始人&抖音少儿英语教育头部IP',
    link: {
      href: 'www.douyin.com/user/MS4wLjABAAAAvPCM1wNLe2ZvDcBN8CEtal53A0dmut7XL7EBubo8JGI',
      label: 'GitHub Cards',
    },

    // logo: '/images/icon/dl.jpg',
   
  },
      {
    name: '	程校聊教培',
    description: '12年教培老炮&3亿短视频流量超盘手',
    link: {
      href: 'www.douyin.com/user/MS4wLjABAAAAua1qvGSO56q0enjoOc91qiT8X8eQmD_vz3by91SeHQRF5vX9qdhcq4Ymz8TmnFRQ',
      label: 'GitHub Cards',
    },

    // logo: '/images/icon/dl.jpg',
   
  },
      {
    name: '	languissimo',
    description: '高端北美语言教育品牌',
    link: {
      href: 'languissimo.ca/',
      label: 'GitHub Cards',
    },

   logo: '/images/icon/llll.png',
   
  },
    {
    name: 'Flexsin',
    description: '顶尖全球IT解决方案专家',
    link: {
      href: 'www.flexsin.com/',
      label: 'GitHub Cards',
    },

    logo: '/images/icon/flx.png',
   
  }, 
   {
    name: '	欢心Lily英语',
    description: '中国幼儿英语头部品牌',
    link: {
      href: 'www.joylilyenglish.com/',
      label: '欢心Lily英语',
    },

   logo: '/images/icon/hxll.png',
   
  },


  ]
  