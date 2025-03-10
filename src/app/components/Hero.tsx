/* eslint-disable react/no-unescaped-entities */
export function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-[5%] py-12 md:py-20 gap-8 relative overflow-hidden">
      <div className="w-full md:w-1/2 max-w-lg z-10">
        <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-primary bg-secondary mb-6">
          Online Coding Editor
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
          Code In The <span className="text-primary">Cloud</span> With CodeNova
        </h1>
        <p className="text-lg mb-8 text-muted-foreground">
          A powerful, online code editor designed for modern development. With real-time collaboration, 
          intelligent suggestions, and zero setup, CodeNova helps you build amazing projects from anywhere.
        </p>
        <div className="flex gap-4">
          <button className="cn-primary-btn px-8 py-3 rounded-lg font-semibold hover:bg-hoverbtn">
            Start Coding Now
          </button>
          <button className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 ">
            Take a Tour
          </button>
        </div>
      </div>

      {/* Code Editor Preview */}
      <div className="w-full md:w-1/2 max-w-xl">
        <div className="w-full rounded-lg overflow-hidden cn-glass shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]">
          <div className="bg-background p-4 font-mono text-sm text-foreground">
            <div className="cn-terminal-controls">
              <span className="cn-terminal-red" />
              <span className="cn-terminal-yellow" />
              <span className="cn-terminal-green" />
            </div>
            <pre className="text-sm leading-relaxed overflow-x-auto cn-code-block">
              <code>
                <span className="text-pink-400">import</span> <span className="text-foreground">react</span> <span className="text-pink-400">from</span> <span className="text-yellow-200">'react'</span>{'\n'}
                <span className="text-pink-400">import</span> <span className="text-foreground">useState</span> <span className="text-pink-400">from</span> <span className="text-yellow-200">'react'</span>{'\n\n'}
                <span className="text-pink-400">function</span> <span className="text-green-400">App</span><span className="text-foreground">() {'{'}</span>{'\n'}
                {'  '}<span className="text-pink-400">const</span> <span className="text-foreground">[count, setCount]</span> <span className="text-pink-400">=</span> <span className="text-foreground">useState(</span><span className="text-purple-400">0</span><span className="text-foreground">);</span>{'\n\n'}
                {'  '}<span className="text-pink-400">return</span> <span className="text-foreground">(</span>{'\n'}
                {'    '}<span className="text-pink-400">&lt;div</span> <span className="text-green-400">className</span><span className="text-pink-400">=</span><span className="text-yellow-200">"app"</span><span className="text-pink-400">&gt;</span>{'\n'}
                {'      '}<span className="text-pink-400">&lt;h1&gt;</span><span className="text-foreground">Hello CodeNova</span><span className="text-pink-400">&lt;/h1&gt;</span>{'\n'}
                {'      '}<span className="text-pink-400">&lt;button</span> <span className="text-green-400">onClick</span><span className="text-pink-400">=</span><span className="text-foreground">{'{'}</span><span className="text-foreground">() </span><span className="text-pink-400">=&gt;</span> <span className="text-foreground">setCount(count </span><span className="text-pink-400">+</span> <span className="text-purple-400">1</span><span className="text-foreground">)</span><span className="text-foreground">{'}'}</span><span className="text-pink-400">&gt;</span>{'\n'}
                {'        '}<span className="text-foreground">Count: {'{'}count{'}'}</span>{'\n'}
                {'      '}<span className="text-pink-400">&lt;/button&gt;</span>{'\n'}
                {'    '}<span className="text-pink-400">&lt;/div&gt;</span>{'\n'}
                {'  '}<span className="text-foreground">);</span>{'\n'}
                <span className="text-foreground">{'}'}</span>{'\n\n'}
                <span className="text-pink-400">export</span> <span className="text-pink-400">default</span> <span className="text-foreground">App;</span>
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Background Blobs */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-destructive/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}