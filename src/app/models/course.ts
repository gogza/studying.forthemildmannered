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
      pastPapers: {
        '2019': {
          'questionPaperUrl': 'https://www.sqa.org.uk/pastpapers/papers/papers/2019/N5_Physics_all_2019.pdf',
          'markingInstructionsUrl': 'https://www.sqa.org.uk/pastpapers/papers/instructions/2019/mi_N5_Physics_mi_2019.pdf',
          'hintsUrl': 'https://hints.nhost.uk/hints/SQA%20Physics%20N5%202019.html'
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
  constructor(public id:string) {
    const course = COURSES[id]
    this.name = course.name
    this.url = `course/${id}`
    this.topics = course.topicIds.map(topicId => new Topic(topicId, id));
    this.questionPapers = course.questionPapers

  }
}
