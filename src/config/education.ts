
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'Shenyang Jianzhu University',
      major: 'Intelligent Construction (Construction Robotics) | Master',
      logo: 'college',
      start: '2023',
      end: 'Present'
    },
     {
      school: 'Shenyang Ligong University',
      major: 'Electronic Science and Technology | Bachelor',
      logo: 'college',
      start: '2018',
      end: '2022'
    },
  ]