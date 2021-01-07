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
            "Definition of electrical current as the electric charge transferred per unit time.",
            'Use of an appropriate relationship to solve problems involving charge, current and time. $Q=It$',
            'Knowledge of the difference between alternating and direct current.',
            'Identification of a source (as `a.c.` or `d.c.`) based on oscilloscope trace or image from data logging software.',
          ],
          quantities: [
            {
              name: 'Charge',
              symbol: 'Q',
              unit: 'Coloumb',
              unitSymbol: 'C',
            },
            {
              name: 'Current',
              symbol: 'I',
              unit: 'Ampere',
              unitSymbol: 'A',
            },
            {
              name: 'time',
              symbol: 't',
              unit: 'Second',
              unitSymbol: 's',
            },
          ],
          youtubeIds: [
            'kYwNj9uauJ4',
          ],
          notes: [
            { source: 'Leckie - Success Guide (book)', pages: 'p56-59'},
            { source: 'Bearsden Academy - Electricity Notes', url: 'http://www.bearsdenacademy.e-dunbarton.sch.uk/media/7336/electricity-complete.pdf', pages: 'p1'},
            { source: 'smarshallsay - Electricity Notes', url: 'https://smarshallsay.weebly.com/uploads/3/1/4/6/3146892/national_5_electricity_summary_notes.pdf', pages: 'p2-3'},
            { source: 'mrmackenzie.co.uk - Electricity Notes', url: 'https://mrmackenzie.co.uk/wp-content/uploads/2016/03/N5-EE-Pupil-Booklet-v1.1.pdf', pages: 'p10-14'},
            { source: 'PhysicsScotland', url: 'https://www.physicsscotland.co.uk/classes/s4-physics/electric-charge', pages: 'all'},
          ],
          questionSets: [
            { source: 'Leckie - Practice Workbook (book)', pages: 'p44-45'},
            { source: 'mrmackenzie.co.uk - Electricity Notes', url: 'https://mrmackenzie.co.uk/wp-content/uploads/2016/03/N5-EE-Pupil-Booklet-v1.1.pdf', pages: 'p13'},
            { source: 'Mrs Physics - Learning Outcome Questions', url: 'https://mrsphysics.co.uk/n5/wp-content/uploads/2019/12/LOQ-N5-2019-final-12-2019.pdf', pages: 'p61-64'},
          ],
        },
        'potentialdifference': {
          name: 'Potential Difference',
          knowledgePoints: [
            'Knowledge that a charged particle experiences a force in an electric field.',
            'Knowledge of the path a charged particle follows: between two oppositely charged parallel plates; near a single point charge; between two oppositely charged points; between two like charged points.',
            'Knowledge that the potential difference (voltage) of the supply is a measure of the energy given to the charge carriers in a circuit.',
          ],
          quantities: [
            {
              name: 'Voltage',
              symbol: 'V',
              unit: 'Volt',
              unitSymbol: 'V',
            },
          ],
          youtubeIds: [
          ],
        },
        'ohmslaw': {
          name: 'Ohm\'s Law',
          knowledgePoints: [
            'Calculation of the gradient of the line of best fit on a $V-I$ graph to determine resistance.',
            'Use of appropriate relationships to solve problems involving potential difference (voltage), current and resistance.   \n$V=IR\\newline V_2=\\bigg(\\dfrac{R_2}{R_1 + R_2}\\bigg)V_S\\newline \\dfrac{V_1}{V_2}=\\dfrac{R_1}{R_2}$',
            'Knowledge of the qualitative relationship between the temperature and resistance of a conductor.',
            'Description of an experiment to verify Ohm’s law.'
          ],
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
  public readonly notes: any[]
  public readonly questionSets: any[]
  public readonly quantities: any[]

  constructor(public id:string, public topicId: string, public courseId:string) {
    const iol = IOLS[courseId][topicId][id]
    this.name = iol.name
    this.url = `course/${courseId}/topic/${topicId}/iol/${id}`
    this.knowledgePoints = iol.knowledgePoints
    this.youtubeIds = iol.youtubeIds
    this.notes = iol.notes
    this.questionSets = iol.questionSets
    this.quantities = iol.quantities
  }
}
