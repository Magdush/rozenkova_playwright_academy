import { expect, Locator, Page } from "@playwright/test";
<<<<<<<< HEAD:src/pages/pmtool/projects/project_tasks_page.ts
import { LoginPage } from "../login_page.ts";
========
import { LoginPage } from "./login_page.ts";
import { ProjectsPage } from "./projects_page.ts";
>>>>>>>> 3710f76ac2d788815518c8c4fce892007830d7b0:src/pages/pmtool/dashboeard_page.ts

export class ProjectTasksPage {
  readonly page: Page;
  readonly profileButton: Locator;
  readonly logoutButton: Locator;
  readonly bellButton: Locator;
  readonly projectsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileButton = page.locator("#user_dropdown");
    this.logoutButton = page.locator("#logout");
    this.bellButton = page.locator("#user_notifications_report");
    this.projectsButton = page.locator("#Projects");
  }

  async clickProfile() {
    await expect(this.bellButton).toBeVisible();
    await this.profileButton.click();
    return this;
  }

  async clickLogout() {
    await this.logoutButton.click();
    return new LoginPage(this.page);
  }

  async clickProjects() {
    await this.projectsButton.click();
    return new ProjectsPage(this.page);
  }
}
