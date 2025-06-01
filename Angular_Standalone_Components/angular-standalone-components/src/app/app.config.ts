import { InjectionToken, ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

// ---------- your existing pieces ----------
export interface AppConfig {
  apiUrl: string;
  courseCacheSize: number;
}

export const APP_CONFIG: AppConfig = {
  apiUrl: 'https://localhost:9000',
  courseCacheSize: 10
};

export const CONFIG_TOKEN = new InjectionToken<AppConfig>('CONFIG_TOKEN', {
  providedIn: 'root',
  factory: () => APP_CONFIG
});

// ---------- NEW: object that Angular bootstrap expects ----------
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    { provide: CONFIG_TOKEN, useValue: APP_CONFIG }
    // add other global providers here if/when you need them
  ]
};
