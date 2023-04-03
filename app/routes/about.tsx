import type { LinksFunction } from "@remix-run/node";
import {Link} from "@remix-run/react";

import stylesUrl from "~/styles/about.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function IndexRoute() {
  return (
    <div>
        <Link to="/"><span>Go to page Home</span></Link> <br />
        Hello Index Route
    </div>
    );
}
