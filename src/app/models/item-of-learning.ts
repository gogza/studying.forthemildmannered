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
          next: 'potentialdifference',
          size: 'S',
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
            { resourceId: 'leckiesuccess', pages: 'p56-59'},
            { resourceId: 'bearsdenelectricity', pages: 'p1'},
            { resourceId: 'smarshallsayelectricity', pages: 'p2-3'},
            { resourceId: 'mrmackenzieelectricity', pages: 'p10-14'},
            { resourceId: 'physicsscotlandelectriccharge', pages: 'bottom half'},
          ],
          questionSets: [
            { resourceId: 'leckiepractice', pages: 'p44-45'},
            { resourceId: 'mrmackenzieelectricity', pages: 'p13'},
            { resourceId: 'mrsphysics', pages: 'p61-63'},
          ],
        },
        'potentialdifference': {
          name: 'Potential Difference',
          next: 'ohmslaw',
          prev: 'electricalchargecarriers',
          size: 'S',
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
          notes: [
            { resourceId:'leckiesuccess', pages: 'p60-63'},
            { resourceId:'bearsdenelectricity', url: 'http://www.bearsdenacademy.e-dunbarton.sch.uk/media/7336/electricity-complete.pdf', pages: 'p1-2'},
            { resourceId:'smarshallsayelectricity', url: 'https://smarshallsay.weebly.com/uploads/3/1/4/6/3146892/national_5_electricity_summary_notes.pdf', pages: 'p4-6'},
            { resourceId:'mrmackenzieelectricity', url: 'https://mrmackenzie.co.uk/wp-content/uploads/2016/03/N5-EE-Pupil-Booklet-v1.1.pdf', pages: 'p15-17'},
            { resourceId:'physicsscotlandelectriccharge', url: 'https://www.physicsscotland.co.uk/classes/s4-physics/electric-charge', pages: 'top half'},
          ],
          questionSets: [
            { resourceId: 'leckiepractice', pages: 'p46'},
            { resourceId: 'mrsphysics', pages: 'p63-67'},
          ],

        },
        'ohmslaw': {
          name: 'Ohm\'s Law',
          prev: 'potentialdifference',
          next: 'practicalelectricalandelectroniccircuits',
          size: 'M',
          knowledgePoints: [
            'Calculation of the gradient of the line of best fit on a $V-I$ graph to determine resistance.',
            'Use of appropriate relationships to solve problems involving potential difference (voltage), current and resistance.   \n$V=IR\\newline V_2=\\bigg(\\dfrac{R_2}{R_1 + R_2}\\bigg)V_S\\newline \\dfrac{V_1}{V_2}=\\dfrac{R_1}{R_2}$',
            'Knowledge of the qualitative relationship between the temperature and resistance of a conductor.',
            'Description of an experiment to verify Ohm’s law.'
          ],
          questionSets: [
            { resourceId: 'leckiepractice', pages: 'p47-48'},
            { resourceId: 'mrmackenzieelectricity', pages: 'p22'},
            { resourceId: 'mrsphysics', pages: 'p67-75'},
          ],
        },
        'practicalelectricalandelectroniccircuits': {
          name: 'Practical Electrical and Electronic Circuits',
          prev: 'ohmslaw',
          next: 'electricalpower',
          size: 'L',
          knowledgePoints:[
            'Measurement of current, potential difference (voltage) and resistance, using appropriate meters in simple and complex circuits.',
            'Knowledge of the circuit symbol, function and application of standard electrical and electronic components: cell, battery, lamp, switch, resistor, voltmeter, ammeter, LED, motor, microphone, loudspeaker, photovoltaic cell, fuse, diode, capacitor, thermistor, LDR, relay, transistor.',
            'For transistors, knowledge of the symbols for an npn transistor and an n-channel enhancement mode MOSFET. Explanation of their function as a switch in transistor switching circuits.',
            'Application of the rules for current and potential difference (voltage) in series and parallel circuits.  \n $I_s = I_1 = I_2 = \\dots\\newline V_s = V_1 + V_2 + \\dots\\newline I_p = I_1 + I_2 + \\dots\\newline V_p = V_1 = V_2 = \\dots\\newline$',
            'Knowledge of the effect on the total resistance of a circuit of adding further resistance in series or in parallel.',
            'Use of appropriate relationships to solve problems involving the total resistance of resistors in series and in parallel circuits, and in circuits with a combination of series and parallel resistors.  \n $R_s = R_1 + R_2 + \\dots\\newline \\dfrac{1}{R_p}= \\dfrac{1}{R_1} + \\dfrac{1}{R_2} +\\dots$',
          ],
          questionSets: [
            { resourceId: 'leckiepractice', pages: 'p49-56'},
            { resourceId: 'mrmackenzieelectricity', pages: 'p30-31'},
            { resourceId: 'mrsphysics', pages: 'p75-93'},
          ],
        },
        'electricalpower': {
          name: 'Electrical Power',
          size: 'M',
          prev: 'practicalelectricalandelectroniccircuits',
          knowledgePoints:[
            'Definition of electrical power in terms of electrical energy and time.   \n $P=\\dfrac{E}{t}$',
            'Use of an appropriate relationship to solve problems involving energy, power and time.',
            'Knowledge of the effect of potential difference (voltage) and resistance on the current in and power developed across components in a circuit.',
            'Use of appropriate relationships to solve problems involving power, potential difference (voltage), current and resistance in electrical circuits.   \n $P=IR\\newline P=I^2R\\newline P=\\dfrac{V^2}{R}$',
            'Selection of an appropriate fuse rating given the power rating of an electrical appliance. A 3A fuse should be selected for most appliances rated up to 720W, a 13A fuse for appliances rated over 720W.',
          ],
          questionSets: [
            { resourceId: 'leckiepractice', pages: 'p57-60'},
            { resourceId: 'mrmackenzieelectricity', pages: 'p34, 35 & 37'},
            { resourceId: 'mrsphysics', pages: 'p93-101'},
          ],
        },
      }
    },
  }


export class ItemOfLearning {
  public name: string
  public readonly prev?: string
  public readonly next?: string
  public readonly size: string
  public readonly url:string
  public readonly knowledgePoints: string[]
  public readonly youtubeIds: string[]
  public readonly notes: any[]
  public readonly questionSets: any[]
  public readonly quantities: any[]

  constructor(public id:string, public topicId: string, public courseId:string) {
    const iol = IOLS[courseId][topicId][id]
    this.name = iol.name
    this.size = iol.size
    this.url = `course/${courseId}/topic/${topicId}/iol/${id}`
    this.knowledgePoints = iol.knowledgePoints
    this.youtubeIds = iol.youtubeIds
    this.notes = iol.notes
    this.questionSets = iol.questionSets
    this.quantities = iol.quantities
    if (iol.prev) {
      this.prev = iol.prev
    }
    if (iol.next) {
      this.next = iol.next
    }
  }
}
