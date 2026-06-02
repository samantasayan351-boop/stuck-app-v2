'use client';

import { useState } from 'react';

const frameworks: Record<string, any> = {
  inversion: {
    name: 'Inversion',
    trigger: ['afraid', 'scared', 'fail', 'wrong', 'mistake', 'what if', 'fear'],
    reframe: 'Instead of asking how to succeed, ask: what would guarantee failure? Avoid that.',
    steps: [
      'List 3 actions that would guarantee a bad outcome',
      'Write the opposite of each action',
      'Pick the smallest opposite action and do it today'
    ],
    risk: 'You might avoid action entirely due to fear of failure',
    microAction: 'Send one message or make one call you\'ve been avoiding (takes < 5 min)'
  },
  ten101010: {
    name: '10/10/10',
    trigger: ['guilt', 'pressure', 'now', 'today', 'urgent', 'everyone', 'short'],
    reframe: 'How will you feel about this in 10 minutes, 10 months, and 10 years?',
    steps: [
      'Write your gut choice (the emotional one)',
      'Imagine explaining this decision 10 months from now',
      'Choose based on the 10-month/10-year view, not the 10-minute panic'
    ],
    risk: 'Short-term discomfort may feel unbearable but fades quickly',
    microAction: 'Set a calendar reminder for 10 days from now to review how you feel'
  },
  assumption: {
    name: 'Assumption Test',
    trigger: ['can\'t', 'have to', 'no choice', 'must', 'impossible', 'never', 'only'],
    reframe: 'What are you treating as fixed that might actually be flexible?',
    steps: [
      'List 3 "facts" about your situation',
      'Put a star next to any that are actually choices or preferences',
      'Rewrite one starred item as a question: "How could I...?"'
    ],
    risk: 'You may be accepting false constraints that limit your options',
    microAction: 'Ask one person who faced a similar situation what options they considered'
  },
  secondOrder: {
    name: 'Second-Order Thinking',
    trigger: ['then', 'after', 'result', 'outcome', 'if i do', 'consequence', 'lead to'],
    reframe: 'And then what happens? Think 3 steps ahead.',
    steps: [
      'Write your desired first-order outcome',
      'Ask: "And then what happens?" — repeat 3 times',
      'If the 3rd consequence is bad, your first step needs changing'
    ],
    risk: 'Immediate wins may create bigger problems downstream',
    microAction: 'Write down the 3-step chain for your current plan; spot the weak link'
  }
};

function detectFramework(text: string) {
  const lower = text.toLowerCase();
  for (const [key, data] of Object.entries(frameworks)) {
    if (data.trigger.some((word: string) => lower.includes(word))) {
      return key;
    }
  }
  return 'inversion';
}

export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<any>(null);

  const handleUnblock = () => {
    if (!input.trim()) return;
    const frameworkKey = detectFramework(input);
    const framework = frameworks[frameworkKey];
    
    setResult({
      framework: framework.name,
      reframe: framework.reframe,
      steps: framework.steps,
      risk: framework.risk,
      microAction: framework.microAction
    });
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-slate-800 mb-2">Stuck</h1>
        <p className="text-slate-600 mb-8">Paste your situation. Get unblocked.</p>
        
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="I need to quit my job but I'm afraid I'll fail..."
          className="w-full h-40 p-4 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none text-slate-700 text-base"
        />
        
        <button
          onClick={handleUnblock}
          className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
        >
          Unblock Me
        </button>

        {result && (
          <div className="mt-8 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">Framework</span>
              <h2 className="text-xl font-bold text-slate-800 mt-1">{result.framework}</h2>
              <p className="text-slate-600 mt-2 italic">{result.reframe}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <span className="text-sm font-medium text-green-600 uppercase tracking-wide">3 Steps</span>
              <ol className="mt-3 space-y-2">
                {result.steps.map((step: string, i: number) => (
                  <li key={i} className="flex gap-3 text-slate-700">
                    <span className="font-bold text-green-600">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <span className="text-sm font-medium text-amber-700 uppercase tracking-wide">Risk Check</span>
              <p className="text-amber-800 mt-2">{result.risk}</p>
            </div>

            <div className="bg-blue-600 p-6 rounded-lg text-white">
              <span className="text-sm font-medium text-blue-200 uppercase tracking-wide">Do This in 24 Hours</span>
              <p className="mt-2 text-lg">{result.microAction}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
