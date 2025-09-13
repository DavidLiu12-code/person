// changelog
export const changelogHeadLine = "What's Fresh?"
export const changelogIntro = "Take a look at the latest and greatest changes."


// changelog
export type ChangelogItemType = {
  date: string
  content: [{
    title: string
    description: string
  }]
}

export const changelogList: Array<ChangelogItemType> = [
  {
    date: '2025-01-01',
    content: [
      {
        title: '💡 Project Initialization',
        description: `Started custom development based on CoreyChiu's template`
      },
    ]
  },
  {
    date: '2025-01-15',
    content: [
      {
        title: '🏠 Homepage Customization',
        description: 'Modified the original template design and updated the project showcase section'
      },
    ]
  },
  {
    date: '2025-01-20',
    content: [
      {
        title: '☁️  Blog Feature Implementation',
        description: 'Adapted and implemented the blog functionality according to my needs'
      },
    ]
  },
    {
    date: '2025-02-01',
    content: [
      {
        title: '🛫  Website Deployment',
        description: 'Successfully deployed my customized personal website'
      },
    ]
  },
    {
    date: '2025-02-10',
    content: [
      {
        title: '👭 Friends Page Added',
        description: 'Created a new friends list page using the template\'s components'
      },
    ]
  },
   {
    date: '2025-02-20',
    content: [
      {
        title: '📦 Resources Page Added',
        description: `Built a resources page based on the template's structure
Special thanks to CoreyChiu for the excellent open-source template.`
      },
    ]
  },
 
]