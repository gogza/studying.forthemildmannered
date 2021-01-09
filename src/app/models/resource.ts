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
  'leckiepractice': {
    source: 'Leckie - Practice Workbook (book)'
  },
  'mrsphysics': {
    source: 'Mrs Physics - Learning Outcome Questions',
    url: 'https://mrsphysics.co.uk/n5/wp-content/uploads/2019/12/LOQ-N5-2019-final-12-2019.pdf'
  },
};

export interface Resource {
  source: string;
  url?: string;
}
