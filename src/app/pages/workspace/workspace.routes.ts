import { Routes } from "@angular/router";

import { WorkspaceComponent } from "./workspace.component";

export const workspaceRoutes: Routes = [
  {
    path: "",
    component: WorkspaceComponent,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("../home/home.module").then((m) => m.HomeModule),
      },
      { path: "**", redirectTo: "error" },
    ],
  },
];
