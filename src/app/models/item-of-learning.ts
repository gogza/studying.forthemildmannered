const IOLS = {
  'n5physics': {
    'dynamics': {
        'vectorsandscalars': {
          name: 'Vectors & Scalars'
        },
        'velocitytimegraphs': {
          name: 'Velocity-Time Graphs'
        },
        'acceleration': {
          name: 'Acceleration'
        },
        'newtonslaws': {
          name: 'Newton\'s Laws'
        },
        'energy': {
          name: 'Energy'
        },
        'projectilemotion': {
          name: 'Projectile Motion'
        },
      },
      'electricity': {
        'electricalchargecarriers': {
          name: 'Electrical Charge Carriers',
          knowledgePoints: [
            'Definition of electrical current as the electric charge transferred per unit time.',
            'Use of an appropriate relationship to solve problems involving charge, current and time. Q=It',
            'Knowledge of the difference between alternating and direct current.',
            'Identification of a source (as a.c. or d.c.) based on oscilloscope trace or image from data logging software.',
          ],
          youtubeIds: [
            'kYwNj9uauJ4',
          ]
        },
        'potentialdifference': {
          name: 'Potential Difference'
        },
        'ohmslaw': {
          name: 'Ohm\'s Law'
        },
        'practicalelectricalandelectroniccircuits': {
          name: 'Practical Electrical and Electronic Circuits'
        },
        'electricalpower': {
          name: 'Electrical Power'
        },
      }
    },
  }


export class ItemOfLearning {
  public name: string
  public readonly url:string
  public readonly knowledgePoints: string[]
  public readonly youtubeIds: string[]

  constructor(public id:string, public topicId: string, public courseId:string) {
    const iol = IOLS[courseId][topicId][id]
    this.name = iol.name
    this.url = `course/${courseId}/topic/${topicId}/iol/${id}`
    this.knowledgePoints = iol.knowledgePoints
    this.youtubeIds = iol.youtubeIds
  }
}
