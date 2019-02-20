import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeroComponent,
    AboutComponent,
    PortfolioComponent,
    PortfolioCardComponent,
    SkillsComponent,
    SkillCardComponent,
    SectionHeaderComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
