window.renderProduct = function(app, t) {
    app.innerHTML = `
        <section class="max-w-6xl mx-auto px-6 pt-12">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-bold tracking-tight">${t.explodedTitle}</h2>
                <p class="text-gray-500 mt-4 max-w-2xl mx-auto">${t.explodedSub}</p>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex justify-center">
                    <svg class="w-full max-w-md h-auto" viewBox="0 0 400 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="200" y1="50" x2="200" y2="480" stroke="#cbd5e1" stroke-dasharray="4 4" stroke-width="1.5"/>
                        <g transform="translate(0, 0)">
                            <path d="M200 40 L260 70 L240 120 L160 120 L140 70 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
                            <text x="200" y="90" font-family="system-ui" font-weight="600" font-size="11" fill="#475569" text-anchor="middle">${t.svgPlate}</text>
                        </g>
                        <g transform="translate(0, 90)">
                            <path d="M200 60 L280 80 L280 110 L200 130 L120 110 L120 80 Z" fill="rgba(255,255,255,0.7)" stroke="#64748b" stroke-width="1.5"/>
                            <text x="200" y="100" font-family="system-ui" font-weight="600" font-size="11" fill="#475569" text-anchor="middle">${t.svgDiffuser}</text>
                        </g>
                        <g transform="translate(0, 180)">
                            <rect x="150" y="50" width="16" height="10" rx="2" fill="#0f172a"/>
                            <rect x="234" y="50" width="16" height="10" rx="2" fill="#0f172a"/>
                            <rect x="192" y="80" width="16" height="10" rx="2" fill="#0f172a"/>
                            <text x="200" y="110" font-family="system-ui" font-weight="600" font-size="11" fill="#0284c7" text-anchor="middle">${t.svgSwitches}</text>
                        </g>
                        <g transform="translate(0, 270)">
                            <path d="M150 40 L250 40 L280 80 L250 120 L150 120 L120 80 Z" fill="#0f172a" stroke="#334155" stroke-width="2"/>
                            <rect x="185" y="65" width="30" height="30" rx="3" fill="#334155" stroke="#475569" stroke-width="2"/>
                            <circle cx="200" cy="80" r="12" fill="none" stroke="#22d3ee" stroke-width="2" stroke-dasharray="3 3"/>
                            <text x="200" y="135" font-family="system-ui" font-weight="600" font-size="11" fill="#38bdf8" text-anchor="middle">${t.svgMCU}</text>
                        </g>
                        <g transform="translate(0, 390)">
                            <rect x="150" y="10" width="100" height="40" rx="4" fill="#64748b" stroke="#475569" stroke-width="1.5"/>
                            <rect x="160" y="15" width="80" height="30" rx="2" fill="#e2e8f0"/>
                            <text x="200" y="34" font-family="system-ui" font-weight="700" font-size="11" fill="#475569" text-anchor="middle">${t.svgBattery}</text>
                        </g>
                        <g transform="translate(0, 440)">
                            <path d="M130 50 L270 50 L300 90 L270 130 L130 130 L100 90 Z" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
                            <text x="200" y="95" font-family="system-ui" font-weight="600" font-size="11" fill="#94a3b8" text-anchor="middle">${t.svgLego}</text>
                        </g>
                    </svg>
                </div>
                <div class="space-y-6">
                    <div class="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-start space-x-4">
                        <div class="p-3 bg-blue-50 text-blue-500 rounded-xl"><i data-lucide="shield"></i></div>
                        <div><h4 class="font-bold text-lg">${t.partPlate}</h4><p class="text-sm text-gray-500 mt-1 leading-relaxed">${t.partPlateDesc}</p></div>
                    </div>
                    <div class="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-start space-x-4">
                        <div class="p-3 bg-amber-50 text-amber-500 rounded-xl"><i data-lucide="sun"></i></div>
                        <div><h4 class="font-bold text-lg">${t.partDiffuser}</h4><p class="text-sm text-gray-500 mt-1 leading-relaxed">${t.partDiffuserDesc}</p></div>
                    </div>
                    <div class="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-start space-x-4">
                        <div class="p-3 bg-red-50 text-red-500 rounded-xl"><i data-lucide="target"></i></div>
                        <div><h4 class="font-bold text-lg">${t.partSwitches}</h4><p class="text-sm text-gray-500 mt-1 leading-relaxed">${t.partSwitchesDesc}</p></div>
                    </div>
                    <div class="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-start space-x-4">
                        <div class="p-3 bg-emerald-50 text-emerald-500 rounded-xl"><i data-lucide="cpu"></i></div>
                        <div><h4 class="font-bold text-lg">${t.partMCU}</h4><p class="text-sm text-gray-500 mt-1 leading-relaxed">${t.partMCUDesc}</p></div>
                    </div>
                    <div class="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-start space-x-4">
                        <div class="p-3 bg-purple-50 text-purple-500 rounded-xl"><i data-lucide="battery-charging"></i></div>
                        <div><h4 class="font-bold text-lg">${t.partBattery}</h4><p class="text-sm text-gray-500 mt-1 leading-relaxed">${t.partBatteryDesc}</p></div>
                    </div>
                    <div class="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-start space-x-4">
                        <div class="p-3 bg-blue-50 text-blue-500 rounded-xl"><i data-lucide="blocks"></i></div>
                        <div><h4 class="font-bold text-lg">${t.partLego}</h4><p class="text-sm text-gray-500 mt-1 leading-relaxed">${t.partLegoDesc}</p></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="max-w-6xl mx-auto px-6 mt-32">
            <div class="text-center mb-12">
                <h3 class="text-2xl md:text-3xl font-bold">${t.layoutTitle}</h3>
                <p class="text-gray-500 mt-2">${t.layoutSub}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="apple-card p-6 text-center">
                    <h5 class="font-bold text-lg mb-3">${t.layoutHoneycomb}</h5>
                    <div class="w-full h-40 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                        <div class="grid grid-cols-3 gap-2 w-32">
                            <div class="w-8 h-8 bg-orange-400 octagon mx-auto"></div><div class="w-8 h-8 bg-orange-400 octagon mx-auto"></div><div class="w-8 h-8 bg-orange-400 octagon mx-auto"></div>
                            <div class="w-8 h-8 bg-orange-400 octagon mx-auto"></div><div class="w-8 h-8 bg-orange-400 octagon mx-auto"></div><div class="w-8 h-8 bg-orange-400 octagon mx-auto"></div>
                        </div>
                    </div>
                    <p class="text-xs text-gray-400">${t.layoutHoneycombDesc}</p>
                </div>
                <div class="apple-card p-6 text-center">
                    <h5 class="font-bold text-lg mb-3">${t.layoutMatrix}</h5>
                    <div class="w-full h-40 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                        <div class="grid grid-cols-3 gap-3 w-32">
                            <div class="w-8 h-8 bg-blue-500 rounded-lg"></div><div class="w-8 h-8 bg-blue-500 rounded-lg"></div><div class="w-8 h-8 bg-blue-500 rounded-lg"></div>
                            <div class="w-8 h-8 bg-blue-500 rounded-lg"></div><div class="w-8 h-8 bg-blue-500 rounded-lg"></div><div class="w-8 h-8 bg-blue-500 rounded-lg"></div>
                        </div>
                    </div>
                    <p class="text-xs text-gray-400">${t.layoutMatrixDesc}</p>
                </div>
                <div class="apple-card p-6 text-center">
                    <h5 class="font-bold text-lg mb-3">${t.layoutRandom}</h5>
                    <div class="w-full h-40 bg-gray-50 rounded-xl flex items-center justify-center mb-4 relative">
                        <div class="absolute top-4 left-6 w-8 h-8 bg-green-500 octagon"></div><div class="absolute bottom-6 right-8 w-8 h-8 bg-green-500 octagon"></div>
                        <div class="absolute top-12 right-12 w-8 h-8 bg-green-500 octagon"></div><div class="absolute bottom-4 left-10 w-8 h-8 bg-green-500 octagon"></div>
                    </div>
                    <p class="text-xs text-gray-400">${t.layoutRandomDesc}</p>
                </div>
            </div>
        </section>
    `;
};