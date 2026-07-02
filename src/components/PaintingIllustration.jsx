function Svg({ children }) {
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', display: 'block' }}
    >
      {children}
    </svg>
  );
}

function Hills() {
  return (
    <Svg>
      <rect width="400" height="300" fill="#B8CEDD" />
      <rect x="0" y="0" width="400" height="160" fill="#D4E8F0" opacity="0.7" />
      <circle cx="310" cy="75" r="52" fill="#F2DA80" opacity="0.42" />
      <circle cx="310" cy="75" r="34" fill="#F5E890" opacity="0.55" />
      <path d="M0 240 Q80 205 180 220 Q280 238 400 210 L400 300 L0 300Z" fill="#7A9E98" />
      <path d="M0 262 Q90 248 180 258 Q290 270 400 248 L400 300 L0 300Z" fill="#4E7A72" />
      <path
        d="M0 280 Q70 268 160 275 Q250 282 340 268 Q380 262 400 272 L400 300 L0 300Z"
        fill="#2D5848"
      />
      <ellipse cx="88" cy="268" rx="18" ry="28" fill="#1C3828" />
      <ellipse cx="109" cy="263" rx="13" ry="22" fill="#22382A" />
      <ellipse cx="340" cy="272" rx="16" ry="24" fill="#1C3828" />
      <rect x="180" y="258" width="40" height="42" fill="#C4B890" opacity="0.38" />
      <ellipse cx="200" cy="230" rx="42" ry="12" fill="#90C0D8" opacity="0.35" />
    </Svg>
  );
}

function Golden() {
  return (
    <Svg>
      <rect width="400" height="300" fill="#DEBA68" />
      <rect x="0" y="0" width="400" height="185" fill="#ECC862" opacity="0.85" />
      <circle cx="330" cy="62" r="48" fill="#F8EE98" opacity="0.6" />
      <path d="M0 185 Q100 172 220 180 Q310 185 400 175 L400 205 L0 205Z" fill="#3A5C28" />
      <path d="M0 200 Q200 192 400 196 L400 300 L0 300Z" fill="#C8982C" />
      <path
        d="M0 250 Q100 244 200 248 Q300 252 400 246 L400 300 L0 300Z"
        fill="#8A6018"
      />
      <path
        d="M0 205 Q25 213 50 205 M60 206 Q85 214 110 206 M120 207 Q145 215 170 207 M180 207 Q205 215 230 207 M240 207 Q265 215 290 207 M300 207 Q325 215 350 207 M360 207 Q385 215 400 207"
        stroke="#E8C040"
        strokeWidth="1.8"
        fill="none"
        opacity="0.5"
      />
    </Svg>
  );
}

function Flowers() {
  return (
    <Svg>
      <rect width="400" height="300" fill="#D2C4A4" />
      <rect x="0" y="212" width="400" height="88" fill="#9C7840" />
      <rect x="0" y="209" width="400" height="5" fill="#7A5828" opacity="0.85" />
      <path
        d="M175 214 Q165 196 168 168 Q170 150 185 145 L215 145 Q230 150 232 168 Q235 196 225 214Z"
        fill="#F0EAE2"
      />
      <rect x="168" y="212" width="64" height="5" rx="2" fill="#DDD5C5" />
      <line x1="193" y1="145" x2="184" y2="78" stroke="#4A7A30" strokeWidth="2.5" />
      <line x1="198" y1="145" x2="198" y2="50" stroke="#4A7A30" strokeWidth="2" />
      <line x1="205" y1="145" x2="220" y2="62" stroke="#587A28" strokeWidth="2" />
      <line x1="200" y1="145" x2="172" y2="88" stroke="#3A6A20" strokeWidth="2" />
      <line x1="204" y1="145" x2="230" y2="72" stroke="#4A6A28" strokeWidth="2" />
      <circle cx="184" cy="74" r="19" fill="#C44878" />
      <circle cx="184" cy="74" r="8" fill="#F0A0B8" />
      <circle cx="200" cy="50" r="17" fill="#8A5EC8" />
      <circle cx="200" cy="50" r="7" fill="#C098E8" />
      <circle cx="222" cy="62" r="16" fill="#E8C030" />
      <circle cx="222" cy="62" r="6" fill="#F5E878" />
      <circle cx="172" cy="88" r="14" fill="#E84830" />
      <circle cx="172" cy="88" r="5" fill="#F09070" />
      <circle cx="232" cy="72" r="13" fill="#F5EEE2" />
      <circle cx="232" cy="72" r="5" fill="#D8CEBC" />
      <ellipse cx="183" cy="112" rx="13" ry="6" fill="#3A6A20" transform="rotate(-28 183 112)" />
      <ellipse cx="210" cy="100" rx="11" ry="5" fill="#4A7A28" transform="rotate(22 210 100)" />
    </Svg>
  );
}

function Forest() {
  return (
    <Svg>
      <rect width="400" height="300" fill="#162C1C" />
      <rect x="0" y="0" width="400" height="120" fill="#0A1408" opacity="0.88" />
      <rect x="160" y="100" width="80" height="200" fill="#D4CC78" opacity="0.08" />
      <rect x="18" y="25" width="22" height="275" fill="#08140C" />
      <rect x="58" y="15" width="28" height="285" fill="#061008" />
      <rect x="145" y="68" width="15" height="232" fill="#142418" />
      <rect x="308" y="28" width="24" height="272" fill="#08140C" />
      <rect x="358" y="48" width="20" height="252" fill="#061008" />
      <ellipse cx="200" cy="188" rx="58" ry="42" fill="#D4C880" opacity="0.3" />
      <ellipse cx="200" cy="252" rx="40" ry="24" fill="#C8BE74" opacity="0.22" />
      <ellipse cx="118" cy="232" rx="24" ry="15" fill="#CCC870" opacity="0.16" />
      <ellipse cx="285" cy="218" rx="20" ry="13" fill="#CCC870" opacity="0.14" />
      <path
        d="M157 300 Q178 265 184 245 Q192 215 198 185 Q200 158 200 132 Q200 158 202 185 Q208 215 216 245 Q222 265 243 300Z"
        fill="#786438"
      />
      <ellipse cx="200" cy="128" rx="30" ry="16" fill="#F0E898" opacity="0.42" />
      <ellipse cx="62" cy="268" rx="44" ry="17" fill="#285028" opacity="0.78" />
      <ellipse cx="338" cy="278" rx="40" ry="14" fill="#285028" opacity="0.78" />
    </Svg>
  );
}

function Lemons() {
  return (
    <Svg>
      <rect width="400" height="300" fill="#C8A878" />
      <rect x="0" y="0" width="400" height="205" fill="#B89858" opacity="0.52" />
      <path
        d="M0 202 Q55 192 110 198 Q210 204 305 195 Q375 190 400 198 L400 300 L0 300Z"
        fill="#F5F0E8"
        opacity="0.94"
      />
      <rect x="0" y="201" width="400" height="4" fill="#DEDAD2" />
      <ellipse cx="200" cy="218" rx="94" ry="28" fill="#B04828" />
      <ellipse cx="200" cy="215" rx="90" ry="23" fill="#C85232" />
      <path
        d="M106 218 Q112 254 132 268 Q164 285 200 287 Q236 285 268 268 Q288 254 294 218Z"
        fill="#903020"
      />
      <ellipse cx="200" cy="282" rx="40" ry="9" fill="#6C2010" opacity="0.6" />
      <ellipse cx="157" cy="207" rx="38" ry="30" fill="#E8C030" />
      <ellipse cx="200" cy="202" rx="35" ry="28" fill="#F0D040" />
      <ellipse cx="244" cy="208" rx="32" ry="26" fill="#D8B428" />
      <ellipse cx="188" cy="198" rx="10" ry="7" fill="#F8EE78" opacity="0.5" />
      <ellipse cx="200" cy="230" rx="80" ry="12" fill="#6A3810" opacity="0.28" />
    </Svg>
  );
}

function Coastal() {
  return (
    <Svg>
      <rect width="400" height="300" fill="#3C70A8" />
      <rect x="0" y="0" width="400" height="178" fill="#88B4DC" />
      <ellipse cx="108" cy="78" rx="74" ry="27" fill="#F5F5F8" opacity="0.55" />
      <ellipse cx="298" cy="62" rx="65" ry="21" fill="#F5F5F8" opacity="0.45" />
      <ellipse cx="190" cy="42" rx="44" ry="14" fill="#F5F5F8" opacity="0.3" />
      <rect x="0" y="170" width="400" height="130" fill="#2C64A0" />
      <ellipse cx="148" cy="185" rx="92" ry="14" fill="#7ABCE0" opacity="0.38" />
      <ellipse cx="295" cy="202" rx="72" ry="10" fill="#7ABCE0" opacity="0.28" />
      <path
        d="M0 300 L0 196 Q28 176 58 170 Q84 178 98 196 Q118 168 150 162 Q182 170 198 196 L198 300Z"
        fill="#D2C29E"
      />
      <path
        d="M255 300 L255 206 Q274 185 300 182 Q330 186 360 198 Q380 182 400 174 L400 300Z"
        fill="#D2C29E"
      />
      <path
        d="M0 196 Q22 188 46 175"
        stroke="#386A28"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M255 206 Q278 194 302 186 Q330 184 358 195"
        stroke="#386A28"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ILLUSTRATIONS = {
  hills: Hills,
  golden: Golden,
  flowers: Flowers,
  forest: Forest,
  lemons: Lemons,
  coastal: Coastal,
};

export default function PaintingIllustration({ name }) {
  const Illustration = ILLUSTRATIONS[name];
  return Illustration ? <Illustration /> : null;
}
