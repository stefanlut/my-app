import Link from "next/link";
import GamesList from "../components/GamesList";
import { Suspense } from "react";
import RefreshTimer from "../components/RefreshTimer";

export default function WeeklySchedule() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-8 px-4 sm:px-6 lg:px-8">
      <main className="container mx-auto max-w-6xl flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-2 mb-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
            NHL Weekly Schedule
          </h1>
          <div className="flex space-x-4">
            <Link 
              href="/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View Today&apos;s Games
            </Link>
            <Link 
              href="/teams"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View Teams
            </Link>
          </div>
          <Suspense fallback={null}>
            <RefreshTimer type="weekly" />
          </Suspense>
        </div>
        <GamesList type="weekly" />
      </main>
    </div>
  );
}