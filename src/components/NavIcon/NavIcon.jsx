const NavIcon = ({ kind }) => {
  const c = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
  };
  if (kind === "home")
    return (
      <svg {...c}>
        <path d="M4 11.5 12 4l8 7.5" />
        <path d="M6 10v9.5h12V10" />
      </svg>
    );
  if (kind === "results")
    return (
      <svg {...c}>
        <path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z" />
        <path d="M12 4h6.5c.8 0 1.5.7 1.5 1.5v13c0 .8-.7 1.5-1.5 1.5H12" />
      </svg>
    );
  if (kind === "assignments")
    return (
      <svg {...c}>
        <rect x="5" y="3.5" width="14" height="17" rx="1.5" />
        <path d="M8.5 8h7M8.5 12h7M8.5 16h4" />
      </svg>
    );
  if (kind === "classes")
    return (
      <svg {...c}>
        <rect x="3" y="5" width="18" height="13" rx="1.5" />
        <path d="M8 21h8M12 18v3" />
      </svg>
    );
  return (
    <svg {...c}>
      <path d="M9 4h6l1 3h3v13H5V7h3l1-3Z" />
      <path d="M9 11l2 2 4-4" />
    </svg>
  );
};

export default NavIcon;
