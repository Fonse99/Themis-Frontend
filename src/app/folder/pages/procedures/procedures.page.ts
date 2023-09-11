import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'p-procedures',
  templateUrl: './procedures.page.html',
  styleUrls: ['./procedures.page.scss'],
})
export class ProceduresPage implements OnInit {
  procedures: any[] = [];
  counter: number = 0;
  itemsPerPage: number = 4;
  currentPage: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.loadProcedures();
  }

  onPageChange(event: number) {
    this.currentPage = event;
  }

  loadProcedures() {
    this.procedures.push({}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {});

    this.counter = this.procedures.length;
  }
}
