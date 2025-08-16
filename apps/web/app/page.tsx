import { Button } from "@repo/ui/components/atoms/Button/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Dark Mode Demo
        </h1>
        
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Button Components from @repo/ui
            </h2>
            <div className="flex gap-4 flex-wrap">
              <Button>Primary Button</Button>
              <Button className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700">
                Success Button
              </Button>
              <Button className="bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700">
                Danger Button
              </Button>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              This page demonstrates dark mode functionality. The buttons above will change colors 
              when you toggle between light and dark modes using the button in the top-right corner.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
