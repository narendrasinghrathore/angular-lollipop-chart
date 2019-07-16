import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
declare const g3: any;
// import * as g3 from 'g3';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnInit {
  lollipop: any;

  mutationDataDefaultSettings = {
    x: 'AA_Position',         // mutation position
    y: 'Protein_Change',      // amino-acid changes
    factor: 'Mutation_Class', // classify mutations by certain factor (optional)
  };

  mutationData = [
    {
      'Hugo_Symbol': 'PIK3CA',
      'Variant_Classification': 'Silent',
      'HGVSp_Short': 'p.F70F',
      'Mutation_Class': 'Inframe',
      'AA_Position': 70
    }, {
      'Hugo_Symbol': 'PIK3CA',
      'Variant_Classification': 'Missense_Mutation',
      'HGVSp_Short': 'p.E81K',
      'Mutation_Class': 'Missense',
      'AA_Position': 81
    }, {
      'Hugo_Symbol': 'PIK3CA',
      'Variant_Classification': 'Missense_Mutation',
      'HGVSp_Short': 'p.E81K',
      'Mutation_Class': 'Missense',
      'AA_Position': 81
    }, {
      'Hugo_Symbol': 'PIK3CA',
      'Variant_Classification': 'Missense_Mutation',
      'HGVSp_Short': 'p.F83S',
      'Mutation_Class': 'Missense',
      'AA_Position': 83
    }, {
      'Hugo_Symbol': 'PIK3CA',
      'Variant_Classification': 'Missense_Mutation',
      'HGVSp_Short': 'p.R88Q',
      'Mutation_Class': 'Missense',
      'AA_Position': 88
    }
  ];

  pfam_data = {
    'hgnc_symbol': 'TP53',
    'protein_name': 'tumor protein p53',
    'uniprot_id': 'P04637',
    'length': 393,
    'pfam': [
      {
        'pfam_ac': 'PF08563',
        'pfam_start': 6,
        'pfam_end': 29,
        'pfam_id': 'P53_TAD'
      },
      {
        'pfam_ac': 'PF00870',
        'pfam_start': 95,
        'pfam_end': 288,
        'pfam_id': 'P53'
      },
      {
        'pfam_ac': 'PF07710',
        'pfam_start': 318,
        'pfam_end': 358,
        'pfam_id': 'P53_tetramer'
      }
    ]
  }


  pfam_data_default_settings = {
    domainType: 'pfam',       // key to the domain annotation entries
    length: 'length',         // protein length
    details: {
      start: 'pfam_start',  // protein domain start position
      end: 'pfam_end',      // protein domain end position
      name: 'pfam_id',      // protein domain name
    },
  };

  constructor() { }

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    this.lollipop = g3.Lollipop('chart');

    // add mutation data
    this.lollipop.data.snvData = this.mutationData;
    // mutation data format settings
    this.lollipop.format.snvData = this.mutationDataDefaultSettings;

    // Pfam domain data
    this.lollipop.data.domainData = this.pfam_data;
    // Pfam data format settings
    this.lollipop.format.domainData = this.pfam_data_default_settings;

    // set up more chart options ...

    // draw lollipop
    this.lollipop.draw();
  }

}
