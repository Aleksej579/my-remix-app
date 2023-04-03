import {Link} from "@remix-run/react";

export const meta = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>

      <ul>
        <li>
          <Link to="/about"><span>Go to page About</span></Link>
        </li>
        <li>
          <Link to="/contact"><span>Go to page Contact</span></Link>
        </li>
      </ul>
    </div>
  );
}
