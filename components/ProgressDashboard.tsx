'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Tutorial } from '@/types';

interface ProgressDashboardProps {
  completedSteps: number[];
  totalSteps: number;
  tutorials: Tutorial[];
}

export default function ProgressDashboard({ completedSteps, totalSteps, tutorials }: ProgressDashboardProps) {
  const { language } = useLanguage();

  const completionPercentage = totalSteps > 0 ? Math.round((completedSteps.length / totalSteps) * 100) : 0;
  const nextStep = tutorials.findIndex((_, idx) => !completedSteps.includes(idx));
  const nextStepNumber = nextStep !== -1 ? nextStep + 1 : null;

  const content = {
    en: {
      title: 'Your Progress',
      completed: 'Completed',
      remaining: 'Remaining',
      nextStep: 'Next Step',
      allComplete: 'All Steps Complete!',
      congratulations: 'Congratulations! You\'ve completed all onboarding steps.',
      stepsCompleted: 'steps completed',
      keepGoing: 'Keep going! You\'re doing great.',
      goToStep: 'Go to This Step',
      milestones: {
        0: 'Just getting started!',
        25: 'Great start! Keep it up!',
        50: 'Halfway there!',
        75: 'Almost finished!',
        100: 'Perfect! All done!'
      }
    },
    vi: {
      title: 'Tiến Độ Của Bạn',
      completed: 'Đã Hoàn Thành',
      remaining: 'Còn Lại',
      nextStep: 'Bước Tiếp Theo',
      allComplete: 'Đã Hoàn Thành Tất Cả!',
      congratulations: 'Chúc mừng! Bạn đã hoàn thành tất cả các bước hướng dẫn.',
      stepsCompleted: 'bước đã hoàn thành',
      keepGoing: 'Tiếp tục! Bạn đang làm rất tốt.',
      goToStep: 'Đi Đến Bước Này',
      milestones: {
        0: 'Vừa mới bắt đầu!',
        25: 'Khởi đầu tuyệt vời! Tiếp tục nào!',
        50: 'Đã được nửa đường rồi!',
        75: 'Sắp xong rồi!',
        100: 'Hoàn hảo! Đã xong!'
      }
    }
  };

  const t = content[language];

  const scrollToNextStep = () => {
    if (nextStep !== -1) {
      const stepElement = document.getElementById(`step-${nextStep}`);
      if (stepElement) {
        const offset = 100;
        const elementPosition = stepElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }
  };

  const getMilestoneMessage = () => {
    if (completionPercentage >= 100) return t.milestones[100];
    if (completionPercentage >= 75) return t.milestones[75];
    if (completionPercentage >= 50) return t.milestones[50];
    if (completionPercentage >= 25) return t.milestones[25];
    return t.milestones[0];
  };

  const getProgressColor = () => {
    if (completionPercentage >= 75) return 'text-green-600 dark:text-green-400';
    if (completionPercentage >= 50) return 'text-blue-600 dark:text-blue-400';
    if (completionPercentage >= 25) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-gray-600 dark:text-gray-400';
  };

  const getProgressBgColor = () => {
    if (completionPercentage >= 75) return 'bg-green-600';
    if (completionPercentage >= 50) return 'bg-blue-600';
    if (completionPercentage >= 25) return 'bg-yellow-600';
    return 'bg-gray-600';
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 md:p-8 shadow-lg border-2 border-indigo-200 dark:border-indigo-800">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">📊</span>
        <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100">{t.title}</h3>
      </div>

      {/* Circular Progress */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
        <div className="relative">
          <svg className="transform -rotate-90 w-32 h-32 md:w-40 md:h-40">
            <circle
              cx="50%"
              cy="50%"
              r="60"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              className="text-gray-300 dark:text-gray-700"
            />
            <circle
              cx="50%"
              cy="50%"
              r="60"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              strokeDasharray={`${2 * Math.PI * 60}`}
              strokeDashoffset={`${2 * Math.PI * 60 * (1 - completionPercentage / 100)}`}
              className={`transition-all duration-1000 ease-out ${getProgressBgColor()}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-4xl md:text-5xl font-bold ${getProgressColor()}`}>
              {completionPercentage}%
            </span>
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {getMilestoneMessage()}
          </h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {completedSteps.length} / {totalSteps} {t.stepsCompleted}
          </p>

          {/* Progress Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-green-200 dark:border-green-700">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {completedSteps.length}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{t.completed}</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-orange-200 dark:border-orange-700">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {totalSteps - completedSteps.length}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{t.remaining}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Step or Completion Message */}
      {completionPercentage === 100 ? (
        <div className="bg-green-100 dark:bg-green-900/30 border-2 border-green-300 dark:border-green-700 rounded-lg p-4">
          <div className="flex gap-3">
            <span className="text-3xl">🎉</span>
            <div>
              <h5 className="font-bold text-green-900 dark:text-green-100 mb-1">
                {t.allComplete}
              </h5>
              <p className="text-sm text-green-800 dark:text-green-200">
                {t.congratulations}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-300 dark:border-blue-700 rounded-lg p-4">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <span className="text-2xl">👉</span>
            <div className="flex-1">
              <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-1">
                {t.nextStep}: {nextStepNumber !== null && `#${nextStepNumber}`}
              </h5>
              {nextStepNumber !== null && (
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  {tutorials[nextStep]?.icon} {tutorials[nextStep]?.title}
                </p>
              )}
              <p className="text-xs text-blue-700 dark:text-blue-300 mt-2">
                {t.keepGoing}
              </p>
            </div>
            {nextStepNumber !== null && (
              <button
                onClick={scrollToNextStep}
                className="flex-shrink-0 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2"
              >
                {t.goToStep} <span className="text-xl">→</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Step-by-Step Progress */}
      <div className="mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-2">
          {tutorials.map((tutorial, idx) => {
            const isCompleted = completedSteps.includes(idx);
            return (
              <button
                key={idx}
                onClick={() => {
                  const stepElement = document.getElementById(`step-${idx}`);
                  if (stepElement) {
                    const offset = 100;
                    const elementPosition = stepElement.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                      top: elementPosition - offset,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`aspect-square rounded-lg flex flex-col items-center justify-center text-center p-2 transition-all duration-300 cursor-pointer hover:scale-110 ${
                  isCompleted
                    ? 'bg-green-500 dark:bg-green-600 text-white shadow-md scale-105 hover:bg-green-600 dark:hover:bg-green-700'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
                title={tutorial.title}
              >
                <span className="text-xl mb-1">
                  {isCompleted ? '✅' : tutorial.icon}
                </span>
                <span className="text-xs font-semibold">{idx + 1}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
