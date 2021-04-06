import { ItemOfLearning } from './item-of-learning'

const TOPICS = {
  'n5maths': {
    'numerical': {
      name: 'Numerical Skills',
      iolIds: [
      ]
    },
    'algebraic': {
      name: 'Algebraic Skills',
      iolIds: [
      ]
    },
    'geometric': {
      name: 'Geometric Skills',
      iolIds: [
      ]
    },
    'trigonometric': {
      name: 'Trigonometric Skills',
      iolIds: [
      ]
    },
    'statistic': {
      name: 'Statistical Skills',
      iolIds: [
      ]
    },
    'reasoning': {
      name: 'Reasoning Skills',
      iolIds: [
      ]
    }
  },
  'n5physics': {
    'dynamics': {
      name: 'Dynamics',
      notes: [
        {
          source: 'Bearsden Academy',
          url: 'http://www.bearsdenacademy.e-dunbarton.sch.uk/media/7337/n5-dynamics-complete.pdf',
        }
      ],
      iolIds: [
        'vectorsandscalars',
        'velocitytimegraphs',
        'acceleration',
        'newtonslaws',
        'energy',
        'projectilemotion',
      ]
    },
    'space': {
      name: 'Space',
      notes: [
        {
          source: 'Bearsden Academy',
          url: 'http://www.bearsdenacademy.e-dunbarton.sch.uk/media/7341/space-complete.pdf',
        }
      ],
      iolIds: [
      ]
    },
    'electricity': {
      name: 'Electricity',
      notes: [
        {
          resourceId: 'bearsdenelectricity',
          pages: 'all',
        },
        {
          resourceId: 'smarshallsayelectricity',
          pages: 'all',
        },
        {
          resourceId: 'mrmackenzieelectricity',
          pages: 'all',
        }
      ],
      iolIds: [
        'electricalchargecarriers',
        'potentialdifference',
        'ohmslaw',
        'practicalelectricalandelectroniccircuits',
        'electricalpower',
      ],

    },
    'propertiesofmatter':{
      name: 'Properties of Matter',
      notes: [
        {
          source: 'Bearsden Academy',
          url: 'http://www.bearsdenacademy.e-dunbarton.sch.uk/media/7339/properties-of-matter-complete.pdf',
        }
      ],
      iolIds: [
      ]

    },
    'waves':{
      name: 'Waves',
      notes: [
        {
          source: 'Bearsden Academy',
          url: 'http://www.bearsdenacademy.e-dunbarton.sch.uk/media/7338/n5-waves-summary.pdf',
        }
      ],
      iolIds: [
      ]

    },
    'radiation':{
      name: 'Radiation',
      notes: [
        {
          source: 'Bearsden Academy',
          url: 'http://www.bearsdenacademy.e-dunbarton.sch.uk/media/7340/radiation-summary.pdf',
        }
      ],
      iolIds: [
      ]

    },
  }
}

export class Topic {
  public name: string
  public readonly url:string
  public readonly iols: ItemOfLearning[]
  public readonly notes: string[]
  constructor(public id:string, public courseId:string) {
    const topic = TOPICS[courseId][id]
    this.name = topic.name
    this.url = `course/${courseId}/topic/${id}`
    this.iols = topic.iolIds.map(iolId => new ItemOfLearning(iolId, id, courseId))
    this.notes = topic.notes
  }
}
