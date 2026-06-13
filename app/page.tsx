import RevealObserver from "./components/RevealObserver";

const monoLabel =
  "font-mono text-[12px] leading-[1.4] tracking-[0.08em] uppercase text-[oklch(69%_0.02_250)]";

const sectionBorder =
  "border-t border-[oklch(100%_0_0/0.08)] py-[112px] max-[680px]:py-[76px]";

function Button({
  href,
  variant = "secondary",
  children,
  ariaLabel,
}: {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={[
        "inline-flex items-center justify-center gap-[10px] min-h-[46px] px-[18px]",
        "border border-[oklch(100%_0_0/0.15)] text-[14px] font-[560]",
        "transition-[border-color,background,transform] duration-[160ms] ease-in-out",
        "hover:-translate-y-px",
        variant === "primary" ? "btn-primary" : "btn-secondary",
      ].join(" ")}
    >
      {children}
    </a>
  );
}

function SectionHead({
  label,
  heading,
  description,
}: {
  label: string;
  heading: string;
  description: string;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] gap-[clamp(32px,7vw,100px)] items-start mb-14">
      <div className={monoLabel}>{label}</div>
      <div>
        <h2
          className="font-[680] leading-[0.96] tracking-normal max-w-[900px]"
          style={{
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif",
            fontSize: "clamp(34px, 5.4vw, 74px)",
          }}
        >
          {heading}
        </h2>
        <p
          className="max-w-[760px] mt-[22px] text-[oklch(76%_0.014_250)] leading-[1.55]"
          style={{ fontSize: "clamp(17px, 2vw, 21px)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <RevealObserver />

      {/* ── Nav ── */}
      <nav
        className="sticky top-0 z-20 border-b border-[oklch(100%_0_0/0.08)] backdrop-blur-[18px]"
        style={{ background: "oklch(9% 0.015 250 / 0.78)" }}
        aria-label="Primary navigation"
      >
        <div className="shell flex items-center justify-between gap-6 h-[68px] max-[680px]:h-[62px]">
          <a
            className="inline-flex items-center gap-3 font-[650] text-[oklch(96%_0.006_250)]"
            href="#top"
            aria-label="Atlas home"
          >
            <span
              className="brand-mark-bg size-7 grid place-items-center border border-[oklch(100%_0_0/0.18)]"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <path
                  d="M12 3 21 20H3L12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 8.5 16 17H8L12 8.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
            Atlas
          </a>

          <div
            className="inline-flex items-center gap-6 text-[13px]"
            style={{ color: "oklch(76% 0.016 250)" }}
          >
            <a
              href="#mission"
              className="hidden md:block transition-colors duration-[160ms] hover:text-[oklch(98%_0.004_250)]"
            >
              Mission
            </a>
            <a
              href="#building"
              className="hidden md:block transition-colors duration-[160ms] hover:text-[oklch(98%_0.004_250)]"
            >
              Build
            </a>
            <a
              href="#roadmap"
              className="hidden md:block transition-colors duration-[160ms] hover:text-[oklch(98%_0.004_250)]"
            >
              Roadmap
            </a>
            <a
              href="#github"
              className="hidden md:block transition-colors duration-[160ms] hover:text-[oklch(98%_0.004_250)]"
            >
              GitHub
            </a>
            <a
              href="#join"
              className="inline-flex items-center px-[13px] py-[9px] border border-[oklch(100%_0_0/0.16)] text-[oklch(96%_0.004_250)]"
              style={{ background: "oklch(100% 0 0 / 0.045)" }}
            >
              Join
            </a>
          </div>
        </div>
      </nav>

      <main id="top">
        {/* ── Hero ── */}
        <header
          className="grid items-center overflow-hidden py-[92px] max-[680px]:py-[68px]"
          style={{ minHeight: "calc(100vh - 68px)" }}
        >
          <div className="shell grid grid-cols-1 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] items-center gap-[clamp(48px,7vw,104px)]">
            {/* Left copy */}
            <div className="reveal">
              <div className={`${monoLabel} mb-[26px]`}>
                buildatlas.io / open developer infrastructure
              </div>
              <h1
                className="font-[730] leading-[0.84] tracking-normal max-w-[790px]"
                style={{
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif",
                  fontSize: "clamp(82px, 15vw, 190px)",
                }}
              >
                Atlas
              </h1>
              <p
                className="max-w-[760px] mt-[34px] text-[oklch(82%_0.012_250)] leading-[1.12]"
                style={{ fontSize: "clamp(23px, 3.1vw, 38px)" }}
              >
                Build world-class open developer infrastructure that gives
                builders more capability, ownership, and freedom.
              </p>
              <p
                className="mt-[30px] font-[560] leading-[1.3] text-[oklch(96%_0.006_250)]"
                style={{ fontSize: "clamp(18px, 2vw, 24px)" }}
              >
                Expand what&apos;s possible. Earn the world&apos;s attention.
              </p>
              <div
                className="flex flex-wrap gap-3 mt-[42px]"
                aria-label="Primary calls to action"
              >
                <Button href="#join" variant="primary">
                  Join the Mission
                </Button>
                <Button href="#mission" variant="secondary">
                  View the Manifesto
                </Button>
              </div>
            </div>

            {/* Right constellation card */}
            <div
              className="constellation-card reveal relative min-h-[520px] max-[980px]:min-h-[420px] max-[680px]:min-h-[360px] overflow-hidden border border-[oklch(100%_0_0/0.1)]"
              style={{
                background:
                  "linear-gradient(135deg, oklch(100% 0 0 / 0.06), transparent 42%), oklch(100% 0 0 / 0.025)",
                boxShadow: "inset 0 1px 0 oklch(100% 0 0 / 0.1)",
              }}
            >
              <svg
                viewBox="0 0 620 620"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute inset-0 w-full h-full"
              >
                <defs>
                  <linearGradient id="atlasLine" x1="0" x2="1" y1="0" y2="1">
                    <stop stopColor="oklch(58% 0.18 255)" stopOpacity="0.72" />
                    <stop offset="1" stopColor="white" stopOpacity="0.12" />
                  </linearGradient>
                </defs>
                <path
                  d="M74 418 168 278 276 330 352 170 475 238 544 112"
                  stroke="url(#atlasLine)"
                  strokeWidth="1.2"
                  fill="none"
                />
                <path
                  d="M106 126 214 202 344 92 487 158M88 514 224 442 352 488 512 382"
                  stroke="white"
                  strokeOpacity="0.13"
                  strokeWidth="1"
                  fill="none"
                />
                <g fill="white">
                  <circle cx="74" cy="418" r="3" />
                  <circle cx="168" cy="278" r="2.5" />
                  <circle cx="276" cy="330" r="3" />
                  <circle cx="352" cy="170" r="3.5" />
                  <circle cx="475" cy="238" r="2.8" />
                  <circle cx="544" cy="112" r="3.2" />
                  <circle cx="106" cy="126" r="2" />
                  <circle cx="214" cy="202" r="2" />
                  <circle cx="344" cy="92" r="2" />
                  <circle cx="487" cy="158" r="2" />
                  <circle cx="88" cy="514" r="2" />
                  <circle cx="224" cy="442" r="2" />
                  <circle cx="352" cy="488" r="2" />
                  <circle cx="512" cy="382" r="2" />
                </g>
              </svg>

              {/* Terminal */}
              <div
                className="absolute left-7 right-7 bottom-7 max-[680px]:left-3.5 max-[680px]:right-3.5 max-[680px]:bottom-3.5 border border-[oklch(100%_0_0/0.12)] font-mono text-[12px] backdrop-blur-[16px]"
                style={{
                  background: "oklch(7% 0.014 250 / 0.86)",
                  color: "oklch(76% 0.018 250)",
                }}
                aria-label="Atlas terminal preview"
              >
                <div
                  className="flex justify-between px-3 py-[10px] border-b border-[oklch(100%_0_0/0.08)]"
                  style={{ color: "oklch(66% 0.018 250)" }}
                >
                  <span>atlas/init</span>
                  <span>open runtime</span>
                </div>
                <div className="grid gap-[10px] px-3 py-[14px] pb-4">
                  {[
                    { prompt: "$", text: "atlas agent start --repo ./infra" },
                    {
                      prompt: "→",
                      text: "context loaded: repo, issues, memory, policy",
                    },
                    {
                      prompt: "→",
                      text: "planning changes across runtime, tests, docs",
                    },
                    { prompt: "✓", text: "builder remains in control" },
                  ].map((line, i) => (
                    <div
                      key={i}
                      className="flex gap-[10px] whitespace-nowrap overflow-hidden text-ellipsis"
                    >
                      <span style={{ color: "oklch(80% 0.012 250)" }}>
                        {line.prompt}
                      </span>
                      <span>{line.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── Mission ── */}
        <section id="mission" className={`reveal ${sectionBorder}`}>
          <div className="shell">
            <SectionHead
              label="01 / Mission"
              heading="Open infrastructure for builders who intend to own their tools."
              description="Atlas is a long-term project to make developer capability portable, inspectable, and worthy of the people building the future with it."
            />
            <div
              className="grid grid-cols-1 lg:grid-cols-2 border border-[oklch(100%_0_0/0.1)]"
              style={{ background: "oklch(100% 0 0 / 0.025)" }}
            >
              <div className="p-[clamp(28px,5vw,56px)]">
                <p
                  className="leading-[1.55]"
                  style={{ color: "oklch(75% 0.014 250)", fontSize: "19px" }}
                >
                  The first product is an open-source coding agent. The
                  ambition is larger: an ecosystem for runtime, memory,
                  context, models, and infrastructure that builders can study,
                  extend, and trust.
                </p>
                <p
                  className="mt-6 leading-[1.55]"
                  style={{ color: "oklch(75% 0.014 250)", fontSize: "19px" }}
                >
                  We are not here to wrap closed systems in a friendlier
                  interface. Atlas is for teams that want leverage without
                  surrendering ownership of the stack that creates it.
                </p>
              </div>
              <div className="manifesto-panel min-h-[390px] grid content-end p-[clamp(28px,5vw,56px)] border-t lg:border-t-0 lg:border-l border-[oklch(100%_0_0/0.1)]">
                <span className={monoLabel}>Manifesto line</span>
                <strong
                  className="block max-w-[500px] mt-[18px] font-[680] leading-[1]"
                  style={{ fontSize: "clamp(28px, 4.8vw, 60px)" }}
                >
                  Capability should compound in the open.
                </strong>
              </div>
            </div>
          </div>
        </section>

        {/* ── What Atlas is building ── */}
        <section id="building" className={`reveal ${sectionBorder}`}>
          <div className="shell">
            <SectionHead
              label="02 / What Atlas is building"
              heading="A complete developer infrastructure layer, starting with the agent."
              description="Atlas is designed as a system, not a feature launch. Each layer earns its place by making builders more capable and less dependent on opaque defaults."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-r-0 border-b-0 border-[oklch(100%_0_0/0.1)]">
              {[
                {
                  n: "01",
                  title: "Coding agent",
                  desc: "An open-source agent for real engineering work: reading, planning, editing, testing, and keeping the builder in command.",
                },
                {
                  n: "02",
                  title: "Runtime",
                  desc: "A durable execution layer for agents, tools, tasks, permissions, state, and reproducible work across environments.",
                },
                {
                  n: "03",
                  title: "Memory",
                  desc: "Project-aware memory that captures durable context without turning private engineering knowledge into platform lock-in.",
                },
                {
                  n: "04",
                  title: "Context engine",
                  desc: "Infrastructure for mapping repositories, issues, docs, decisions, dependencies, and organizational intent into usable context.",
                },
                {
                  n: "05",
                  title: "Models",
                  desc: "Model interfaces and evaluation paths that let builders choose the right intelligence for the work instead of inheriting one default.",
                },
                {
                  n: "06",
                  title: "Infrastructure",
                  desc: "The shared substrate for open developer tools: observable, composable, and strong enough for serious production teams.",
                },
              ].map((item) => (
                <article
                  key={item.n}
                  className="min-h-[250px] p-7 border-r border-b border-[oklch(100%_0_0/0.1)]"
                  style={{ background: "oklch(100% 0 0 / 0.018)" }}
                >
                  <div className={monoLabel}>{item.n}</div>
                  <h3
                    className="mt-[34px] font-semibold leading-[1.05] tracking-normal"
                    style={{ fontSize: "clamp(22px, 3vw, 36px)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-4 leading-[1.6]"
                    style={{
                      color: "oklch(72% 0.014 250)",
                      fontSize: "15px",
                    }}
                  >
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Phase One / Agent ── */}
        <section className={`reveal ${sectionBorder}`}>
          <div className="shell">
            <SectionHead
              label="03 / Phase One"
              heading="The open-source coding agent is the first proof."
              description="Phase One focuses the mission into a tool developers can run, inspect, improve, and use on real repositories."
            />
            <div
              className="grid grid-cols-1 lg:grid-cols-[0.86fr_1.14fr] border border-[oklch(100%_0_0/0.1)]"
              style={{ background: "oklch(100% 0 0 / 0.025)" }}
            >
              {/* Agent copy */}
              <div className="p-[clamp(28px,5vw,56px)] border-b lg:border-b-0 lg:border-r border-[oklch(100%_0_0/0.1)]">
                <div className={monoLabel}>Atlas Agent</div>
                <h3
                  className="mt-[30px] font-semibold leading-[1] tracking-normal"
                  style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
                >
                  Serious automation. Explicit control.
                </h3>
                <p
                  className="mt-5 leading-[1.55]"
                  style={{ color: "oklch(75% 0.014 250)", fontSize: "19px" }}
                >
                  The agent should feel like infrastructure: predictable
                  permissions, visible planning, strong context handling, and
                  clean handoff between human judgment and machine execution.
                </p>
                <ul className="grid gap-[14px] mt-[34px] p-0 list-none">
                  {[
                    {
                      label: "Read",
                      desc: "Understands code, docs, tasks, and project conventions before changing files.",
                    },
                    {
                      label: "Plan",
                      desc: "Turns ambiguous work into a visible sequence that can be reviewed early.",
                    },
                    {
                      label: "Act",
                      desc: "Edits, tests, and reports with enough precision for maintainers to trust the work.",
                    },
                  ].map((item) => (
                    <li
                      key={item.label}
                      className="grid grid-cols-[92px_1fr] max-[680px]:grid-cols-1 gap-[18px] max-[680px]:gap-1.5 pt-[14px] border-t border-[oklch(100%_0_0/0.09)] text-[15px] leading-[1.55]"
                      style={{ color: "oklch(78% 0.014 250)" }}
                    >
                      <span
                        className="font-mono text-[11px] tracking-[0.08em] uppercase"
                        style={{ color: "oklch(64% 0.018 250)" }}
                      >
                        {item.label}
                      </span>
                      {item.desc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Code window */}
              <div className="p-[clamp(28px,5vw,56px)]">
                <div
                  className="overflow-hidden border border-[oklch(100%_0_0/0.12)] font-mono text-[13px] leading-[1.8]"
                  style={{ background: "oklch(6.5% 0.013 250)" }}
                >
                  <header
                    className="flex justify-between px-[14px] py-3 border-b border-[oklch(100%_0_0/0.1)] text-[11px] tracking-[0.08em] uppercase"
                    style={{ color: "oklch(64% 0.02 250)" }}
                  >
                    <span>agent-session.yml</span>
                    <span>phase-one</span>
                  </header>
                  <pre
                    className="m-0 p-5 overflow-x-auto"
                    style={{ color: "oklch(78% 0.018 250)", tabSize: 2 }}
                  >
                    <span style={{ color: "oklch(48% 0.016 250)" }}>
                      mission:
                    </span>{" "}
                    <span style={{ color: "oklch(72% 0.016 250)" }}>
                      expand_builder_capability
                    </span>
                    {`
repo:
  context: source + issues + docs + memory
  permissions: explicit
  output: reviewable_diff

agent:
  default_mode: plan_then_act
  state: visible
  ownership: builder

principle:
  - open_by_default
  - world_class_or_not_at_all
  - earn_attention_through_excellence`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Principles ── */}
        <section className={`reveal ${sectionBorder}`}>
          <div className="shell">
            <SectionHead
              label="04 / Principles"
              heading="The operating system for the company is the design system for the product."
              description="Atlas should feel inevitable because the work is disciplined. These principles keep the project from drifting into spectacle."
            />
            <div
              className="grid grid-cols-1 md:grid-cols-2 border border-b-0 border-[oklch(100%_0_0/0.1)]"
              style={{ borderLeft: "none" }}
            >
              {[
                {
                  n: "P01",
                  title: "Think bigger.",
                  desc: "Build for the ecosystem that should exist, not only the feature that can be shipped this month.",
                },
                {
                  n: "P02",
                  title: "Build world-class.",
                  desc: "Taste, reliability, documentation, and architecture are part of the same standard.",
                },
                {
                  n: "P03",
                  title: "Own critical technology.",
                  desc: "The most important developer capabilities should not depend on invisible, unchangeable systems.",
                },
                {
                  n: "P04",
                  title: "Open by default.",
                  desc: "Openness is not a marketing label. It is how trust compounds across builders and maintainers.",
                },
                {
                  n: "P05",
                  title: "Earn attention through excellence.",
                  desc: "No theatrics. Let the product, the code, and the clarity of the mission carry the signal.",
                },
                {
                  n: "P06",
                  title: "Long-term over short-term.",
                  desc: "Prefer decisions that make Atlas stronger in five years over decisions that make it louder this week.",
                },
              ].map((item) => (
                <article
                  key={item.n}
                  className="min-h-[190px] p-7 pb-[34px] border-l border-b border-[oklch(100%_0_0/0.1)]"
                  style={{ background: "oklch(100% 0 0 / 0.018)" }}
                >
                  <div className={monoLabel}>{item.n}</div>
                  <h3
                    className="mt-[34px] font-semibold leading-[1.05] tracking-normal"
                    style={{ fontSize: "clamp(22px, 3vw, 36px)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-4 leading-[1.6]"
                    style={{
                      color: "oklch(72% 0.014 250)",
                      fontSize: "15px",
                    }}
                  >
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Roadmap ── */}
        <section id="roadmap" className={`reveal ${sectionBorder}`}>
          <div className="shell">
            <SectionHead
              label="05 / Roadmap"
              heading="A phased path from agent to platform."
              description="The roadmap is intentionally sequential. Each phase creates leverage for the next without pretending the whole ecosystem exists on day one."
            />
            <div
              className="overflow-hidden border border-[oklch(100%_0_0/0.1)]"
              style={{ background: "oklch(100% 0 0 / 0.025)" }}
            >
              {[
                {
                  phase: "Phase 1",
                  title: "Atlas Agent",
                  desc: "Open-source coding agent for controlled, inspectable engineering work.",
                },
                {
                  phase: "Phase 2",
                  title: "Atlas Core",
                  desc: "Shared runtime primitives for tools, permissions, state, and agent execution.",
                },
                {
                  phase: "Phase 3",
                  title: "Atlas Open",
                  desc: "Contribution model, public specifications, and a broader maintainer surface.",
                },
                {
                  phase: "Phase 4",
                  title: "Atlas Intelligence",
                  desc: "Context, memory, model routing, and evaluation for serious developer workflows.",
                },
                {
                  phase: "Phase 5",
                  title: "Atlas Platform",
                  desc: "Hosted and self-managed infrastructure for teams building with Atlas primitives.",
                },
                {
                  phase: "Phase 6",
                  title: "Atlas Labs",
                  desc: "Research and frontier experiments that expand what open developer infrastructure can become.",
                },
              ].map((item, i, arr) => (
                <div
                  key={item.phase}
                  className={[
                    "grid grid-cols-1 md:grid-cols-[120px_1fr] lg:grid-cols-[180px_1fr_0.7fr]",
                    "gap-[10px] md:gap-7 items-baseline px-7 py-[26px] max-[680px]:px-5 max-[680px]:py-6",
                    i < arr.length - 1
                      ? "border-b border-[oklch(100%_0_0/0.09)]"
                      : "",
                  ].join(" ")}
                >
                  <div className={monoLabel}>{item.phase}</div>
                  <h3 className="text-[24px] leading-[1.1] tracking-normal font-semibold">
                    {item.title}
                  </h3>
                  <p
                    className="leading-[1.6]"
                    style={{
                      color: "oklch(72% 0.014 250)",
                      fontSize: "15px",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GitHub CTA ── */}
        <section id="github" className={`reveal ${sectionBorder}`}>
          <div className="shell">
            <div className="github-cta-bg border border-[oklch(100%_0_0/0.1)]">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-[42px] items-end p-[clamp(34px,6vw,64px)]">
                <div>
                  <div className={monoLabel}>06 / Build in public</div>
                  <h2
                    className="max-w-[850px] mt-[18px] font-[680] leading-[0.96] tracking-normal"
                    style={{
                      fontFamily:
                        "-apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif",
                      fontSize: "clamp(36px, 6vw, 82px)",
                    }}
                  >
                    Make the work visible enough to trust.
                  </h2>
                  <p
                    className="max-w-[720px] mt-5 leading-[1.55]"
                    style={{
                      color: "oklch(75% 0.014 250)",
                      fontSize: "19px",
                    }}
                  >
                    Atlas should earn contributors through substance: public
                    code, public reasoning, clear standards, and a roadmap that
                    serious builders can interrogate.
                  </p>
                </div>
                <Button
                  href="https://github.com/"
                  variant="primary"
                  ariaLabel="Open Atlas on GitHub"
                >
                  Open GitHub
                </Button>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[oklch(100%_0_0/0.1)]">
                {[
                  { value: "Public repo", label: "Source and issues" },
                  { value: "Open RFCs", label: "Architecture in daylight" },
                  { value: "Maintainer-grade", label: "Docs, tests, review" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="p-6 border-r border-b border-[oklch(100%_0_0/0.1)] last:border-r-0"
                    style={{ background: "oklch(100% 0 0 / 0.018)" }}
                  >
                    <strong className="block text-[28px] leading-[1] font-[640]">
                      {m.value}
                    </strong>
                    <span
                      className="block mt-[10px] font-mono text-[11px] tracking-[0.08em] uppercase"
                      style={{ color: "oklch(65% 0.014 250)" }}
                    >
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section
          id="join"
          className="final-bg reveal min-h-[78vh] grid items-center text-center border-t border-[oklch(100%_0_0/0.08)]"
        >
          <div className="shell">
            <h2
              className="max-w-[980px] mx-auto font-[700] leading-[0.9] tracking-normal"
              style={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif",
                fontSize: "clamp(48px, 9vw, 124px)",
              }}
            >
              Plant the flag. Build the stack.
            </h2>
            <p
              className="max-w-[680px] mx-auto mt-7 leading-[1.55]"
              style={{ color: "oklch(75% 0.014 250)", fontSize: "19px" }}
            >
              Atlas is for builders who believe the next era of developer
              infrastructure should be open, excellent, and owned by the people
              advancing it.
            </p>
            <div className="flex flex-wrap gap-3 mt-[42px] justify-center">
              <Button href="mailto:mission@buildatlas.io" variant="primary">
                Join the Mission
              </Button>
              <Button href="#mission" variant="secondary">
                Read the Mission
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-[oklch(100%_0_0/0.08)] py-7">
        <div
          className="shell flex justify-between gap-[18px] flex-wrap font-mono text-[11px] tracking-[0.08em] uppercase"
          style={{ color: "oklch(58% 0.014 250)" }}
        >
          <span>Atlas / buildatlas.io</span>
          <span>Open developer infrastructure</span>
        </div>
      </footer>
    </>
  );
}
