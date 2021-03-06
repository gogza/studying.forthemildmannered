export const RESOURCES = {
  'bearsdenelectricity': {
    source: 'Bearsden Academy - Electricity Notes',
    url: 'http://www.bearsdenacademy.e-dunbarton.sch.uk/media/7336/electricity-complete.pdf',
  },
  'leckiesuccess': {
    source: 'Leckie - Success Guide (book)',
  },
  'smarshallsayelectricity': {
    source: 'smarshallsay - Electricity Notes',
    url: 'https://smarshallsay.weebly.com/uploads/3/1/4/6/3146892/national_5_electricity_summary_notes.pdf'
  },
  'mrmackenzieelectricity': {
    source: 'mrmackenzie.co.uk - Electricity Notes',
    url: 'https://mrmackenzie.co.uk/wp-content/uploads/2016/03/N5-EE-Pupil-Booklet-v1.1.pdf'
  },
  'physicsscotlandelectriccharge': {
    source: 'PhysicsScotland - Electric Charge',
    url: 'https://www.physicsscotland.co.uk/classes/s4-physics/electric-charge'
  },
  'physicsscotlandohmslaw': {
    source: 'PhysicsScotland - Ohm\'s Law',
    url: 'https://www.physicsscotland.co.uk/classes/s4-physics/ohm-s-law'
  },
  'physicsscotlandseriescircuits': {
    source: 'PhysicsScotland - Series Circuits',
    url: 'https://www.physicsscotland.co.uk/classes/s4-physics/series-circuit-applications'
  },
  'physicsscotlandparallelcircuits': {
    source: 'PhysicsScotland - Parallel Circuits',
    url: 'https://www.physicsscotland.co.uk/classes/s4-physics/parallel-circuit-applications'
  },
  'physicsscotlandelectricalpower': {
    source: 'PhysicsScotland - Enery & Power',
    url: 'https://www.physicsscotland.co.uk/classes/s4-physics/energy-and-power'
  },
  'leckiepractice': {
    source: 'Leckie - Practice Workbook (book)'
  },
  'mrsphysics': {
    source: 'Mrs Physics - Learning Outcome Questions',
    url: 'https://mrsphysics.co.uk/n5/wp-content/uploads/2019/12/LOQ-N5-2019-final-12-2019.pdf'
  },
  'phetcircuitconstructionkit': {
    source: 'PHet Circuit Construction Kit',
    url: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc-virtual-lab/latest/circuit-construction-kit-dc-virtual-lab_en.html'
  },
  'phetchargesandfields': {
    source: 'PHet Charge & Fields',
    url: 'https://phet.colorado.edu/sims/html/charges-and-fields/latest/charges-and-fields_en.html'
  },
  'phetohmslaw': {
    source: 'PHet Ohm\'s Law',
    url: 'https://phet.colorado.edu/sims/html/ohms-law/latest/ohms-law_en.html'
  },
};

export interface Resource {
  source: string;
  url?: string;
}
