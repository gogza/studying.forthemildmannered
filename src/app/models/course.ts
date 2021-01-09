import { Topic } from './topic'

export const COURSES = {
    'n5physics': {
      name: 'National 5 Physics',
      topicIds: [
        'dynamics',
        'space',
        'electricity',
        'propertiesofmatter',
        'waves',
        'radiation',
      ],
      specification: 'https://www.sqa.org.uk/files_ccc/N5CourseSpecPhysics.pdf',
      pastPapers: {
        '2019': {
          'questionPaperUrl': 'https://www.sqa.org.uk/pastpapers/papers/papers/2019/N5_Physics_all_2019.pdf',
          'markingInstructionsUrl': 'https://www.sqa.org.uk/pastpapers/papers/instructions/2019/mi_N5_Physics_mi_2019.pdf',
          'hintsUrl': 'https://hints.nhost.uk/hints/SQA%20Physics%20N5%202019.html'
        },
        '2018': {
          'questionPaperUrl': 'https://www.sqa.org.uk/pastpapers/papers/papers/2018/N5_Physics_all_2018.pdf',
          'markingInstructionsUrl': 'https://www.sqa.org.uk/pastpapers/papers/instructions/2018/mi_N5_Physics_mi_2018.pdf',
          'hintsUrl': 'https://hints.nhost.uk/hints/SQA%20Physics%20N5%202018.html',
        },
        '2017': {
          'questionPaperUrl': 'https://www.sqa.org.uk/pastpapers/papers/papers/2017/N5_Physics_all_2017.pdf',
          'markingInstructionsUrl': 'https://www.sqa.org.uk/pastpapers/papers/instructions/2017/mi_N5_Physics_mi_2017.pdf',
        },
        '2016': {
          'questionPaperUrl': 'https://www.sqa.org.uk/pastpapers/papers/papers/2016/N5_Physics_all_2016.pdf',
          'markingInstructionsUrl': 'https://www.sqa.org.uk/pastpapers/papers/instructions/2016/mi_N5_Physics_mi_2016.pdf',
        }
      },
      questionPapers: [
        {
          name: 'Mrs Physics', url: 'https://mrsphysics.co.uk/n5/wp-content/uploads/2019/12/LOQ-N5-2019-final-12-2019.pdf'
        }
      ]
    }
}


export class Course {
  public readonly name: string
  public readonly url: string
  public readonly topics: Topic[]
  public readonly questionPapers: string[]
  public readonly pastPapers: any[]
  constructor(public id:string) {
    const course = COURSES[id]
    this.name = course.name
    this.url = `course/${id}`
    this.topics = course.topicIds.map(topicId => new Topic(topicId, id));
    this.pastPapers = course.pastPapers
    this.questionPapers = course.questionPapers

  }
}
