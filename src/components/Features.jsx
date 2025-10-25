import React from 'react';
import { Grid, Zap, Shield, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Grid,
    title: 'Modular building blocks',
    desc: 'Compose complex workflows with simple, reusable modules that your whole team understands.'
  },
  {
    icon: Zap,
    title: 'Lightning-fast automations',
    desc: 'Trigger actions in real time and keep work moving with event-driven pipelines and smart batching.'
  },
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    desc: 'Single sign-on, audit logs, and fine-grained permissions to keep your data protected.'
  },
  {
    icon: TrendingUp,
    title: 'Insights that compound',
    desc: 'Turn activity into outcomes with dashboards that highlight momentum and bottlenecks.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative w-full border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Build once, multiply everywhere</h2>
          <p className="mt-3 text-neutral-700">
            Scale processes without scaling complexity. Design systems that improve with every iteration.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <div key={idx} className="group relative rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-white">
                <f.icon size={18} />
              </div>
              <h3 className="text-lg font-medium text-neutral-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-700">{f.desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent transition group-hover:ring-neutral-300" />
            </div>
          ))}
        </div>

        <div id="pricing" className="mt-16 grid items-center gap-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 sm:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">Start free. Scale as you grow.</h3>
            <p className="mt-2 text-neutral-700">No credit card required. Upgrade when your team is ready.</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-700">
              <li>Unlimited viewers, up to 3 creators</li>
              <li>5 automations and 1,000 runs/month</li>
              <li>SSO and advanced governance on Enterprise</li>
            </ul>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="flex items-end gap-2">
              <span className="text-4xl font-semibold tracking-tight text-neutral-900">$0</span>
              <span className="pb-1 text-neutral-600">/ month</span>
            </div>
            <p className="mt-2 text-sm text-neutral-700">Everything you need to explore Multiply.</p>
            <a href="#" className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-neutral-900 px-4 py-3 text-sm font-medium text-white hover:bg-neutral-800">Create free account</a>
            <div className="mt-4 text-center text-xs text-neutral-600">Pro starts at $19/user. Enterprise custom pricing.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
