import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {NgForOf} from "@angular/common";
@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [MatButtonToggleModule, NgForOf],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {
    currentLang: string = 'en';
    languages: string[] = ['en', 'es'];

    constructor(private translate: TranslateService) {
      this.currentLang = translate.currentLang;
    }

    useLanguage(language: string) : void {
      this.translate.use(language);
    }
    trackByLanguage(index: number, language: string): string {
    return language;
    }
}
