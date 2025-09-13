// projects
export const resourcesHeadLine = "My Curated Toolkit & Resources"
export const resourcesIntro = " A collection of tools, guides, and communities that have genuinely helped me learn, build, and grow—personally and professionally. Each comes with my personal endorsement."

export type ResourcesItemType = {
    name: string
    description: string
    link: { href: string, label: string }
    date?: string
    logo?: string,
    category?: string[],
    tags?: string[],
    image?: string,
    techStack?: string[],
    gitStars?: number,
    gitForks?: number
  }
  
  // projects 
  export const resources: Array<ResourcesItemType> = [
    {
      name: 'A Practical Guide to Building Agents',
      description:
        'OpenAI 提供的构建智能代理实用指南，涵盖基础概念与实战案例',
      link: { href: 'cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf', label: 'OpenAI 构建智能代理实用指南' },
   
  
      tags: ['Prompting', 'Agent','AI'],
   
    },

    {
      name: 'GitLab Handbook',
      description:
        'GitLab 公司公开的全员手册，包含企业文化、流程与远程工作实践',
      link: { href: 'handbook.gitlab.com/handbook/', label: 'GitLab Handbook' },
 
      tags: ['Handbook ', 'RgemoteWork','GitLab']
    },

       {
      name: 'PMCAFF 产品经理社区',
      description:
        '面向产品经理的垂直社区，提供行业洞察、问答与资源分享',
      link: { href: 'www.pmcaff.com/', label: 'PMCAFF' },
 
      tags: ['ProductManagement ', 'Community ','PM']
    },

           {
      name: 'Way to AGI',
      description:
        '一份关于个人成长与职业发展的深度文档集，涵盖思维模型与实战经验',
      link: { href: 'waytoagi.feishu.cn/wiki/T2fUwmHBSiHU6Ukq9Imcu7n7nMh', label: 'Way to AGI' },
 
      tags: ['AGI ', 'Research ','Feishu']
    },

              {
      name: 'GoFurther',
      description:
        '关于通用人工智能（AGI）的开放式知识库，持续更新相关研究与思考',
      link: { href: 'gofurther.feishu.cn/docx/Enofdl25BotoVrxth8ec4rNBn5c', label: 'GoFurther' },
 
      tags: ['PersonalGrowth  ', 'Career  ','Feishu']
    },
   


              {
      name: `Charles Liu's Blog`,
      description:
        '个人技术博客，分享机器学习、深度学习与算法相关内容',
      link: { href: 'charlesliuyx.github.io/', label: 'Charles Liu' },
 
      tags: ['Blog  ', 'MachineLearning  ','Algorithms']
    },

              {
      name: `Yihui's Flowus Page`,
      description:
        '谢益辉的个人知识库，专注于数据分析、R 语言与可视化',
      link: { href: 'yihui.flowus.cn/', label: 'Yihui' },
 
      tags: ['DataScience  ', 'RStats ','Flowus']
    },

              {
      name: 'Anna’s Archive 中文站',
      description:
        '开放的文献与电子书资源库，支持多语言检索与下载',
      link: { href: 'zh.annas-archive.org', label: 'Way to AGI' },
 
      tags: ['Ebooks ', 'Resources ','Archive']
    },

              {
      name: 'Awesome Remote Jobs',
      description:
        '精心整理的远程工作资源列表，包含职位平台、工具与社区',
      link: { href: 'github.com/letavocado/awesome-remote-jobs?utm_source=chatgpt.com', label: 'Way to AGI' },
 
      tags: ['RemoteWork ', 'Jobs ','GitHub']
    },

              {
      name: 'Indie Hackers',
      description:
        '独立开发者与创业者的社区，分享产品构建与盈利经验',
      link: { href: 'www.indiehackers.com/', label: 'Indie Hackers' },
 
      tags: ['IndieHackers ', 'Startup ','Community']
    },

              {
      name: 'SVPG Articles',
      description:
        'Silicon Valley Product Group 的文章集，专注于产品战略与领导力',
      link: { href: 'www.svpg.com/articles/', label: 'SVPG Articles' },
 
      tags: ['ProductStrategy  ', 'Leadership  ','SVPG']
    },

              {
      name: 'HubSpot Academy',
      description:
        '免费的营销、销售与客户服务课程，提供认证与实战训练',
      link: { href: 'academy.hubspot.com/', label: 'HubSpot Academy' },
 
      tags: ['AGMarketing I ', 'Sales ','HubSpot']
    },

    {
      name: 'Google Research Paper',
      description:
        'Google 发布的经典研究论文《The Anatomy of a Large-Scale Hypertextual Web Search Engine》',
      link: { href: 'static.googleusercontent.com/media/research.google.com/zh-CN//pubs/archive/36299.pdf', label: '' },
 
      tags: ['Research  ', 'Google  ','SearchEngine']
    },
      {
      name: 'Joinbrix Recruiter Platform',
      description:
        '面向招聘者的职位发布平台，专注于科技行业人才匹配',
      link: { href: 'zh.joinbrix.com/recruiter/jobboard', label: '' },
 
      tags: ['Recruitment  ', 'JobBoard  ','Tech']
    },
  ]
  