import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProjectService} from "../../../services/ProjectService";
import {Router} from "@angular/router";
import {any} from "codelyzer/util/function";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-conclution',
  templateUrl: './conclution.component.html',
  styleUrls: ['./conclution.component.css']
})
export class ConclutionComponent implements OnInit {

  @Output() goBack = new EventEmitter();

  idClient: string;
  select: string;
  url: string;

  constructor(private projectService: ProjectService,
              ) {
  }

  ngOnInit(): void {
    this.projectService.idClient$.subscribe(idClient => {
      this.url = "http://localhost:8080/projects/pdf/generate/"+idClient
    });
  }


  finish(): any {
    this.projectService.idClient$.subscribe(idClient => {
      this.projectService.saveConclution(this.select, idClient).subscribe(ok => {
      });

    });
  }

/*  pdf() {
    let http : HttpResponse<any>;
    this.projectService.idClient$.subscribe(idClient => {
      this.projectService.pdf(http,idClient).subscribe(pdf=>{
        console.log(pdf.type);
      });
      // this.router.navigate(['/stepper']);
    });
  }*/
  previous() {
    this.goBack.emit(true);
  }
}