import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { WorkspaceComponent } from './workspace.component';
import { workspaceRoutes } from './workspace.routes';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(workspaceRoutes)],
  declarations: [WorkspaceComponent],
})
export class WorkspaceModule {}
