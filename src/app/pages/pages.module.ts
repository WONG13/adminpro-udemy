import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";

import { FormsModule } from "@angular/forms";

import { ChartsModule } from "ng2-charts";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graph1Component } from "./graph1/graph1.component";
import { PAGES_ROUTES } from "./pages.routes";

import { IncrementadorComponent } from "../components/incrementador/incrementador.component";
import { DoughnutChartComponent } from '../components/doughnut-chart/doughnut-chart.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graph1Component,
    IncrementadorComponent,
    DoughnutChartComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graph1Component,
    IncrementadorComponent
  ],
  imports: [PAGES_ROUTES, SharedModule, FormsModule, ChartsModule]
})
export class PagesModule {}
