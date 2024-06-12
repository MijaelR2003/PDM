import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.felicks.courseapp",
  appName: "course-app",
  webDir: "public",
  server: {
    url: "http://localhost:3000",
    cleartext: true,
  },
};

export default config;
