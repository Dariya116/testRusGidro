export const Diagonal = ({ className }: { className?: string }) => {
  return (
    <svg  className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 11V5M5 5H11M5 5L19 19M19 13V19M19 19H13"
        stroke="#CBD5E1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
