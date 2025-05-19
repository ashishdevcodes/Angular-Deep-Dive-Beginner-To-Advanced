import { InjectionToken } from "@angular/core";

export interface AppConfig {
    apiUrl: string;
    courseCacheSize: number;
}

export const APP_CONFIG: AppConfig = {
    apiUrl: 'https://localhost:9000',
    courseCacheSize: 10
};
// This is the default configuration for the app. It can be overridden by environment variables.

export const CONFIG_TOKEN = new InjectionToken<AppConfig>('CONFIG_TOKEN', {
    providedIn: 'root',
    factory: () => APP_CONFIG
});