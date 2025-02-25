/* eslint-disable react/no-unescaped-entities */
export function Hero() {
    return (
      <section className="flex flex-col md:flex-row items-center justify-between px-[5%] py-12 md:py-20 gap-8 relative overflow-hidden ">
        <div className="w-full md:w-1/2 max-w-lg z-10">
          <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-[#6247FF] bg-[#222055] mb-6">
            Online Coding Editor
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Code In The <span className="text-[#6247FF]">Cloud</span> With CodeNova
          </h1>
          <p className="text-lg mb-8 text-gray-600">
            A powerful, online code editor designed for modern development. With real-time collaboration, 
            intelligent suggestions, and zero setup, CodeNova helps you build amazing projects from anywhere.
          </p>
          <div className="flex gap-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded font-semibold shadow-lg hover:bg-indigo-700 transition-all transform hover:-translate-y-0.5 duration-200">
              Start Coding Now
            </button>
            <button className="text-indigo-500 border-2 border-indigo-500 px-8 py-3 rounded font-semibold hover:bg-indigo-500 hover:text-white transition-colors transform hover:-translate-y-0.5 duration-200">
              Take a Tour
            </button>
          </div>
        </div>
  
        {/* TODO: Replace it with image  */}
        <div className="w-full md:w-1/2 max-w-xl">
          <div className="w-full rounded-lg overflow-hidden shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] shadow-[#0F111E]">
            <div className="bg-[#1a1a2e] p-4 font-mono text-sm text-gray-200">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <pre className="text-sm leading-relaxed overflow-x-auto">
                <code>
                    <span className="text-pink-400">import</span> <span className="text-gray-200">react</span> <span className="text-pink-400">from</span> <span className="text-yellow-200">'react'</span><span className="text-gray-200">;</span>{'\n'}
                    <span className="text-pink-400">import</span> <span className="text-gray-200">useState</span> <span className="text-pink-400">from</span> <span className="text-yellow-200">'react'</span><span className="text-gray-200">;</span>{'\n\n'}
                    <span className="text-pink-400">function</span> <span className="text-green-400">App</span><span className="text-gray-200">() {'{'}</span>{'\n'}
                    {'  '}<span className="text-pink-400">const</span> <span className="text-gray-200">[count, setCount]</span> <span className="text-pink-400">=</span> <span className="text-gray-200">useState(</span><span className="text-purple-400">0</span><span className="text-gray-200">);</span>{'\n\n'}
                    {'  '}<span className="text-pink-400">return</span> <span className="text-gray-200">(</span>{'\n'}
                    {'    '}<span className="text-pink-400">&lt;div</span> <span className="text-green-400">className</span><span className="text-pink-400">=</span><span className="text-yellow-200">"app"</span><span className="text-pink-400">&gt;</span>{'\n'}
                    {'      '}<span className="text-pink-400">&lt;h1&gt;</span><span className="text-gray-200">Hello CodeNova</span><span className="text-pink-400">&lt;/h1&gt;</span>{'\n'}
                    {'      '}<span className="text-pink-400">&lt;button</span> <span className="text-green-400">onClick</span><span className="text-pink-400">=</span><span className="text-gray-200">{'{'}</span><span className="text-gray-200">() </span><span className="text-pink-400">=&gt;</span> <span className="text-gray-200">setCount(count </span><span className="text-pink-400">+</span> <span className="text-purple-400">1</span><span className="text-gray-200">)</span><span className="text-gray-200">{'}'}</span><span className="text-pink-400">&gt;</span>{'\n'}
                    {'        '}<span className="text-gray-200">Count: {'{'}count{'}'}</span>{'\n'}
                    {'      '}<span className="text-pink-400">&lt;/button&gt;</span>{'\n'}
                    {'    '}<span className="text-pink-400">&lt;/div&gt;</span>{'\n'}
                    {'  '}<span className="text-gray-200">);</span>{'\n'}
                    <span className="text-gray-200">{'}'}</span>{'\n\n'}
                    <span className="text-pink-400">export</span> <span className="text-pink-400">default</span> <span className="text-gray-200">App;</span>{'\n'}
                </code>
                </pre>
            </div>
          </div>
        </div>
  
        
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-red-400/10 rounded-full blur-3xl -z-10"></div>
      </section>
    );
  }