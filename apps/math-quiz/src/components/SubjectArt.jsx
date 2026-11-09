export default function SubjectArt({ subject, className = "" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {subject === "math" && (
        <>
          <rect x="21" y="13" width="59" height="75" rx="8" fill="var(--art-paper, #fffdf6)" transform="rotate(-7 50 50)" />
          <path d="M32 36h35M32 25h20M35 52h13m-6.5-6.5v13m14-12 10 10m0-10L56 57M35 70h13m9-3h10m-10 6h10" />
          <circle cx="77" cy="21" r="10" fill="var(--subject-tint)" />
          <path d="m73 21 3 3 5-6" />
        </>
      )}
      {subject === "ela" && (
        <>
          <path d="M49 29C37 20 24 19 11 22v53c14-3 27-1 38 7 11-8 25-10 39-7V22c-14-3-27-2-39 7Z" fill="var(--art-paper, #fffdf6)" />
          <path d="M49 29v53M22 37c6-1 12 0 18 3m-18 9c6-1 12 0 18 3m19-12c6-3 12-4 18-3m-18 15c6-3 12-4 18-3" />
          <path d="M68 14v20l6-4 6 4V14Z" fill="var(--subject-tint)" />
        </>
      )}
      {subject === "science" && (
        <>
          <path d="M39 14h23m-18 0v28L23 76c-4 6 0 12 7 12h45c7 0 11-6 7-12L59 42V14" fill="var(--art-paper, #fffdf6)" />
          <path d="M35 57h35l12 19c4 6 0 12-7 12H30c-7 0-11-6-7-12Z" fill="var(--subject-tint)" />
          <circle cx="45" cy="71" r="4" /><circle cx="64" cy="78" r="3" />
          <path d="M21 25v10m-5-5h10M79 28v8m-4-4h8" />
        </>
      )}
      {subject === "geography" && (
        <>
          <path d="m10 29 25-9 29 10 25-9v57l-25 9-29-10-25 9Z" fill="var(--art-paper, #fffdf6)" />
          <path d="M35 20v57m29-47v57M20 53c16 20 32-19 53 5" strokeDasharray="3 6" />
          <path d="M75 11a11 11 0 0 0-11 11c0 8 11 18 11 18s11-10 11-18a11 11 0 0 0-11-11Z" fill="var(--subject-tint)" />
          <circle cx="75" cy="22" r="3" />
        </>
      )}
      {subject === "solarSystem" && (
        <>
          <circle cx="50" cy="51" r="26" fill="var(--art-paper, #fffdf6)" />
          <path d="M25 42C3 52 5 70 29 69c17 0 44-12 56-23s4-19-12-16" />
          <path d="M41 28c12 7 19 22 17 42m-30-31c9 0 14 4 18 10" opacity=".55" />
          <path d="M80 10v12m-6-6h12M16 20v8m-4-4h8" />
          <circle cx="80" cy="80" r="4" fill="var(--subject-tint)" />
        </>
      )}
      {subject === "dinosaurs" && (
        <>
          <path d="M18 65c-3-10-1-18 8-22 8-4 20-2 26 1l8-21c2-7 9-9 16-6l9 5v15H73l-6 24-9 10v15H46V73H33v13H22V73L10 62Z" fill="var(--art-paper, #fffdf6)" />
          <path d="m28 42 5-11 7 12 6-10 7 12" fill="var(--subject-tint)" />
          <circle cx="77" cy="26" r="1.5" fill="currentColor" />
          <path d="M73 37h12M18 90h54" />
        </>
      )}
      {subject === "funFacts" && (
        <>
          <path d="M31 39a21 21 0 1 1 36 15c-7 7-8 11-8 17H41c0-6-1-10-8-17a21 21 0 0 1-2-15Z" fill="var(--art-paper, #fffdf6)" />
          <path d="M41 77h18m-15 7h12M50 71V49m-8-7 8 7 8-7M50 6V1M15 22l-6-4m76 4 6-4M14 48H5m81 0h9" />
          <path d="m47 27 3-5 3 5" strokeWidth="2" />
        </>
      )}
      {subject === "advanced" && (
        <>
          <path d="m50 10 12 24 27 4-20 19 5 27-24-13-24 13 5-27-20-19 27-4Z" fill="var(--art-paper, #fffdf6)" />
          <path d="m39 49 8 8 15-17M14 12l7 8m64-6-6 7M8 80l10-4m66 5 9 3" />
        </>
      )}
    </svg>
  );
}
