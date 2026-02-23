import { useTheme } from '@/context/ThemeContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Card';
import { Moon, Sun } from 'lucide-react';

export const Settings = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="font-medium">Theme Mode</p>
              <p className="text-sm text-muted-foreground">
                Select your preferred interface theme.
              </p>
            </div>
            <div className="flex items-center space-x-2 bg-muted p-1 rounded-lg">
              <button
                onClick={() => setTheme('light')}
                className={`p-2 rounded-md transition-all ${
                  theme === 'light'
                    ? 'bg-background shadow-sm text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                aria-label="Light Mode"
              >
                <Sun className="h-5 w-5" />
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`p-2 rounded-md transition-all ${
                  theme === 'dark'
                    ? 'bg-background shadow-sm text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                aria-label="Dark Mode"
              >
                <Moon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Application Info</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Version</span>
              <span className="font-medium">1.0.0</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Framework</span>
              <span className="font-medium">React 18 + Vite</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">UI Library</span>
              <span className="font-medium">Tailwind CSS</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
