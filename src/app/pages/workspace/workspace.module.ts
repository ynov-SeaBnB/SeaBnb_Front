import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../../shared/shared.module";
import { WorkspaceComponent } from "./workspace.component";
import { workspaceRoutes } from "./workspace.routes";
import { HomeModule } from "../home/home.module";

@NgModule({
  imports: [SharedModule, RouterModule.forChild(workspaceRoutes), HomeModule],
  declarations: [WorkspaceComponent],
})
export class WorkspaceModule {}
