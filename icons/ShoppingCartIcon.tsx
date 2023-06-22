const ShoppingCartIcon = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    className="cursor-pointer"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M4.786 5h13.44a2 2 0 011.896 2.632l-1.666 5A2 2 0 0116.558 14H6.071M4.786 5l-.04-.283A2 2 0 002.765 3H2m2.786 2l1.285 9m0 0l.184 1.283A2 2 0 008.235 17H17m0 0a2 2 0 100 4 2 2 0 000-4zm-6 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

export default ShoppingCartIcon;
