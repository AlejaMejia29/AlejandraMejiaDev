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
import { I18N, CertItem, Lang } from './inicio-i18n';

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
  activeSkillIndex = 0;
  activeCertificate: CertItem | null = null;
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

  readonly experienceIcons = ['assignment', 'language', 'terminal'];
  readonly skillIcons = ['dns', 'grid_view', 'build'];
  readonly cvUrl = 'assets/alejandra-mejia-cv.pdf';
  readonly cvDownloadName = 'Alejandra-Mejia-Patino-CV.pdf';
  readonly githubUrl = 'https://github.com/AlejaMejia29';
  readonly linkedinUrl = 'https://www.linkedin.com/in/alejandra-mejia29/';

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

    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  toggleLanguage(): void {
    this.isEnglish = !this.isEnglish;
    this.activeSkillIndex = 0;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', this.isEnglish ? 'en' : 'es');
    }
  }

  prevSkill(): void {
    const total = this.copy.skills.groups.length;
    this.activeSkillIndex = (this.activeSkillIndex - 1 + total) % total;
  }

  nextSkill(): void {
    const total = this.copy.skills.groups.length;
    this.activeSkillIndex = (this.activeSkillIndex + 1) % total;
  }

  goToSkill(index: number): void {
    this.activeSkillIndex = index;
  }

  openCertificate(cert: CertItem): void {
    this.activeCertificate = cert;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeCertificate(): void {
    this.activeCertificate = null;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.activeCertificate) {
      this.closeCertificate();
    }
  }

  onSkillTouchStart(event: TouchEvent): void {
    this.skillTouchStartX = event.changedTouches[0].screenX;
  }

  onSkillTouchEnd(event: TouchEvent): void {
    const diff = event.changedTouches[0].screenX - this.skillTouchStartX;
    if (Math.abs(diff) < 50) {
      return;
    }

    if (diff > 0) {
      this.prevSkill();
    } else {
      this.nextSkill();
    }
  }

  private skillTouchStartX = 0;

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
    document.body.classList.toggle('light-theme', !this.isDarkMode);
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
