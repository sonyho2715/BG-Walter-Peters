'use client';

import { Tutorial, CompletedItems } from '@/types';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import InvitationCode from './InvitationCode';

interface AllStepsViewProps {
  tutorials: Tutorial[];
  completedItems: CompletedItems;
  completedSteps: number[];
  handleItemComplete: (stepIdx: number, sectionIdx: number, itemIdx: number) => void;
  handleStepComplete: (stepIdx: number) => void;
  t: any;
}

export default function AllStepsView({
  tutorials,
  completedItems,
  completedSteps,
  handleItemComplete,
  handleStepComplete,
  t
}: AllStepsViewProps) {
  const { language } = useLanguage();
  return (
    <div className="space-y-8">
      {tutorials.map((tutorial, stepIdx) => {
        const isCompleted = completedSteps.includes(stepIdx);

        return (
          <div
            key={stepIdx}
            id={`step-${stepIdx}`}
            className="scroll-mt-24"
          >
            {/* Step Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 dark:from-indigo-700 dark:to-indigo-800 rounded-t-lg px-4 sm:px-6 py-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                  <span className="text-3xl sm:text-4xl flex-shrink-0">{tutorial.icon}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                      <h2 className="text-lg sm:text-2xl font-bold text-white">{tutorial.title}</h2>
                      {isCompleted && <CheckCircle className="text-green-300 flex-shrink-0" size={20} />}
                    </div>
                    <p className="text-indigo-100 text-xs sm:text-sm mt-1 line-clamp-2 sm:line-clamp-none">{tutorial.description}</p>
                    <p className="text-indigo-200 text-xs mt-1">⏱️ {tutorial.duration}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleStepComplete(stepIdx)}
                  className={`w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-lg font-semibold transition flex-shrink-0 text-sm sm:text-base ${
                    isCompleted
                      ? 'bg-green-500 text-white'
                      : 'bg-white text-indigo-700 hover:bg-indigo-50'
                  }`}
                >
                  {isCompleted ? `✓ ${t.common.completed}` : t.common.markComplete}
                </button>
              </div>
            </div>

            {/* Step Content */}
            <div className="bg-white dark:bg-gray-800 rounded-b-lg shadow-md border border-gray-200 dark:border-gray-700 border-t-0 p-6">
              {/* Show Invitation Code for Step 1 */}
              {stepIdx === 0 && (
                <InvitationCode language={language} />
              )}

              {/* Sections */}
              <div className="space-y-4">
                {tutorial.sections.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-3 flex items-center gap-2">
                      <span className="bg-indigo-600 dark:bg-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {sectionIdx + 1}
                      </span>
                      {section.heading}
                    </h3>
                    <div className="space-y-2">
                      {section.content.map((item, itemIdx) => {
                        const key = `${stepIdx}-${sectionIdx}-${itemIdx}`;
                        const isChecked = completedItems[key];
                        return (
                          <div
                            key={itemIdx}
                            className={`checkbox-item flex items-start gap-3 p-3 rounded-lg transition border ${
                              isChecked
                                ? 'completed bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                                : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-600'
                            }`}
                          >
                            <button
                              onClick={() => handleItemComplete(stepIdx, sectionIdx, itemIdx)}
                              className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 transition ${
                                isChecked
                                  ? 'bg-green-500 border-green-500'
                                  : 'border-gray-300 dark:border-gray-500 hover:border-indigo-500 dark:hover:border-indigo-400'
                              }`}
                            >
                              {isChecked && <CheckCircle size={20} className="text-white" />}
                            </button>
                            <p
                              className={`text-base leading-relaxed flex-1 ${
                                isChecked
                                  ? 'text-gray-600 dark:text-gray-400 line-through'
                                  : 'text-gray-700 dark:text-gray-200'
                              }`}
                            >
                              {item}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
