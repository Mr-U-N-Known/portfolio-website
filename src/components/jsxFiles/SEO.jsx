import React from "react";

import { Helmet } from "react-helmet-async";

export default function SEO(props) {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Helmet>
  );
}
