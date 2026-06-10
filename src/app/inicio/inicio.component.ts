import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID
} from '@angular/core';
import { I18N, Lang } from './inicio-i18n';

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly host = inject(ElementRef<HTMLElement>);
  isEnglish = true;
  isDarkMode = true;
  activeSection: 'home' | 'about' | 'experience' | 'skills' | 'work' | 'contact' = 'home';
  private revealOnScroll?: () => void;
  private readonly sectionIds = ['home', 'about', 'experience', 'skills', 'work', 'contact'] as const;

  @HostBinding('class.light-theme')
  get lightTheme(): boolean {
    return !this.isDarkMode;
  }

  @HostBinding('attr.lang')
  get documentLang(): Lang {
    return this.isEnglish ? 'en' : 'es';
  }

  get copy() {
    return I18N[this.isEnglish ? 'en' : 'es'];
  }

  readonly experienceIcons = ['work', 'laptop_mac', 'terminal'];
  readonly cvUrl = 'assets/alejandra-mejia-cv.pdf';
  readonly cvDownloadName = 'Alejandra-Mejia-Patino-CV.pdf';

  get themeIcon(): string {
    return this.isDarkMode ? 'light_mode' : 'dark_mode';
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.initTheme();
    this.initLanguage();
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.setupRevealOnScroll();
    this.setupSmoothScroll();
  }

  ngOnDestroy(): void {
    if (this.revealOnScroll) {
      window.removeEventListener('scroll', this.revealOnScroll);
      window.removeEventListener('load', this.revealOnScroll);
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  toggleLanguage(): void {
    this.isEnglish = !this.isEnglish;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', this.isEnglish ? 'en' : 'es');
    }
  }

  isNavActive(section: string): boolean {
    return this.activeSection === section;
  }

  navLinkClass(section: string): string {
    const base = 'transition-colors pb-1';
    if (this.isNavActive(section)) {
      return `${base} text-primary font-bold border-b-2 border-primary`;
    }
    return `${base} text-on-surface-variant font-medium hover:text-primary`;
  }

  @HostListener('document:mousemove', ['$event'])
  onAmbientMouseMove(event: MouseEvent): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const nx = event.clientX / window.innerWidth - 0.5;
    const ny = event.clientY / window.innerHeight - 0.5;
    const host = this.host.nativeElement;

    host.style.setProperty('--mouse-nx', String(nx * 1.8));
    host.style.setProperty('--mouse-ny', String(ny * 1.8));
    host.style.setProperty('--mouse-x', `${event.clientX}px`);
    host.style.setProperty('--mouse-y', `${event.clientY}px`);

    host.querySelectorAll('.ambient-orb, .ambient-ring, .ambient-dot, .ambient-line, .ambient-sparkle, .ambient-petal').forEach((node: Element) => {
      const el = node as HTMLElement;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const radius = Math.max(rect.width, rect.height, 48) * 0.85;
      const isNear = Math.hypot(event.clientX - cx, event.clientY - cy) < radius;

      el.classList.toggle('ambient-active', isNear);
    });
  }

  @HostListener('document:mouseleave')
  onAmbientMouseLeave(): void {
    const host = this.host.nativeElement;
    host.style.setProperty('--mouse-nx', '0');
    host.style.setProperty('--mouse-ny', '0');
    host.querySelectorAll('.ambient-active').forEach((el: Element) => el.classList.remove('ambient-active'));
  }

  private initTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme !== 'light';
    this.applyTheme();
  }

  private initLanguage(): void {
    const savedLang = localStorage.getItem('lang');
    if (savedLang === 'es') {
      this.isEnglish = false;
    } else if (savedLang === 'en') {
      this.isEnglish = true;
    }
  }

  private applyTheme(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const html = document.documentElement;
    html.classList.toggle('light-theme', !this.isDarkMode);
    html.classList.toggle('dark', this.isDarkMode);
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  private setupRevealOnScroll(): void {
    this.revealOnScroll = () => {
      document.querySelectorAll('app-inicio .reveal').forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < window.innerHeight * 0.85) {
          el.classList.add('active');
        }
      });

      this.updateActiveSectionFromScroll();
    };

    window.addEventListener('scroll', this.revealOnScroll, { passive: true });
    window.addEventListener('load', this.revealOnScroll);
    this.revealOnScroll();
  }

  private updateActiveSectionFromScroll(): void {
    const offset = 120;
    let current: (typeof this.sectionIds)[number] = 'home';

    for (const id of this.sectionIds) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= offset) {
        current = id;
      }
    }

    this.activeSection = current;
  }

  private setupSmoothScroll(): void {
    document.querySelectorAll('app-inicio a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (event) => {
        const href = (anchor as HTMLAnchorElement).getAttribute('href');
        if (!href || href === '#') {
          return;
        }

        const sectionId = href.slice(1);
        const target = document.getElementById(sectionId);
        if (!target) {
          return;
        }

        event.preventDefault();

        if (this.sectionIds.includes(sectionId as (typeof this.sectionIds)[number])) {
          this.activeSection = sectionId as (typeof this.sectionIds)[number];
        }

        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }
}
